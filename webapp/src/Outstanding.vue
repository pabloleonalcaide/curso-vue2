<template>
    <h2> Estás en {{msg}} : {{id_restaurant}} </h2>
</template>

<script>
export default {
  name: 'Outstanding',
  mounted(){
    this.id_restaurant = this.$route.params.id;
  },
  data () {
    return { 
      msg: 'Restaurante Destacado',
      id_restaurant: null,
    }
  }
}
</script>

<style></style>