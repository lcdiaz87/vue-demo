<template>
   <div id="planetId">
      <p><strong>test:</strong>test2</p>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

export default {
  name: 'Planet',
  created() {
    this.$store.dispatch('loadPlanet');
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
