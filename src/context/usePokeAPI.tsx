import { useContext } from "react";
import { PokeContext } from "./PokeProvider";

export function usePokeAPI() {
    const context = useContext(PokeContext);
    return context;
}