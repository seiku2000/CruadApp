import type { RenderAddButton } from "../interface/RenderAddButton";
import '../style/btnAdd.scss'

export const renderAddButton:RenderAddButton = (element:HTMLElement)  => {
  const btnAdd = document.createElement('button');
  btnAdd.textContent = '+';
  btnAdd.className = 'btn-Add';
  element.appendChild(btnAdd);

  btnAdd.addEventListener('click' ,() => {
    throw new Error('Function not implemented.');
  });
  return btnAdd;
  
}