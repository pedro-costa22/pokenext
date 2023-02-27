export interface IResponseObj {
    count: number;
    next: string;
    previous: string | null;
    results: [];
}

export interface IContext {
    getPokemons: (param: string) => {};
    getPokemon: (url: string) => any;

}

export interface IPokeProvider {
    children: JSX.Element;
}