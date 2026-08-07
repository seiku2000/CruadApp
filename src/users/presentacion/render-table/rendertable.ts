//import { User } from "../models/user";
import useStore from "../../store/useStore";
import { delelteUser } from "../../usecases";
import type { CreateTable, RenderTable, TableDeleteUser, TableSelectUser } from "../interface/RenderTable";
import { showModal } from "../modal/renderModal";
import "../style/table.css";
//variable para la tabla
let table: HTMLTableElement | null;
/**
 *   <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
 * 
 * 
 */


//funcion para crear el encabezado de la tabla
const createTable: CreateTable= () => {
    const table = document.createElement('table');
    const tableHeader = document.createElement('thead');
    tableHeader.innerHTML = `
    <tr>
        <th>ID</th>
        <th>Balance</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
    </tr>
    `

    const tableBody = document.createElement('tbody');
    table.append(tableHeader, tableBody);
    return table;
}

//funcion para seleccionar un usuario del buton select
const tableSelectUser:TableSelectUser = (event: Event) => {
   // console.log(event.target);
   const element = event.target as HTMLElement;
   const selectUser = element.closest('.btn-select');
   if(!selectUser) return;
   const id:string | null = selectUser.getAttribute('data-id');
   //console.log(id);
   showModal(id);

}

const tableDeleteUser:TableDeleteUser = async(event: Event) => {

   const element = event.target as HTMLElement;
   const selectUser = element.closest('.btn-delete');
   if(!selectUser) return;
   const id:string | undefined = selectUser.getAttribute('data-id') as string;
   try {
   // await deletete
   await delelteUser(id);
   await useStore.reloadPage();
   const currentPage = document.querySelector('#current-page');
   if(currentPage){
    currentPage.textContent = useStore.getCurrentPage().toString();
   }
   renderTable(element);


} catch (error) {
    console.log(error);
    alert('Error al eliminar el usuario');
    
   }

}



//funcion para renderizar la tabla en el elemento HTML
export const renderTable: RenderTable = (element: HTMLElement) => {
    const users = useStore.getUser();

    //si la tabla no existe, se crea
    if (!table) {
        table = createTable();
        element.append(table);
        //listener para seleccionar usuario
        table.addEventListener('click',(event) => tableSelectUser(event));
        //listener para eliminar usuario 
        table.addEventListener('click',tableDeleteUser);//pasamos la funcion si solo es un argumento
    }
    let tablehtml = '';

    users.forEach(user => {
        tablehtml += `
    <tr>
        <td>${user.id}</td>
        <td>${user.balance}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.isActive}</td>
        <td>
        <button class="btn-select" data-id="${user.id}">Select</button>
        <button class="btn-delete" data-id="${user.id}">Delete</button>
        </td>
    </tr>
    `

    });

    //table.querySelector('tbody')!.innerHTML = tablehtml;
    const tBoddy = table.querySelector('tbody');
    //si el tbody existe, se asigna el html
    if (tBoddy) {
        tBoddy.innerHTML = tablehtml
    }
    //tBoddy?.innerHTML = tablehtml;


}
