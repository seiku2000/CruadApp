import type { loadUserBypageInter } from "./interface/loadUserBypageInterface";

export const loadUsersBypage:loadUserBypageInter = async(page:number = 1) => {
    const url = `${import.meta.env.VITE_API_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    
}