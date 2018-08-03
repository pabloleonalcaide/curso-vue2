<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Bienvenido a la aplicación</h2>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/restaurants">Restaurantes</router-link></li>
      <li><router-link :to="{name:'destacado',params:{id: 16}}">Destacado</router-link></li>
      <li><router-link to="/contact">Contacto</router-link></li>
    </ul>
    <!-- This view will change with the route -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'RestauranteApp'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
