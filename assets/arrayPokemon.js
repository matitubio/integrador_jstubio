const PokeArray = [
  {
    numero: 1,
    nombre: "Bulbasaur",
    tipo: ["grass", "poison"],
    peso: 69,
    altura: 7,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    numero: 2,
    nombre: "Ivysaur",
    tipo: "grass, poison",
    peso: 130,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    numero: 3,
    nombre: "Venusaur",
    tipo: "grass, poison",
    peso: 1000,
    altura: 20,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
  },
  {
    numero: 4,
    nombre: "Charmander",
    tipo: "fire",
    peso: 85,
    altura: 6,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    numero: 5,
    nombre: "Charmeleon",
    tipo: "fire",
    peso: 190,
    altura: 11,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
  },
  {
    numero: 6,
    nombre: "Charizard",
    tipo: "fire, flying",
    peso: 905,
    altura: 17,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  },
  {
    numero: 7,
    nombre: "Squirtle",
    tipo: "water",
    peso: 90,
    altura: 5,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    numero: 8,
    nombre: "Wartortle",
    tipo: "water",
    peso: 225,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
  },
  {
    numero: 9,
    nombre: "Blastoise",
    tipo: "water",
    peso: 855,
    altura: 16,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
  },
  {
    numero: 10,
    nombre: "Caterpie",
    tipo: "bug",
    peso: 29,
    altura: 3,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
  },
  {
    numero: 11,
    nombre: "Metapod",
    tipo: "bug",
    peso: 99,
    altura: 7,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
  },
  {
    numero: 12,
    nombre: "Butterfree",
    tipo: "bug, flying",
    peso: 320,
    altura: 11,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
  },
  {
    numero: 13,
    nombre: "Weedle",
    tipo: "bug, poison",
    peso: 32,
    altura: 3,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
  },
  {
    numero: 14,
    nombre: "Kakuna",
    tipo: "bug, poison",
    peso: 100,
    altura: 6,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
  },
  {
    numero: 15,
    nombre: "Beedrill",
    tipo: "bug, poison",
    peso: 295,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
  },
  {
    numero: 16,
    nombre: "Pidgey",
    tipo: "normal, flying",
    peso: 18,
    altura: 3,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
  },
  {
    numero: 17,
    nombre: "Pidgeotto",
    tipo: "normal, flying",
    peso: 300,
    altura: 11,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
  },
  {
    numero: 18,
    nombre: "Pidgeot",
    tipo: "normal, flying",
    peso: 395,
    altura: 15,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
  },
  {
    numero: 19,
    nombre: "Rattata",
    tipo: "normal",
    peso: 35,
    altura: 3,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
  },
  {
    numero: 20,
    nombre: "Raticate",
    tipo: "normal",
    peso: 185,
    altura: 7,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
  },
  {
    numero: 21,
    nombre: "Spearow",
    tipo: "normal, flying",
    peso: 20,
    altura: 3,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
  },
  {
    numero: 22,
    nombre: "Fearow",
    tipo: "normal, flying",
    peso: 380,
    altura: 12,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
  },
  {
    numero: 23,
    nombre: "Ekans",
    tipo: "poison",
    peso: 69,
    altura: 20,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
  },
  {
    numero: 24,
    nombre: "Arbok",
    tipo: "poison",
    peso: 650,
    altura: 35,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
  },

  {
    numero: 25,
    nombre: "Pikachu",
    tipo: "electric",
    peso: 60,
    altura: 4,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    numero: 26,
    nombre: "Raichu",
    tipo: "electric",
    peso: 300,
    altura: 8,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
  },
  {
    numero: 27,
    nombre: "Sandshrew",
    tipo: "ground",
    peso: 120,
    altura: 6,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
  },
  {
    numero: 28,
    nombre: "Sandslash",
    tipo: "ground",
    peso: 295,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
  },
  {
    numero: 29,
    nombre: "Nidoran♀",
    tipo: "poison",
    peso: 70,
    altura: 4,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
  },
  {
    numero: 30,
    nombre: "Nidorina",
    tipo: "poison",
    peso: 200,
    altura: 8,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
  },
  {
    numero: 31,
    nombre: "Nidoqueen",
    tipo: "poison, ground",
    peso: 600,
    altura: 13,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
  },
  {
    numero: 32,
    nombre: "Nidoran♂",
    tipo: "poison",
    peso: 90,
    altura: 5,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
  },
  {
    numero: 33,
    nombre: "Nidorino",
    tipo: "poison",
    peso: 195,
    altura: 9,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
  },
  {
    numero: 34,
    nombre: "Nidoking",
    tipo: "poison, ground",
    peso: 620,
    altura: 14,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
  },
  {
    numero: 35,
    nombre: "Clefairy",
    tipo: "fairy",
    peso: 75,
    altura: 6,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
  },
  {
    numero: 36,
    nombre: "Clefable",
    tipo: "fairy",
    peso: 400,
    altura: 13,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
  },
  {
    numero: 37,
    nombre: "Vulpix",
    tipo: "fire",
    peso: 99,
    altura: 6,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
  },
  {
    numero: 38,
    nombre: "Ninetales",
    tipo: "fire",
    peso: 199,
    altura: 11,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
  },
  {
    numero: 39,
    nombre: "Jigglypuff",
    tipo: "normal, fairy",
    peso: 55,
    altura: 5,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  },
  {
    numero: 40,
    nombre: "Wigglytuff",
    tipo: "normal, fairy",
    peso: 120,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  },

  {
    numero: 41,
    nombre: "Zubat",
    tipo: "poison, flying",
    peso: 75,
    altura: 8,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
  },
  {
    numero: 42,
    nombre: "Golbat",
    tipo: "poison, flying",
    peso: 550,
    altura: 16,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
  },
  {
    numero: 43,
    nombre: "Oddish",
    tipo: "grass, poison",
    peso: 54,
    altura: 5,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
  },
  {
    numero: 44,
    nombre: "Gloom",
    tipo: "grass, poison",
    peso: 86,
    altura: 8,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
  },
  {
    numero: 45,
    nombre: "Vileplume",
    tipo: "grass, poison",
    peso: 186,
    altura: 12,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
  },
  {
    numero: 46,
    nombre: "Paras",
    tipo: "bug, grass",
    peso: 54,
    altura: 3,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
  },
  {
    numero: 47,
    nombre: "Parasect",
    tipo: "bug, grass",
    peso: 295,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
  },
  {
    numero: 48,
    nombre: "Venonat",
    tipo: "bug, poison",
    peso: 300,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
  },
  {
    numero: 49,
    nombre: "Venomoth",
    tipo: "bug, poison",
    peso: 125,
    altura: 15,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
  },
  {
    numero: 50,
    nombre: "Diglett",
    tipo: "ground",
    peso: 8,
    altura: 2,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
  },
  {
    numero: 51,
    nombre: "Dugtrio",
    tipo: "ground",
    peso: 333,
    altura: 7,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
  },
  {
    numero: 52,
    nombre: "Meowth",
    tipo: "normal",
    peso: 42,
    altura: 4,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
  },
  {
    numero: 53,
    nombre: "Persian",
    tipo: "normal",
    peso: 320,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
  },
  {
    numero: 54,
    nombre: "Psyduck",
    tipo: "water",
    peso: 196,
    altura: 8,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
  },
  {
    numero: 55,
    nombre: "Golduck",
    tipo: "water",
    peso: 766,
    altura: 17,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
  },
  {
    numero: 56,
    nombre: "Mankey",
    tipo: "fighting",
    peso: 280,
    altura: 5,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
  },
  {
    numero: 57,
    nombre: "Primeape",
    tipo: "fighting",
    peso: 320,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
  },
  {
    numero: 58,
    nombre: "Growlithe",
    tipo: "fire",
    peso: 190,
    altura: 7,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
  },
  {
    numero: 59,
    nombre: "Arcanine",
    tipo: "fire",
    peso: 1550,
    altura: 19,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
  },
  {
    numero: 60,
    nombre: "Poliwag",
    tipo: "water",
    peso: 124,
    altura: 6,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
  },
  {
    numero: 61,
    nombre: "Poliwhirl",
    tipo: "water",
    peso: 200,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
  },
  {
    numero: 62,
    nombre: "Poliwrath",
    tipo: "water, fighting",
    peso: 540,
    altura: 13,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
  },
  {
    numero: 63,
    nombre: "Abra",
    tipo: "psychic",
    peso: 195,
    altura: 9,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
  },
  {
    numero: 64,
    nombre: "Kadabra",
    tipo: "psychic",
    peso: 565,
    altura: 13,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
  },
  {
    numero: 65,
    nombre: "Alakazam",
    tipo: "psychic",
    peso: 480,
    altura: 15,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
  },
  {
    numero: 66,
    nombre: "Machop",
    tipo: "fighting",
    peso: 195,
    altura: 8,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
  },
  {
    numero: 67,
    nombre: "Machoke",
    tipo: "fighting",
    peso: 705,
    altura: 15,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
  },
  {
    numero: 68,
    nombre: "Machamp",
    tipo: "fighting",
    peso: 1300,
    altura: 16,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
  },
  {
    numero: 69,
    nombre: "Bellsprout",
    tipo: "grass, poison",
    peso: 40,
    altura: 7,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
  },
  {
    numero: 70,
    nombre: "Weepinbell",
    tipo: "grass, poison",
    peso: 64,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
  },
  {
    numero: 71,
    nombre: "Victreebel",
    tipo: "grass, poison",
    peso: 155,
    altura: 17,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
  },
  {
    numero: 72,
    nombre: "Tentacool",
    tipo: "water, poison",
    peso: 455,
    altura: 9,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
  },
  {
    numero: 73,
    nombre: "Tentacruel",
    tipo: "water, poison",
    peso: 550,
    altura: 16,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
  },
  {
    numero: 74,
    nombre: "Geodude",
    tipo: "rock, ground",
    peso: 200,
    altura: 4,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
  },
  {
    numero: 75,
    nombre: "Graveler",
    tipo: "rock, ground",
    peso: 1050,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
  },
  {
    numero: 76,
    nombre: "Golem",
    tipo: "rock, ground",
    peso: 3000,
    altura: 14,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
  },
  {
    numero: 77,
    nombre: "Ponyta",
    tipo: "fire",
    peso: 300,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
  },
  {
    numero: 78,
    nombre: "Rapidash",
    tipo: "fire",
    peso: 950,
    altura: 17,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
  },
  {
    numero: 79,
    nombre: "Slowpoke",
    tipo: "water, psychic",
    peso: 360,
    altura: 12,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
  },
  {
    numero: 80,
    nombre: "Slowbro",
    tipo: "water, psychic",
    peso: 785,
    altura: 16,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
  },

  {
    numero: 81,
    nombre: "Magnemite",
    tipo: "electric, steel",
    peso: 60,
    altura: 3,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
  },
  {
    numero: 82,
    nombre: "Magneton",
    tipo: "electric, steel",
    peso: 600,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
  },
  {
    numero: 83,
    nombre: "Farfetch'd",
    tipo: "normal, flying",
    peso: 150,
    altura: 8,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
  },
  {
    numero: 84,
    nombre: "Doduo",
    tipo: "normal, flying",
    peso: 392,
    altura: 14,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
  },
  {
    numero: 85,
    nombre: "Dodrio",
    tipo: "normal, flying",
    peso: 852,
    altura: 18,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
  },
  {
    numero: 86,
    nombre: "Seel",
    tipo: "water",
    peso: 900,
    altura: 11,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
  },
  {
    numero: 87,
    nombre: "Dewgong",
    tipo: "water, ice",
    peso: 1200,
    altura: 17,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
  },
  {
    numero: 88,
    nombre: "Grimer",
    tipo: "poison",
    peso: 300,
    altura: 9,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
  },
  {
    numero: 89,
    nombre: "Muk",
    tipo: "poison",
    peso: 300,
    altura: 12,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
  },
  {
    numero: 90,
    nombre: "Shellder",
    tipo: "water",
    peso: 40,
    altura: 3,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
  },
  {
    numero: 91,
    nombre: "Cloyster",
    tipo: "water, ice",
    peso: 1325,
    altura: 15,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
  },
  {
    numero: 92,
    nombre: "Gastly",
    tipo: "ghost, poison",
    peso: 1,
    altura: 13,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
  },
  {
    numero: 93,
    nombre: "Haunter",
    tipo: "ghost, poison",
    peso: 1,
    altura: 16,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
  },
  {
    numero: 94,
    nombre: "Gengar",
    tipo: "ghost, poison",
    peso: 405,
    altura: 15,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
  },
  {
    numero: 95,
    nombre: "Onix",
    tipo: "rock, ground",
    peso: 2100,
    altura: 88,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
  },
  {
    numero: 96,
    nombre: "Drowzee",
    tipo: "psychic",
    peso: 324,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
  },
  {
    numero: 97,
    nombre: "Hypno",
    tipo: "psychic",
    peso: 756,
    altura: 16,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
  },
  {
    numero: 98,
    nombre: "Krabby",
    tipo: "water",
    peso: 65,
    altura: 4,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
  },
  {
    numero: 99,
    nombre: "Kingler",
    tipo: "water",
    peso: 600,
    altura: 13,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
  },
  {
    numero: 100,
    nombre: "Voltorb",
    tipo: "electric",
    peso: 104,
    altura: 5,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
  },
  {
    numero: 101,
    nombre: "Electrode",
    tipo: "electric",
    peso: 666,
    altura: 12,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
  },
  {
    numero: 102,
    nombre: "Exeggcute",
    tipo: "grass, psychic",
    peso: 25,
    altura: 4,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
  },
  {
    numero: 103,
    nombre: "Exeggutor",
    tipo: "grass, psychic",
    peso: 1200,
    altura: 20,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
  },
  {
    numero: 104,
    nombre: "Cubone",
    tipo: "ground",
    peso: 65,
    altura: 4,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
  },
  {
    numero: 105,
    nombre: "Marowak",
    tipo: "ground",
    peso: 450,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
  },
  {
    numero: 106,
    nombre: "Hitmonlee",
    tipo: "fighting",
    peso: 498,
    altura: 15,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
  },
  {
    numero: 107,
    nombre: "Hitmonchan",
    tipo: "fighting",
    peso: 502,
    altura: 14,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
  },
  {
    numero: 108,
    nombre: "Lickitung",
    tipo: "normal",
    peso: 655,
    altura: 12,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
  },
  {
    numero: 109,
    nombre: "Koffing",
    tipo: "poison",
    peso: 10,
    altura: 6,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
  },
  {
    numero: 110,
    nombre: "Weezing",
    tipo: "poison",
    peso: 95,
    altura: 12,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
  },
  {
    numero: 111,
    nombre: "Rhyhorn",
    tipo: "ground, rock",
    peso: 1150,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
  },
  {
    numero: 112,
    nombre: "Rhydon",
    tipo: "ground, rock",
    peso: 1200,
    altura: 19,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
  },
  {
    numero: 113,
    nombre: "Chansey",
    tipo: "normal",
    peso: 346,
    altura: 11,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
  },
  {
    numero: 114,
    nombre: "Tangela",
    tipo: "grass",
    peso: 350,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
  },
  {
    numero: 115,
    nombre: "Kangaskhan",
    tipo: "normal",
    peso: 800,
    altura: 22,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
  },
  {
    numero: 116,
    nombre: "Horsea",
    tipo: "water",
    peso: 80,
    altura: 4,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
  },
  {
    numero: 117,
    nombre: "Seadra",
    tipo: "water",
    peso: 250,
    altura: 12,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
  },
  {
    numero: 118,
    nombre: "Goldeen",
    tipo: "water",
    peso: 150,
    altura: 6,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
  },
  {
    numero: 119,
    nombre: "Seaking",
    tipo: "water",
    peso: 390,
    altura: 13,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
  },
  {
    numero: 120,
    nombre: "Staryu",
    tipo: "water",
    peso: 345,
    altura: 8,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
  },
  {
    numero: 121,
    nombre: "Starmie",
    tipo: "water, psychic",
    peso: 800,
    altura: 11,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
  },
  {
    numero: 122,
    nombre: "Mr. Mime",
    tipo: "psychic, fairy",
    peso: 545,
    altura: 13,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
  },
  {
    numero: 123,
    nombre: "Scyther",
    tipo: "bug, flying",
    peso: 560,
    altura: 15,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
  },
  {
    numero: 124,
    nombre: "Jynx",
    tipo: "ice, psychic",
    peso: 406,
    altura: 14,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
  },
  {
    numero: 125,
    nombre: "Electabuzz",
    tipo: "electric",
    peso: 300,
    altura: 11,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
  },
  {
    numero: 126,
    nombre: "Magmar",
    tipo: "fire",
    peso: 445,
    altura: 13,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
  },
  {
    numero: 127,
    nombre: "Pinsir",
    tipo: "bug",
    peso: 550,
    altura: 15,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
  },
  {
    numero: 128,
    nombre: "Tauros",
    tipo: "normal",
    peso: 884,
    altura: 14,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
  },
  {
    numero: 129,
    nombre: "Magikarp",
    tipo: "water",
    peso: 100,
    altura: 9,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
  },
  {
    numero: 130,
    nombre: "Gyarados",
    tipo: "water, flying",
    peso: 2350,
    altura: 65,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
  },
  {
    numero: 131,
    nombre: "Lapras",
    tipo: "water, ice",
    peso: 2200,
    altura: 25,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
  },
  {
    numero: 132,
    nombre: "Ditto",
    tipo: "normal",
    peso: 40,
    altura: 3,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
  },
  {
    numero: 133,
    nombre: "Eevee",
    tipo: "normal",
    peso: 65,
    altura: 3,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
  },
  {
    numero: 134,
    nombre: "Vaporeon",
    tipo: "water",
    peso: 290,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
  },
  {
    numero: 135,
    nombre: "Jolteon",
    tipo: "electric",
    peso: 245,
    altura: 8,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
  },
  {
    numero: 136,
    nombre: "Flareon",
    tipo: "fire",
    peso: 250,
    altura: 9,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
  },
  {
    numero: 137,
    nombre: "Porygon",
    tipo: "normal",
    peso: 365,
    altura: 8,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
  },
  {
    numero: 138,
    nombre: "Omanyte",
    tipo: "rock, water",
    peso: 75,
    altura: 4,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
  },
  {
    numero: 139,
    nombre: "Omastar",
    tipo: "rock, water",
    peso: 350,
    altura: 10,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
  },
  {
    numero: 140,
    nombre: "Kabuto",
    tipo: "rock, water",
    peso: 115,
    altura: 5,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
  },
  {
    numero: 141,
    nombre: "Kabutops",
    tipo: "rock, water",
    peso: 405,
    altura: 13,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
  },
  {
    numero: 142,
    nombre: "Aerodactyl",
    tipo: "rock, flying",
    peso: 590,
    altura: 18,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
  },
  {
    numero: 143,
    nombre: "Snorlax",
    tipo: "normal",
    peso: 4600,
    altura: 21,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
  },
  {
    numero: 144,
    nombre: "Articuno",
    tipo: "ice, flying",
    peso: 554,
    altura: 17,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
  },
  {
    numero: 145,
    nombre: "Zapdos",
    tipo: "electric, flying",
    peso: 526,
    altura: 16,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
  },
  {
    numero: 146,
    nombre: "Moltres",
    tipo: "fire, flying",
    peso: 600,
    altura: 20,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
  },
  {
    numero: 147,
    nombre: "Dratini",
    tipo: "dragon",
    peso: 33,
    altura: 18,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
  },
  {
    numero: 148,
    nombre: "Dragonair",
    tipo: "dragon",
    peso: 165,
    altura: 40,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
  },
  {
    numero: 149,
    nombre: "Dragonite",
    tipo: "dragon, flying",
    peso: 2100,
    altura: 22,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
  },
  {
    numero: 150,
    nombre: "Mewtwo",
    tipo: "psychic",
    peso: 1220,
    altura: 20,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
  },
  {
    numero: 151,
    nombre: "Mew",
    tipo: "psychic",
    peso: 40,
    altura: 4,
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
  },
];
