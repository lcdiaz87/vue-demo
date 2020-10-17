<template>
   <div id="people">
      <ejs-grid :dataSource="users" :allowSorting='true' :allowFiltering='true'>
        <e-columns>
          <e-column field='name' headerText='Name' headerTextAlign='Center' textAlign='Left'></e-column>
          <e-column field='height' headerText='Height' headerTextAlign='Center' textAlign='Right' width=100></e-column>
          <e-column field='mass' headerText='Mass' headerTextAlign='Center' textAlign='Right' width=100></e-column>
          <e-column field='created' headerText='Created' headerTextAlign='Center' textAlign='Center' format='M-d-y hh:mm:ss' type='datetime' width=220></e-column>
          <e-column field='edited' headerText='Edited' headerTextAlign='Center' textAlign='Center' format='M-d-y  hh:mm:ss' type='datetime' width=220></e-column>
          <e-column field='homeworld' headerText='Planet' headerTextAlign='Center' textAlign='Center' width='180' :template="routerlinkTemplate" ></e-column>
        </e-columns>
      </ejs-grid>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { GridPlugin, Sort, Filter } from '@syncfusion/ej2-vue-grids';
import RouterLinkPlanet from '@/components/RouterLinkPlanet';

Vue.use(GridPlugin);

export default {
  name: 'People',
  data() {
    return {
      routerlinkTemplate() {
        return {
          template: RouterLinkPlanet
        } 
      }
    };
  },
  created() {
    this.$store.dispatch('loadPeople');
  },
  computed: {
    users() {
      return this.$store.getters.getPeople;
    }
  },
  provide: {
    grid: [Sort, Filter]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
