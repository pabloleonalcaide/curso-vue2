<template>
    <div>
    <h1> Detalle del restaurante {{ id }}</h1>
    <div id="restaurant-detail" v-if="restaurant !=null">
        <h2 v-text="restaurant.nombre"></h2>
        <p v-text="restaurant.descripcion"  ></p>
    </div>
    <span v-else>Cargando restaurante...</span>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        name: 'restaurant-detail',
        mounted(){
            this.id = this.$route.params.id; // Get the id from the the route ('/restaurant/2)
      axios.get('http://localhost/api-rest/restaurantes-api.php/restaurante/'+ this.id)
        .then((res)=>{this.restaurant = res.data.data})
        //use an arrow function to get acces to object this
        },
        data(){
            return{
                id: null,
                restaurant: null
            }
        }
    }
</script>
