// List of Pokémon (For demonstration purposes, we will use a few Pokémon)
const pokemonList = [
    {
      name: "Pikachu",
      type: "Electric",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      moves: ["Thunder Shock", "Quick Attack"],
      ability: "Static"
    },
    {
      name: "Charmander",
      type: "Fire",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      moves: ["Scratch", "Ember"],
      ability: "Blaze"
    },
    {
      name: "Bulbasaur",
      type: "Grass/Poison",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      moves: ["Tackle", "Vine Whip"],
      ability: "Overgrow"
    }
  ];
  
  // Function to display Pokémon cards
  function displayPokemon() {
    const pokemonContainer = document.getElementById("pokemon-container");
    pokemonList.forEach(pokemon => {
      // Create a Pokémon card
      const pokemonCard = document.createElement("div");
      pokemonCard.classList.add("pokemon-card");
  
      // Add Pokémon image
      const img = document.createElement("img");
      img.src = pokemon.image;
      pokemonCard.appendChild(img);
  
      // Add Pokémon name
      const name = document.createElement("h3");
      name.textContent = pokemon.name;
      pokemonCard.appendChild(name);
  
      // Add Pokémon type
      const type = document.createElement("p");
      type.textContent = `Type: ${pokemon.type}`;
      pokemonCard.appendChild(type);
  
      // Add Pokémon ability
      const ability = document.createElement("p");
      ability.textContent = `Ability: ${pokemon.ability}`;
      pokemonCard.appendChild(ability);
  
      // Add Pokémon moves
      const moves = document.createElement("p");
      moves.textContent = `Moves: ${pokemon.moves.join(", ")}`;
      pokemonCard.appendChild(moves);
  
      // Append the card to the container
      pokemonContainer.appendChild(pokemonCard);
    });
  }
  
  // Load Pokémon data on window load
  window.onload = displayPokemon;
  