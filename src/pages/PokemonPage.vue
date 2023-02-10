<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  
  <div v-else>
    <h1>¿Quién es este pokémon?</h1>
    
    <PokemonPicture 
    :pokemonId="pokemon.id"
    :mostrarPokemon="showPokemon"
    />
    
    <PokemonOptions 
    :pokemons="pokemonArr" 
    @selectPokemon="checkAnswer"  />
    
    <template v-if="showAnswer">
      <h2 class="fade-in" :style="changeColor">{{ message }}</h2>
    </template>
    <button @click="newGame">Nuevo juego</button>
  </div>
  
  
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: { PokemonPicture, PokemonOptions },
  
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      
      const randomInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[randomInt] 
      
    },
    checkAnswer(selectedId) {
      this.showAnswer = true
      this.showPokemon = true
      
      if (selectedId === this.pokemon.id) {
        this.message = `'Correcto, ${this.pokemon.name}'`
      } else {
        this.changeColor
        this.message = `'Incorrecto la opción correcta era: ${this.pokemon.name}'`
      }
    },
    newGame() {
      this.pokemonArr = []
      this.pokemon = null,
      this.showPokemon = false,
      this.showAnswer = false,
      this.message = ''
      this.mixPokemonArray()
    }
    
  },
  mounted() {
    this.mixPokemonArray()
  },
}
</script>

<style>


</style>