<template>
  <div id="app">
    <b-container fluid>
      <NavBar />
      <div class="p-4 text-center">
        <SearchCountries />
        <router-view />
      </div>
    </b-container>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SearchCountries from "./components/SearchCountries.vue";
export default {
  components: {
    NavBar,
    SearchCountries,
  }
};
</script>

<style>
.container-fluid {
  padding: 0 !important;
}

#nav-collapse a.active-routes {
  color: white;
}
</style>
