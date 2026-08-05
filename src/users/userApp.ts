import type { IUserApp } from "./IUseApp";
import { renderButtons, renderModal, renderTable } from "./presentacion";
import useStore from "./store/useStore";
import { saveUser } from "./usecases/saveUser";

export const userApp: IUserApp = async (element: HTMLElement) => {
  //const users = useStore.getUser();

  element.innerHTML = `Loading`;
  await useStore.loadNextPage();
  element.innerHTML = ``;
  renderTable(element);
  renderButtons(element);
  renderModal(element, async (userLike) => {


    // const user = await saveUser(userLike);
    // useStore.onUserChanged(user);
    //  renderTable(element);
    //console.log(user);
  });

  //console.log(page);

  //console.log(useStore.getUser());

}