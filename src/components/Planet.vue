<template>
   <div id="planetId">
        <h1>Planet's Detail</h1>
        <p><strong>Name:</strong>{{planet.name}}</p>
        <p><strong>Diameter:</strong>{{planet.diameter}}</p>
        <p><strong>Climate:</strong>{{planet.climate}}</p>
        <p><strong>Population:</strong>{{planet.population}}</p>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

export default {
  name: 'Planet',
  created() {
    this.$store.dispatch('loadPlanet',this.$route.params.id);
  },
  computed: {
    planet() {
      return this.$store.getters.getPlanet;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
