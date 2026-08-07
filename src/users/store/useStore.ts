import type { IUser } from "../models/interface/User";
import { loadUsersBypage } from "../usecases";
import type {  LoadNextPage, LoadPreviusPage, OnUserChanged, ReloadPage, State } from "./interface/UseStore";
//estado inicial de los valores  
const state:State  = {
    currentPage:0,
    users: [],

}

//funcion para cargar la siguiente pagina
const loadNextPage:LoadNextPage = async () => {

const users =   await loadUsersBypage(state.currentPage + 1);
//si no hay usuarios o la pagina es mayor a la cantidad de paginas, no se puede cargar la siguiente pagina
if(users.length === 0) return;
state.currentPage +=1;
state.users = users;
    //console.log(page);

}

//funcion para cargar la pagina anterior
const loadPreviusPage:LoadPreviusPage = async () => {
    
   //si la pagina es menor o igual a 1, no se puede cargar la pagina anterior
const users = await loadUsersBypage(state.currentPage - 1 );
if( users.length === 0 || state.currentPage <= 1) return;
//if(users.length === 0)  return;
//state.currentPage = state.currentPage ? state.currentPage - 1 : 0;
//state.users = users;
state.currentPage = state.currentPage - 1;
state.users = users;
}
let wasFound:boolean = false
const onUserChanged:OnUserChanged = async (UserUpdated) => {

    //esto regresa un nuevo array con el usuario actualizado si coincide el id, sino retorna el usuario original
    state.users = state.users.map(user => {
        if(user.id === UserUpdated?.id) {
            wasFound = true;
            return UserUpdated;
        }
        return user;
    });

    //si la cantidad de usuarios es menor a 10 
    // y el usuario no fue encontrado, se agrega al final
    if(state.users.length < 10 && !wasFound) {
        state.users.push(UserUpdated!);
    }
}


const reloadPage:ReloadPage = async () => {
   const users =   await loadUsersBypage(state.currentPage);
   //si no hay usuarios o la pagina es mayor a la cantidad de paginas, no se puede cargar la siguiente pagina
   if(users.length === 0) {
    await loadPreviusPage();
    return;
   }
   state.users = users;
}


export default {
    loadNextPage,
    loadPreviusPage,
    onUserChanged,
    reloadPage,
    getUser: ():IUser[] => [...state.users]  , //retorna una copia del array
    getCurrentPage: ():number => state.currentPage, //retorna el valor actual de la pagina
}

/**
 * los objetos siempre pasan por referencia osea que si retornamos el array directamente 
 * cualquier cambio que se haga en el array afectara al state original
 *  getUser: () => [...state.users],
 * //En cambio cuando pasa por valor no afecta al state original 
    getCurrentPage: () => state.currentPage,
 */