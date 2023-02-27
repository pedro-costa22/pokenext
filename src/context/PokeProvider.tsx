import { createContext } from "react";
import { fetchAll, fetchPokemon } from '../services/api';

//Types
import { IContext, IPokeProvider, IResponseObj } from "../types/Context";


export const PokeContext = createContext<IContext>({} as IContext);

export function PokeProvider({children}: IPokeProvider) {

    async function getPokemons(param: string){
        const { 
            count, 
            next, 
            previous,
            results 
        }: IResponseObj = await fetchAll(param);

        return {
            count, 
            next, 
            previous, 
            results
        };
    };

    async function getPokemon(url: string){
        const data = await fetchPokemon(url);
        return {...data};
    };


    return (
        <PokeContext.Provider value={{getPokemons, getPokemon}}>
            {children}
        </PokeContext.Provider>
    )
}