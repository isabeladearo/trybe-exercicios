import React from "react";
import data from "./data";
import PokemonCard from "./PokemonCard";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Pokedex</h1>
        <div className="layout-page">
          {data.map((item) => (
            <PokemonCard key={item.id} itemInfo={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
