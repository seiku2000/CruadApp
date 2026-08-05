
import type { RenderModal, UserLike } from '../interface/RenderModal';
import modalHtml from './modal.html?raw';
import '../style/modal.scss';
let modal: HTMLElement;
let form: HTMLFormElement | undefined;


//Todo:cargar el usuario id
export const showModal = () => {
  modal?.classList.remove('modal-container__hide');
}

export const closeModal = () => {
  modal?.classList.add('modal-container__hide');
  form?.reset();
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


  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    //console.log('enviando formulario');


    const formData = new FormData(form);
    console.log(formData);
    const userLike: UserLike = {}


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
    callBack(userLike);
    closeModal();

    //Todo:guardar usuario
    console.log(userLike);
  });

  element.append(modal);

}