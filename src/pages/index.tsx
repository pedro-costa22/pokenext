import { useEffect, useState } from 'react';

import { usePokeAPI } from '../context/usePokeAPI';
import { IResponseObj } from '../types/Context';
import { IPokemon } from '../types/Pokemon';
import { IResultItem } from '../types/Result';

//components
import Header from '../components/Header/index';
import GlobalStyle from '../styles/GlobalStyle';
import SectionTop from '../components/SectionTop';
import Main from '../components/MainContent';


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
    const indexUrlParams = response.next.indexOf('pokemon');
    const paramUrl = response.next === '' ? 'pokemon' : response.next.substring(indexUrlParams); 

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
        <GlobalStyle />
        <Header />
        <SectionTop />
        <Main />
        <button onClick={fetchAllPokemons}>
          ver mais
        </button>
      </div>
  )
}
