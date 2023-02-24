export const baseURL = "https://pokeapi.co/api/v2";

export async function fetchAll(){
    try {
        const pokemons = await fetch(`${baseURL}/pokemon`)
        const resp = await pokemons.json();

        return resp;
        
    } catch (error) {
        throw error;
    }
}


