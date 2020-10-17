<template>
  <router-link :to="showUrl"> see planet </router-link>
</template>
<script>
export default {
  name: "RouterLinkPlanet",
  data() {
    return {
      data: {}
    };
  },
  computed: {
    showUrl() {
      let arrayUrl = this.data.homeworld.split("/");
      let planetId = arrayUrl[arrayUrl.length - 2];
      return "/planets/" + planetId;
    }
  }
};
</script>
