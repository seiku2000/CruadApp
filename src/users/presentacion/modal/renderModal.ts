
import type { RenderModal } from '../interface/RenderModal';
import modalHtml  from './modal.html?raw';
import  '../style/modal.scss';
let modal: HTMLElement;

export const renderModal : RenderModal = (element: HTMLElement) => {
    if(modal) return 

    modal = document.createElement('div');
    modal.innerHTML =  modalHtml;
    modal.classList.add('modal-container', 'hide-modal');
    element.append(modal);

}