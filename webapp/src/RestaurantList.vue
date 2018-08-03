<template>
    <div>
      <ul id="restaurants-list" v-if="restaurants != null">
          <li v-for="restaurant in restaurants">
          <strong>{{restaurant.nombre}}</strong>
          <p>
            <router-link :to="{name: 'restaurant', params:{id: restaurant.id}}">Ver</router-link>
            <router-link :to="{name: 'edit-restaurant', params:{id: restaurant.id}}">Editar</router-link>
            <span v-if="showDelete != restaurant.id">
              <a class="pointer" @click="deleteRestaurant(restaurant.id)">Eliminar</a>
            </span>
            <span v-else>
              <p>¿Estás Seguro?</p>
              <button @click="cancelDelete()">Cancelar</button>
              <button @click="confirmDelete(restaurant.id)">Eliminar</button>
            </span>
          </p>
        </li>
      </ul>
      <span v-else>Cargando Restaurantes..</span>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'RestaurantList',
  mounted(){
    this.getRestaurants();
  },
  data () {
    return { 
      msg: 'Restaurantes',
      restaurants: null,
      showDelete: null
    }
  },
  methods:{
    /**
     * Call to the API 
     */
    getRestaurants(){
      axios.get('http://localhost/api-rest/api.php/restaurantes')
      .then((res)=>{
        this.restaurants = res.data.data;
      });
    },
    deleteRestaurant(id){
      this.showDelete = id;
    },
    cancelDelete(){
      this.showDelete = null;
    },
    confirmDelete(id){
      axios.get('http://localhost/api-rest/api.php/delete-restaurante/'+id)
      .then((res)=>{
        this.showBorrar = null;
        this.getRestaurants();
      }).catch((err)=>{
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss">
  .pointer{
    cursor: pointer;
  }
  #restaurants-list{
    padding: 5px;
    li{
      margin-top: 10px;
      width: 30%;
      height: 120px;
      border: 1px solid #d1d1d1;
      background: #eee;
      padding: 20px;
      overflow: hidden;
    }
  }
</style>