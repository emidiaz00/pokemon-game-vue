<template>
  <div class="pokemon-container">
    <img 
    class="hiden-pokemon"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
    alt="pokemon" >
   
    <img 
    class="fade-in" 
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
    alt="pokemon" >
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>

/* Pokemon Picture */
.pokemon-container {
  height: 200px;
}

img {
  height: 200px;
  position: absolute;
  right: 45%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}

/* Pokemon Options */
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}


@media screen and (max-width: 500px) {
  img {
    right: 25%;
  }
}

</style>