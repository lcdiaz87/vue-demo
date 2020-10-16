<template>
   <div id="people">
      <ejs-grid :dataSource="users"> </ejs-grid>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import { GridPlugin } from '@syncfusion/ej2-vue-grids';

Vue.use(GridPlugin);

export default {
  name: 'People',
  created() {
    this.$store.dispatch('loadPeople');
  },
  computed: {
    users() {
      return this.$store.state.people;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
