import type { IUserApp } from "./IUseApp";
import useStore from "./store/useStore";

export const userApp:IUserApp =async (element:HTMLElement) => {
    element.innerHTML = `Loading`;
  await useStore.loadNextPage(); 
  //console.log(page);

  console.log(useStore.getUser());
    
}