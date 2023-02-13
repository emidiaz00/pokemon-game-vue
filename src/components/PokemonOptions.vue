<template>
  <div class="options-container">
    <ul>
      <li 
      v-for="pokemon in pokemons" 
      :key="pokemon.id"
      @click="$emit( 'selectPokemon', pokemon.id)"
      >{{ pokemon.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scope>
/* Pokemon Options */
ul {
  list-style-type: none;
}
li {
  background-color: #5B8FB9;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
  font-weight: bold;
}

li:hover {
  background-color: rgba(86, 174, 233, 0.918);
}

.options-container {
  display: flex;
  justify-content: center;
  padding: 30px;
  margin: 0 auto;
  align-content: center;
}

</style>