
import type { RenderModal } from '../interface/RenderModal';
import modalHtml  from './modal.html?raw';
import  '../style/modal.scss';
let modal: HTMLElement;
let form: HTMLFormElement | null;


//Todo:cargar el usuario id
export const showModal = () => {
    modal?.classList.remove('modal-container__hide');
}

export const closeModal = () => {
    modal?.classList.add('modal-container__hide');
}

export const renderModal : RenderModal = (element: HTMLElement) => {
    if(modal) return
   

    modal = document.createElement('div');
    modal.innerHTML =  modalHtml;
    modal.classList.add('modal-container', 'modal-container__hide');

     
    form = modal.querySelector('form');

    modal.addEventListener('click' , (event) =>{
       // console.log(event.target);
        if(event.target === modal){
        closeModal();
    }
    });


    form?.addEventListener('submit' , (event) =>{
        event.preventDefault();
        console.log('enviando formulario');
    });

    element.append(modal);

}