import type { RenderAddButton } from "../interface/RenderAddButton";
import { showModal } from "../modal/renderModal";
import '../style/btnAdd.scss'
//funcion para abrir modal del formulario
export const renderAddButton:RenderAddButton = (element:HTMLElement)  => {
  const btnAdd = document.createElement('button');
  btnAdd.textContent = '+';
  btnAdd.className = 'btn-Add';
  element.appendChild(btnAdd);

  btnAdd.addEventListener('click' ,() => {
   // throw new Error('Function not implemented.');
   showModal(null);
  });
  return btnAdd;
  
}