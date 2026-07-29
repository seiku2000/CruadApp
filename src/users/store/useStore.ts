import type { State } from "./interface/UseStore";

const state:State  = {
    currentPage:0,
    users: [],

}

const loadNextPage = async () => {
    throw new Error('Not implemented');

}

//Todo:Implementar
const loadPreviusPage = async () => {
        throw new Error('Not implemented');
}

const onUserChanged = async () => {
    throw new Error('Not implemented');
}


const reloadPage = async () => {
    throw new Error('Not implemented');
}


export default {
    loadNextPage,
    loadPreviusPage,
    onUserChanged,
    reloadPage,
    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}

/**
 * los objetos siempre pasan por referencia osea que si retornamos el array directamente 
 * cualquier cambio que se haga en el array afectara al state original
 *  getUser: () => [...state.users],
 * //En cambio cuando pasa por valor no afecta al state original 
    getCurrentPage: () => state.currentPage,
 */