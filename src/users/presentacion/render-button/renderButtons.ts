import useStore from "../../store/useStore";
import { renderAddButton } from "../render-add-button/renderAddButton";
import { renderTable } from "../render-table/rendertable";
import '../style/buttons.css';


//funcion para renderizar los botones de las paginas
export const renderButtons  =(element:HTMLElement) => {
    const divButtons: HTMLDivElement = document.createElement('div');
    divButtons.className = 'buttons-container';
    const nextButton: HTMLButtonElement = document.createElement('button');
    nextButton.classList.add('next-button');
    nextButton.innerText = 'Next';


    const prevButton: HTMLButtonElement =  document.createElement('button');
    prevButton.className = 'prev-button';
    prevButton.classList.add('prev-button');
    prevButton.innerText = 'Previous';

    const currentPageLabel: HTMLSpanElement = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = useStore.getCurrentPage().toString();

    const btnAdd = renderAddButton(element);
    divButtons.append(prevButton,currentPageLabel,nextButton, btnAdd);
    element.append(divButtons);
    //element.append(prevButton,currentPageLabel,nextButton);



    //event listener para el boton de siguiente
    nextButton.addEventListener('click',async() =>{
        await useStore.loadNextPage();
        currentPageLabel.innerText = useStore.getCurrentPage().toString();
        renderTable(element);
    });
    //event listener para el boton de anteriors
    prevButton.addEventListener('click' ,async() =>{
        await useStore.loadPreviusPage();
        currentPageLabel.innerText = useStore.getCurrentPage().toString();
        renderTable(element);
    });

    
}