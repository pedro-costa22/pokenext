export const baseURL = "https://pokeapi.co/api/v2";

export async function fetchAll(param: string){
    try {
        const pokemons = await fetch(`${baseURL}/${param}`)
        const resp = await pokemons.json();

        return resp;
        
    } catch (error) {
        throw error;
    }
}

export async function fetchPokemon(url: string){
    try {
        const pokemon = await fetch(`${url}`)
        const resp = await pokemon.json();
        return resp;
        
    } catch (error) {
        throw error;
    }
}


