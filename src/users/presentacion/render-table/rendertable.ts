//import { User } from "../models/user";
import useStore from "../../store/useStore";
import type { RenderTable } from "../interface/RenderTable";
import { showModal } from "../modal/renderModal";
import "../style/table.css";

let table: HTMLTableElement | null;
/**
 *   <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
 * 
 * 
 */



const createTable = () => {
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


const tableSelectUser = (event: Event) => {
   // console.log(event.target);
   const element = event.target as HTMLElement;
   const selectUser = element.closest('.btn-select');
   if(!selectUser) return;
   const id:string | null = selectUser.getAttribute('data-id');
   //console.log(id);
   showModal(id);
  // console.log(selectUser);
   //console.log(element.closest());
}


export const renderTable: RenderTable = (element: HTMLElement) => {
    const users = useStore.getUser();
    if (!table) {
        table = createTable();
        element.append(table);
        //listener
        table.addEventListener('click',(event) => tableSelectUser(event));
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
    if (tBoddy) {
        tBoddy.innerHTML = tablehtml
    }
    //tBoddy?.innerHTML = tablehtml;


}
/**
 *  <a href="#/" data-id="${user.id}">Select</a>
            <a href="#/" data-id="${user.id}">Delete</a>
 */