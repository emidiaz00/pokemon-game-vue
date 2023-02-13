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
    @selectPokemon="checkAnswer"
    />
    
    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <h2 style="font-weight: bold; color:red">{{ attemptsMessage }}</h2>
    </template>
    <button class="btn btn-primary" @click="newGame">Nuevo juego</button>
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
      attemps: 3,
      attemptsMessage: '',
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
      if (selectedId === this.pokemon.id && this.attemps > 0) {
        this.message = `'Correcto, ${this.pokemon.name}'`
      } else {
        this.message = `Incorrecto la opción correcta era: ${this.pokemon.name}`
        this.attemps--
        if (this.attemps === 1) {
          this.attemptsMessage = "Te queda 1 vida"
        } if (this.attemps === 0) {
          this.attemptsMessage = "Perdiste"
        }
      }
    },
    newGame() {
      this.pokemonArr = []
      this.pokemon = null,
      this.showPokemon = false,
      this.showAnswer = false,
      this.message = ''
      this.attemps = 3,
      this.attemptsMessage = ''
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