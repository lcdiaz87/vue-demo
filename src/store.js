import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
Vue.use(Vuex);

let apiClient = axios.create({
    baseURL: "https://swapi.dev/api/",
    headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json'
    }
 });
//init store
const store = new Vuex.Store({
  state:{
    people:[],
    planet: {}
  },
  mutations: {
    savePeople(state, data) {
        state.people = data.results;
    },
    savePlanet(state, data) {
      state.planet = data;
    }
  },
  actions: {
    loadPeople(context) {
        apiClient.get('people').then(result => {
          context.commit('savePeople', result.data);
        }).catch(error => {
          console.log("error: loading people");
          throw new Error(`API ${error}`);
        });
    },
    loadPlanet(context, planetId) {
      apiClient.get('planets/'+planetId).then(result => {
        context.commit('savePlanet', result.data);
      }).catch(error => {
        console.log("error: loading planet");
        throw new Error(`API ${error}`);
      });
    }
  },
  getters: {
    getPeople(state){
        return state.people;
    },
    getPlanet(state) {
      return state.planet;
    }
  }
});

export default store;
