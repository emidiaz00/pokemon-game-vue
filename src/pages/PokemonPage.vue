<template>
  <h1>Quien es este pokémon?</h1>
  
  <PokemonPicture :pokemonId="5" :showPokemon="true" />
  <PokemonOptions :pokemons="pokemonArr" />
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions'



export default {
  components: { PokemonPicture, PokemonOptions },
  
  data() {
    return {
      pokemonArr: []
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      
    }
  },
  mounted() {
    this.mixPokemonArray()
  },
}
</script>

<style>

</style>