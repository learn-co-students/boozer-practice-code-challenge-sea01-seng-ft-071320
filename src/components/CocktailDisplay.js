import React from "react";

const CocktailDisplay = ({ name, description, instructions }) => {
  return (
    <div id="cocktail-display">
      <h1>{name}</h1>
      <h3>{description}</h3>
      <p>{instructions}</p>
    </div>
  );
};

export default CocktailDisplay;
