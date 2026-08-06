
import type { CloseModal, RenderModal, SetUserFromValues, ShowModal, UserLike } from '../interface/RenderModal';
import modalHtml from './modal.html?raw';
import '../style/modal.scss';
import { getUserById } from '../../usecases';
let modal: HTMLElement;
let form: HTMLFormElement | undefined;
let loaderUser = {};




//Todo:cargar el usuario id
export const showModal:ShowModal = async (id) => {
 // if(!modal || form) return;
 

  modal?.classList.remove('modal-container__hide');
  loaderUser = {};
  if(!id) return;
  const user =  await getUserById(id)
  setFormValues(user);
  
}

export const closeModal:CloseModal = () => {
  modal?.classList.add('modal-container__hide');
  form?.reset();
}

const setFormValues:SetUserFromValues = (user) => {
 const firstNameInput = form?.querySelector('[name="firstName"]') as HTMLInputElement;
 const lastNameINput  = form?.querySelector('[name="lastName"]') as HTMLInputElement;
 const balanceInput = form?.querySelector('[name="balance"]') as HTMLInputElement;
 const isActiveChecked = form?.querySelector('[name="isActive"]') as HTMLInputElement;

 //if(!firstNameInput || !lastNameINput || !balanceInput || !isActiveChecked) return;
 //console.log(firstNameInput, lastNameINput, balanceInput, isActiveChecked);


 firstNameInput.value = user.firstName;
 lastNameINput.value = user.lastName;
 balanceInput.value = user.balance.toString();
 isActiveChecked.checked = user.isActive;

 loaderUser = user;

}





export const renderModal: RenderModal = (element: HTMLElement, callBack) => {
  if (modal) return


  modal = document.createElement('div');
  modal.innerHTML = modalHtml;
  modal.classList.add('modal-container', 'modal-container__hide');


  form = modal.querySelector('form') as HTMLFormElement;

  modal.addEventListener('click', (event) => {
    // console.log(event.target);
    if (event.target === modal) {
      closeModal();
    }
  });


  form?.addEventListener('submit', async(event) => {
    event.preventDefault();
    //console.log('enviando formulario');

    //el formdata es para obtener los valores del formulario
    const formData = new FormData(form);
    console.log(formData);
    //esto para no sobreescribir los valores que no se editaron
    const userLike: UserLike = {...loaderUser }


    for (const [key, value] of formData) {
      //  console.log(iterador);
      //console.log('balance');
      if (key === 'balance') {
        userLike[key] = Number(value);
        //console.log(type);
      } else {
        userLike[key] = value.toString();
      }
      if (key === 'isActive') {
        // userLike[key] = value ===
        userLike[key] = (value === 'on') ? true : false;

      }
      // userLike[key] = value.toString() ;
    }
     await callBack?.(userLike);
    closeModal();

    //Todo:guardar usuario
    console.log(userLike);
  });

  element.append(modal);

}