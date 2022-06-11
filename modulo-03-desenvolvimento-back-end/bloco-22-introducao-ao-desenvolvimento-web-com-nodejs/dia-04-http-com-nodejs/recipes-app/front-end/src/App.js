import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((response) => response.json())
      .then((recipes) => setRecipes(recipes));
  }, [setRecipes]);

  return (
    <div>
      {recipes && (
        <div className='card-group'>
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <h1>{recipe.name}</h1>
              <p>Preço: {recipe.price}</p>
              <p>Tempo de preparo: {recipe.waitTime}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
