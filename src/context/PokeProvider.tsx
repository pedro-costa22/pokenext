import { createContext } from "react";
import { fetchAll } from '../services/api';

//Types
import { IContext, IPokeProvider, IResponseObj } from "../types/Context";


export const PokeContext = createContext<IContext>({} as IContext);

export function PokeProvider({children}: IPokeProvider) {

    async function getPokemons(){
        const { 
            count, 
            next, 
            previous,
            results 
        }: IResponseObj = await fetchAll();

        return {
            count, 
            next, 
            previous, 
            results
        };
    };

    async function getPokemon(){
        console.log('função chamada para acessar um pokemon em especifico');
    };


    return (
        <PokeContext.Provider value={{getPokemons, getPokemon}}>
            {children}
        </PokeContext.Provider>
    )
}