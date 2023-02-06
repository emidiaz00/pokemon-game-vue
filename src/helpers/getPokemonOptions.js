

const getPokemons = () => {
    const pokemonsArray = Array.from(Array(650))
    return pokemonsArray.map( ( _ , index) => index + 1 )

    
}

const getPokemonOptions = () => {
    const pokemonsMixed = getPokemons().sort(() => Math.random() - 0.5)
    getPokemonNames(pokemonsMixed.splice(0,4))
           
}

const getPokemonNames = ([a,b,c,d]) => {
    console.log(a,b,c,d);
}

export default getPokemonOptions

