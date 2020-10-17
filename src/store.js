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
    counter: 0
  },
  mutations: {
    savePeople(state, data) {
        state.people = data.results;
    },
    increment(state) {
      state.counter++;
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
    increment(context) {
      context.commit("increment");
    }
  },
  getters: {
    getPeople(state){
        return state.people;
    },
    counter(state) {
      return state.counter;
    }
  }
});

export default store;
