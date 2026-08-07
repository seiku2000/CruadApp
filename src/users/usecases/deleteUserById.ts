import type { DeleteUserById } from "./interface/DeleteUserById"

export const delelteUser: DeleteUserById = async (id) => {
    const url = `${import.meta.env.VITE_API_URL}/users/${id}`
    const rest = await fetch(url, {
        method: 'DELETE',
      /*  headers: {
            'Content-Type': 'application/json'
        }*/
    });

    const deleteResult = await rest.json();
    console.log(deleteResult);
     return true;
  
}
