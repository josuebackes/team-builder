import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape'

function App() {

  const times = [
    {
      nome: 'Inseto',
      corPrimaria: '#65C728',
      corSecundaria: '#5D943B'
    },
    {
      nome: 'Sombrio',
      corPrimaria: '#000000',
      corSecundaria: '#525251'
    },
    {
      nome: 'Dragão',
      corPrimaria: '#F5D100',
      corSecundaria: '#F5D539'
    },
    {
      nome: 'Elétrico',
      corPrimaria: '#F5E300',
      corSecundaria: '#F5EE69'
    },
    {
      nome: 'Fada',
      corPrimaria: '#F500C2',
      corSecundaria: '#F557D2'
    },
    {
      nome: 'Lutador',
      corPrimaria: '#FA2701',
      corSecundaria: '#C73828'
    },
    {
      nome: 'Fogo',
      corPrimaria: '#F53B00',
      corSecundaria: '#F57646'
    },
    {
      nome: 'Voador',
      corPrimaria: '#7B24FF',
      corSecundaria: '#8E6EFF'
    },
    {
      nome: 'Fantasma',
      corPrimaria: '#362A61',
      corSecundaria: '#4C3B8A'
    },
    {
      nome: 'Grama',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9 '
    },
    {
      nome: 'Terra',
      corPrimaria: '#AD641F',
      corSecundaria: '#D67B27'
    },
    {
      nome: 'Gelo',
      corPrimaria: '#2DDBFA',
      corSecundaria: '#99E4FA'
    },
    {
      nome: 'Normal',
      corPrimaria: '#8A805A',
      corSecundaria: '#FFEEA7'
    },
    {
      nome: 'Veneno',
      corPrimaria: '#770085',
      corSecundaria: '#E371FA'
    },
    {
      nome: 'Psíquico',
      corPrimaria: '#FA00F9',
      corSecundaria: '#FA8BEA'
    },
    {
      nome: 'Rocha',
      corPrimaria: '#8A7232',
      corSecundaria: '#DBB64F'
    },
    {
      nome: 'Metal',
      corPrimaria: '#7A7A79',
      corSecundaria: '#A3A3A2'
    },
    {
      nome: 'Água',
      corPrimaria: '#0083F5',
      corSecundaria: '#679FF5'
    }
  ]

  const [pokemons, setPokemons] = useState([])

  const aoNovoPokemonAdicionado = (pokemon) => {
    setPokemons([...pokemons, pokemon])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoPokemonCadastrado={pokemon => aoNovoPokemonAdicionado(pokemon)} />
      
      {times.map(time => <Time 
      key={time.nome}
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      pokemons={pokemons.filter(pokemon => pokemon.time === time.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
