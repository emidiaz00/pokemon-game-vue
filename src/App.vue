<template>
  <PokemonPage />
</template>

<script>
import PokemonPage from './pages/PokemonPage'


export default {
  name: 'App',
  components: {
    PokemonPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 150px;
  margin: 0 auto;
  padding: 50px;
}
</style>
