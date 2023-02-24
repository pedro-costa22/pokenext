export interface IResponseObj {
    count: number;
    next: string;
    previous: string | null;
    results: [];
}

export interface IContext {
    getPokemons: () => {};
    getPokemon: () => any;

}

export interface IPokeProvider {
    children: JSX.Element;
}