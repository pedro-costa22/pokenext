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
    const data = await usePoke.getPokemons();
    setResponse(prev => ({ ...prev, ...data }));
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
    setAllPokemons(prev => [...prev, ...response.results]);
  }, [response]);
 

  return (
      <div>
        {renderPokemons()}
      </div>
  )
}
