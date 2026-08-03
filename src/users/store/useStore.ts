import type { IUser } from "../models/interface/User";
import { loadUsersBypage } from "../usecases";
import type {  LoadNextPage, LoadPreviusPage, OnUserChanged, ReloadPage, State } from "./interface/UseStore";

const state:State  = {
    currentPage:0,
    users: [],

}

const loadNextPage:LoadNextPage = async () => {
    //throw new Error('Not implemented');
const users =   await loadUsersBypage(state.currentPage + 1);
if(users.length === 0) return;
state.currentPage +=1;
state.users = users;
    //console.log(page);

}

//Todo:Implementar
const loadPreviusPage:LoadPreviusPage = async () => {
       // throw new Error('Not implemented');
const users = await loadUsersBypage(state.currentPage - 1 );
if( users.length === 0 || state.currentPage <= 1) return;
//if(users.length === 0)  return;
//state.currentPage = state.currentPage ? state.currentPage - 1 : 0;
//state.users = users;
state.currentPage = state.currentPage - 1;
state.users = users;
}

const onUserChanged:OnUserChanged = async () => {
    throw new Error('Not implemented');
}


const reloadPage:ReloadPage = async () => {
    throw new Error('Not implemented');
}


export default {
    loadNextPage,
    loadPreviusPage,
    onUserChanged,
    reloadPage,
    getUser: ():IUser[] => [...state.users]  ,
    getCurrentPage: ():number => state.currentPage,
}

/**
 * los objetos siempre pasan por referencia osea que si retornamos el array directamente 
 * cualquier cambio que se haga en el array afectara al state original
 *  getUser: () => [...state.users],
 * //En cambio cuando pasa por valor no afecta al state original 
    getCurrentPage: () => state.currentPage,
 */