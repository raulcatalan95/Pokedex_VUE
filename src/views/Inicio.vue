<template>
  <div class="inicio">
    <div class="buscador" id="arriba">
      <div class="botonLeft">
        <button
          v-if="oneCard"
          @click="mostrartodopokes()"
          class="btn ml-4 mt-3 botonmostrarTodos"
        >
          Mostrar Todos Los Pokemones
        </button>
      </div>
      <div class="searchSpan mr-4">
        <span class="spanbuscador mr-4"
          >Encuentra tu Pokemon Por Nombre o N°</span
        >
        <el-input
          placeholder="Ej: Pikachu"
          v-model="input"
          class="input-with-select mr-4"
        >
          <el-button
            class="btnSearch"
            slot="append"
            icon="el-icon-search"
            type="primary"
            @click="buscar()"
          ></el-button>
        </el-input>
      </div>
    </div>
    <header class="header"></header>
    <div class="separador">
      <div class="iconosPokes1"> 
      <div class="pokeLeft">
        <img src="img\charmander.svg" alt="" class="imgSeprador mx-5" />
        <img src="img\squirtle.svg" alt="" class="imgSeprador mx-5" />
        <img src="img\bullbasaur.svg" alt="" class="imgSeprador mx-5" />
        <img src="img\pikachu.svg" alt="" class="imgSeprador mx-5" />
      </div>
      <h1>POKEDEX</h1>
      <div class="pokeRight">
        <img src="img\pikachu.svg" alt="" class="imgSeprador mx-5" />
        <img src="img\bullbasaur.svg" alt="" class="imgSeprador mx-5" />
        <img src="img\squirtle.svg" alt="" class="imgSeprador mx-5" />
        <img src="img\charmander.svg" alt="" class="imgSeprador mx-5" />
      </div>
      </div>
         <div class="iconosPokes2"> 
      <div class="pokeLeft">
        <img src="img\charmander.svg" alt="" class="imgSeprador mx-5" />
        <img src="img\squirtle.svg" alt="" class="imgSeprador mx-5" />
        <img src="img\bullbasaur.svg" alt="" class="imgSeprador mx-5" />
        <img src="img\pikachu.svg" alt="" class="imgSeprador mx-5" />
      </div>
      <h1>POKEDEX</h1>
      <div class="pokeRight">
        <img src="img\pikachu.svg" alt="" class="imgSeprador mx-5" />
        <img src="img\bullbasaur.svg" alt="" class="imgSeprador mx-5" />
        <img src="img\squirtle.svg" alt="" class="imgSeprador mx-5" />
        <img src="img\charmander.svg" alt="" class="imgSeprador mx-5" />
      </div>
      </div>
    </div>
    <div class="oneCard" v-if="oneCard">
      <Card
        v-for="(poke, i) in pokemonBuscado"
        :key="i"
        :nombre="poke.nombre"
        :habilidad="poke.habilidad"
        :id="poke.id"
        :srcback="poke.imgback"
        :srcfront="poke.imgfront"
        :ColorCard="colorCard(poke.tipos[0].type.name)"
        :tipo="poke.tipos[0].type.name"
      />
    </div>
    <div
      class="allCards pb-5"
      v-loading="loading"
      element-loading-text="Loading..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      v-else
    >
      <Card
        v-for="(poke, i) in TodoPokemones"
        :key="i"
        :nombre="poke.nombre"
        :habilidad="poke.habilidad"
        :id="poke.id"
        :srcback="poke.imgback"
        :srcfront="poke.imgfront"
        :ColorCard="colorCard(poke.tipos[0].type.name)"
        :tipo="poke.tipos[0].type.name"
      />
      <div class="botones_next mt-5">
        <a href="#">
          <button
            class="btn btn-primary "
            :disabled="nPages == 1"
            @click="previousPage()"
          >
            Previus Page {{ nPages - 1 }}
          </button></a
        >
        <div class="paginaActual">
          <p>{{ nPages }}</p>
        </div>
        <a href="#">
          <button class="btn btn-primary " @click="nextPage()">
            Next Page {{ nPages + 1 }}
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import { mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Inicio",
  components: {
    Card,
  },
  data() {
    return {
      cardColor: {
        grass: "#27cb50",
        bug: "#1c4b27",
        poison: "#5e2d89",
        fire: "#ab1f24",
        water: "#1552e1",
        flying: "#4a677d",
        normal: "#74515b",
        electric: "#e2e32b",
        rock: "#48190b",
        fighting: "#994025",
        ice: "#86d2f5",
        ground: "#c29f80",
        fairy: "#df80c9",
        ghost: "#6d6fc2",
        psychic: "#ea3d77",
      },
      input: "",
      pokemonBuscado: [],
      oneCard: false,
      nPages: 1,
      loading: false,
    };
  },
  computed: {
    ...mapState(["TodoPokemones"]),
  },
  methods: {
    ...mapActions([
      "seturlPokemones",
      "setTodoPokesNext",
      "setTodoPokesPrevious",
    ]),

    nextPage() {
      this.setTodoPokesNext();
      this.nPages++;
    },
    previousPage() {
      this.setTodoPokesPrevious();
      this.nPages--;
    },

    colorCard(tipo) {
      return tipo == "grass"
        ? this.cardColor.grass
        : false || tipo == "bug"
        ? this.cardColor.bug
        : false || tipo == "poison"
        ? this.cardColor.poison
        : false || tipo == "fire"
        ? this.cardColor.fire
        : false || tipo == "water"
        ? this.cardColor.water
        : false || tipo == "flying"
        ? this.cardColor.flying
        : false || tipo == "normal"
        ? this.cardColor.normal
        : false || tipo == "electric"
        ? this.cardColor.electric
        : false || tipo == "rock"
        ? this.cardColor.rock
        : false || tipo == "fighting"
        ? this.cardColor.fighting
        : false || tipo == "ice"
        ? this.cardColor.ice
        : false || tipo == "ground"
        ? this.cardColor.ground
        : false || tipo == "fairy"
        ? this.cardColor.fairy
        : false || tipo == "ghost"
        ? this.cardColor.ghost
        : false || tipo == "psychic"
        ? this.cardColor.psychic
        : false;
    },

    buscar() {
      this.pokemonBuscado = [];
      if (this.input != "") {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${this.input}`)
          .then((data) => {
            console.log(data.data);
            this.pokemonBuscado.push({
              habilidad: data.data.abilities,
              id: data.data.id,
              nombre: data.data.name,
              tipos: data.data.types,
            });
            this.input = "";
            this.oneCard = true;
          })
          .catch((res) => {
            alert("El Pokemon Que Buscaste No Existe");
          });
      }else{
        alert("Escribe Un Nombre o N° del Pokemon")
      }
    },
    mostrartodopokes() {
      this.oneCard = false;
    },
  },
  created() {
    this.seturlPokemones();
  },
};
</script>
<style lang="scss">
.oneCard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url("/img/fondo_poke.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  padding: 10px;
  width: 100%;
}
.allCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-image: url("/img/fondo_poke.jpg");
  background-size: contain;
  height: 100%;
  padding: 10px;
}

.header {
  background-image: url("/img/pokemon_header.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: black;
  height: 400px;
  width: 100%;
}
.separador {
  height: 60px;
  background-color: #000;
  border-bottom: 2px solid yellow;
  border-top: 2px solid yellow;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

}
.iconosPokes1{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  position: absolute;
  animation: animacion 10s linear infinite;
  
 
}
.iconosPokes2{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  position: absolute;
  opacity: 0;
  animation: animacion2 10s linear infinite ;
}

@keyframes animacion{
  0%{left:0%;}
  50%{left:50%;}
  100%{left:100%}
}
@keyframes animacion2{
  0%{left:-100%; opacity: 1;}
  50%{left:-50%; opacity: 1;}
  100%{left:0%; opacity: 1;}
}
.separador h1 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-shadow: #ebeb8c 2px 2px 2px;

  color: #ebeb8c;
}
.imgSeprador {
  height: 40px;
}
.el-input-group {
  width: 300px !important;
}
input {
  background-color: #909020 !important ;

  color: #fff !important;
}
.btnSearch {
  font-size: 1rem !important;
  background-color: #0166ff !important;
  color: #fff !important;
}
.buscador {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
}
.searchSpan {
  display: flex;
  flex-direction: column;
  width: 50%;

  align-items: flex-end;
}
.spanbuscador {
  color: yellow;
  font-family: sans-serif;
}
.botonmostrarTodos {
  color: #fff !important;
  background-color: #909020 !important;
}
.botonLeft {
  width: 50%;
  display: flex;
  justify-content: flex-start;
}
.botones_next {
  width: 100%;
  display: flex;
  justify-content: center;
}
.paginaActual {
  background-color: #909020;
  border: 1px solid #909020;
  color: #fff;
  width: 40px;
  height: 38px;
  margin-top: auto;
}
.paginaActual p {
  font-size: 1.7rem;
}
.botones_next .btn {
  border-radius: 0px !important;
}

</style>
