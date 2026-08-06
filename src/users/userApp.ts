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
  //TODO: renderModal cargar modal con la informacion del usuario
  renderModal(element, async (userLike) => {


     const user = await saveUser(userLike);
     useStore.onUserChanged(user);

    //TODO: renderTable renderizar la tabla con el usuario actualizado
     renderTable(element);
    //console.log(user);
  });

 

}