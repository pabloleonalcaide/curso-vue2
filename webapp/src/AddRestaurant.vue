<template>
    <div id="restaurant-add">
        <form v-on:submit.prevent="saveRestaurant">
            <p>
                <label> Nombre: </label>
                <input type="text" v-model="restaurant.nombre">
            </p>
                        <p>
                <label> Dirección: </label>
                <input type="text" v-model="restaurant.direccion">
            </p>
                        <p>
                <label> Descripción: </label>
                <textarea v-model="restaurant.descripcion"></textarea>
            </p>
            <p>
                <label> Precio: </label>
                <select v-model="restaurant.precio">
                    <option value="">Selecciona opción..</option>
                    <option value="bajo">Bajo</option>
                    <option value="medio">Medio</option>
                    <option value="alto">Alto</option>
                </select>
                <input type="hidden" v-model="restaurant.imagen" value="NULL">
            </p>
            <p>
                <input type="submit" value="guardar restaurante">
            </p>
        </form>
    
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        name: 'restaurant-add',
        mounted(){

        },
        data(){
            return{
                restaurant: {
                    nombre: '',
                    direccion: '',
                    descripcion: '',
                    imagen: 'NULL',
                    precio: 'normal'
                    
                }
            };
        },
        methods:{
            saveRestaurant(){
                var params = "json="+JSON.stringify(this.restaurant);
                var router = this.$router;
               axios.post('http://localhost/api-rest/api.php/restaurantes',params)
                    .then((res)=>{
                        if(res.data.status == 'success'){
                            router.push('/restaurants'); //redirect
                        }
                    }).catch((error)=>{
                        console.log(error.response);
                    })
            }
        }
    }
</script>

<style lang="scss">

</style>
