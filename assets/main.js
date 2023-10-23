// Container de productos
const listaPokemon = document.querySelector("#containerPokemon");
// Botones tipos para filtro
const btntipos = document.querySelectorAll(".btn-item");
// Input buscador Pokemon
const input = document.querySelector("#pokemon-input");
// let pokeApi = "https://pokeapi.co/api/v2/pokemon/";

//Funcion para crear HTML
const createPokemonTemplate = (pokemon) => {
  // Funcion para agregar 00 al numero de id
  let pokeId = pokemon.numero.toString();
  if (pokeId.length === 1) {
    pokeId = "00" + pokeId;
  } else if (pokeId.length === 2) {
    pokeId = "0" + pokeId;
  }

  // let tipos = pokemon.tipo.map(
  //   (tipo) => `<p class="${pokemon.tipo} tipo">${pokemon.tipo}</p>`
  // );
  // tipos = tipos.join("");

  const { numero, nombre, tipo, peso, altura, imagen } = pokemon;
  console.log(pokemon.numero);

  return `  <div class="card_pokemon"> 
  <p class="id_back">#${pokeId} </p>
  <div class="img_poke">
    <img
      src="${imagen} "
      alt="${nombre} "
    />
  </div>
  <div class="info_poke">
    <div class="name_container">
      <p class="pokemon-id">#${numero} </p>
      <h2 class="pokemon-name">${nombre} </h2>
    </div>
    <div class="tipos_poke">
      <p class="${tipo} tipo">${tipo} </p>
           
    </div>
    <div class="stats-poke">
      
    </div>
    <p class="btn btn-add">Atrapar</p>
  </div>
  </div>`;
};

//Funcion para renderizar
const renderProducts = (pokelist) => {
  listaPokemon.innerHTML += pokelist.map(createPokemonTemplate).join("");
};

// Funcion init
const init = () => {
  renderProducts(PokeArray);
};

init();
