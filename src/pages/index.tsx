import { useEffect, useState } from 'react';

import { usePokeAPI } from '../context/usePokeAPI';
import { IResponseObj } from '../types/Context';
import { IPokemon } from '../types/Pokemon';
import { IResultItem } from '../types/Result';

export default function Home() {
  const usePoke = usePokeAPI();

  const [allPokemons, setAllPokemons] = useState<IPokemon[]>([]);
  const [response, setResponse] = useState<IResponseObj>({
    count: 0,
    next: '',
    previous: '',
    results: []
  });
  
  async function fetchAllPokemons() {
    const paramUrl = response.next === '' ? 'pokemon' : response.next.substring(26); 

    const data = await usePoke.getPokemons(paramUrl);
    setResponse(prev => ({ ...prev, ...data }));
  }

  async function handleResults() {
    const promises = response.results.map(async (pokemon: any) => {
      return await usePoke.getPokemon(pokemon.url);
    });

    const resolvedPromises = await Promise.all(promises);
    const newPokemons = resolvedPromises.filter((pokemon) => {
      const findPokemon = allPokemons.find(item => item.name === pokemon.id);
      if(!findPokemon){
        return pokemon
      }
    });

    setAllPokemons(prev => ([ ...prev, ...newPokemons]));
  }

  const renderPokemons = () => {
    return allPokemons.map((pokemon: IResultItem, i) => {
      return (
        <p key={i}>{pokemon.name}</p>
      )
    })
  }

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  useEffect(() => {
    handleResults();
  }, [response]);

 
  return (
      <div>
        {renderPokemons()}
        <button onClick={fetchAllPokemons}>
          ver mais
        </button>
      </div>
  )
}
