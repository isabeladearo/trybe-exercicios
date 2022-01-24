import React from 'react';
import data from './data';
import PokemonCard from "./PokemonCard";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className='title'>Pokedex</h1>
        <div className='layout-page'>
        { data.map((element) => 
          <PokemonCard
            name={element.name}
            type={element.type}
            value={element.averageWeight.value}
            measurementUnit={element.averageWeight.measurementUnit}
            image={element.image}
            alt='Pokemon-Image'
          />
        ) }
        </div>
      </div>
      
    )
  };
};

export default App;
