<template>
  <div class="home">
    <h1>Bienvenido a la Experiencia Pokemon !</h1>
      <router-link class="p-5" :to="{name:'Inicio'}"><button class="btn btn-success">Comenzar</button></router-link>

     

      
         </div>
      
</template>
<script>
export default {
  name:"Home",
  data() {
    return {
      colorFont:"red",
      verifico: true
    }
  },
  computed: {
     
},
  methods: {
   
  },
 
}
</script>
<style scoped lang="scss">
.home img{
height: 40px;
}
.home{
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-image:url("/img/fondo_intro.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: #dbfa4f;
  opacity: 0.9;
  
}
.home h1{
  opacity: 1;
}
  
</style>