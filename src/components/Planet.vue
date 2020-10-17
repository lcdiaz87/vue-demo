<template>
  <div id="planetId" class="justify-content-center">
    <h1>Planet's Detail</h1>
    <b-list-group class="details text-left">
        <b-list-group-item><strong>Name: </strong> {{planet.name}}</b-list-group-item>
        <b-list-group-item><strong>Diameter: </strong> {{planet.diameter}}</b-list-group-item>
        <b-list-group-item><strong>Climate: </strong> {{planet.climate}}</b-list-group-item>
        <b-list-group-item><strong>Population: </strong> {{planet.population}}</b-list-group-item>
        <b-list-group-item class="text-center"><router-link to="/people" tag="button"> Back </router-link> </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

export default {
  name: "Planet",
  created() {
    this.$store.dispatch("loadPlanet", this.$route.params.id);
  },
  computed: {
    planet() {
      return this.$store.getters.getPlanet;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
.details{
    width:400px;
    margin:auto;
}
</style>
