import type { IUserApp } from "./IUseApp";
import { renderButtons, renderTable } from "./presentacion";
import useStore from "./store/useStore";

export const userApp:IUserApp =async (element:HTMLElement) => {
  const users = useStore.getUser();
  
  element.innerHTML = `Loading`;
  await useStore.loadNextPage(); 
  element.innerHTML = ``;
  renderTable(element);
  renderButtons(element);
  //console.log(page);
 
  //console.log(useStore.getUser());
    
}