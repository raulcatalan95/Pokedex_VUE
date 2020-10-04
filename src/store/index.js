import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    TodoPokemones: [],
    Pokemones: [],
    urlPokes: "",
    nextPage:"",
    previusPage:""
  },
  mutations: {
    SET_TODOPOKEMONES(state, data) {
      state.TodoPokemones = data;
    },
    SET_URLPOKES(state, data) {
      state.urlPokes = data;
    },
    SET_NEXTPAGE(state,data){
      state.nextPage = data;
    },
    SET_PREVIUSPAGE(state,data){
      state.previusPage = data;
    }
  },
  actions: {
   
    seturlPokemones(context) {
      let onlyUrl = [];
      let todoPokes = [];
       let paginaSiguiente;
      axios
        .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
        .then((res) => {
           paginaSiguiente= res.data.next
          res.data.results.forEach((e) => {
            onlyUrl.push(e.url);
          });
          context.commit("SET_NEXTPAGE",paginaSiguiente)
          context.commit("SET_URLPOKES", onlyUrl);
        })
        .then((response) => {
          
          context.state.urlPokes.forEach((e) => {
            axios.get(e).then((data) => {
              todoPokes.push({
                habilidad: data.data.abilities,
                id: data.data.id,
                nombre: data.data.name,
                tipos: data.data.types,
              });
            });
          });
        });
      context.commit("SET_TODOPOKEMONES", todoPokes);
    },

    setTodoPokesNext(context){
      let onlyUrl = [];
      let todoPokes = [];
       let paginaSiguiente;
       let paginaAnterior;
      axios
        .get(context.state.nextPage)
        .then((res) => {
          paginaAnterior = res.data.previous
           paginaSiguiente= res.data.next
          res.data.results.forEach((e) => {
            onlyUrl.push(e.url);
          });
          context.commit("SET_PREVIUSPAGE",paginaAnterior)
          context.commit("SET_NEXTPAGE",paginaSiguiente)
          context.commit("SET_URLPOKES", onlyUrl);
        })
        .then((response) => {
          
          context.state.urlPokes.forEach((e) => {
            axios.get(e).then((data) => {
              todoPokes.push({
                habilidad: data.data.abilities,
                id: data.data.id,
                nombre: data.data.name,
                tipos: data.data.types,
              });
            });
          });
        });
      context.commit("SET_TODOPOKEMONES", todoPokes);
    },

    setTodoPokesPrevious(context){
      let onlyUrl = [];
      let todoPokes = [];
       let paginaSiguiente;
       let paginaAnterior;
      axios
        .get(context.state.previusPage)
        .then((res) => {
          paginaAnterior = res.data.previous
           paginaSiguiente= res.data.next
          res.data.results.forEach((e) => {
            onlyUrl.push(e.url);
          });
          context.commit("SET_PREVIUSPAGE",paginaAnterior)
          context.commit("SET_NEXTPAGE",paginaSiguiente)
          context.commit("SET_URLPOKES", onlyUrl);
        })
        .then((response) => {
          
          context.state.urlPokes.forEach((e) => {
            axios.get(e).then((data) => {
              todoPokes.push({
                habilidad: data.data.abilities,
                id: data.data.id,
                nombre: data.data.name,
                tipos: data.data.types,
              });
            });
          });
        });
      context.commit("SET_TODOPOKEMONES", todoPokes);
    }
  },
  modules: {},
});
