<template>
  <div class="carta my-3 mx-3">
  
      <el-card :body-style="{ padding: '0px', backgroundColor: ColorCard }" >
        <img
          :src="`https://pokeres.bastionbot.org/images/pokemon/${id}.png`"
          class="image"
        />
        <div style="padding: 14px;">
          <span class="name_card">{{ nombre }}</span>
          <div class="bottom clearfix">
           <b> <span class="numberPoke">N°{{id}}</span> </b>
            <el-tooltip class="item" effect="light" content="Abrir Pokedex" placement="top">
            <el-button type="text" class="button"  @click="openPokedex()" ><img class="imgPokedex" src="img\telefono-inteligente.svg" alt=""></el-button>
            </el-tooltip>
          </div>
        </div>
      </el-card>
         <el-dialog class="dialogo" :title="nombre" :visible.sync="dialogTableVisible">
          
             <div>
               <h5>Habilidades</h5>
               <ul><li v-for="(ability,index) in habilidad" :key="index">{{ability.ability.name}}</li></ul>
             </div>
           
           
 
        </el-dialog>
 
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    id: Number,
    nombre: String,
    ColorCard: String,
    tipo: String,
    indice:Number,
    habilidad:Array
  },
  data() {
    return {
     dialogTableVisible: false,
    };
  },
  methods: {
    openPokedex(){
      this.dialogTableVisible = true
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
  
}
.button:hover{
  background-color: aliceblue;

}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.name_card{
  font-size: 2rem;
  font-family: monospace;
  color: aliceblue;
}
.carta{
  width: 300px;
  max-width: 300px;
  min-width: 300px;
  max-height: 400px;
  height: 400px;
  min-height: 400px;
  
}

.el-card:hover {
box-shadow: #ebeb8c 12px 2px 25px;
opacity: 0.8;

}
.imgPokedex{
  height: 40px;
  
}
.imgPokedex:hover{
  height: 45px;
}
.numberPoke{
  font-family: monospace;
  color: #b3afaf;
}

</style>
