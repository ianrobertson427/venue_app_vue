<template>
  <div class="home">
    <p> hello hello hello</p>
    <h1>Testing Venues</h1>
    <div class="wrapper">
      <input v-model="search_term" type="text" class="input" placeholder="What Events would you like?">
      <div class="searchbtn">
        <i class="fas fa-search"></i>

      </div>
      
      <button type="button"v-on:click="getevents()" >Click me!</button>

    </div>
    <h1>{{ message }}</h1>
    <h1>{{ events }}</h1>
  </div>
</template>
<style>
</style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      events: [],
      search_term: "",
    };
  },
  created: function () {
    this.getevents();
  },
  methods: {
    getevents: function () {
      axios.defaults.headers.common["Authorization"] =
        "Bearer UDXYtLXMGfqV_Y0ozyO5UwmE8KukBsNgwAh5hyTy";
      axios
        .get(
          "https://api.predicthq.com/v1/events/?active.gte=2015-04-01&active.lte=2020-04-30&category=concerts&sort=rank&within=500mi@51.5074,0.1278"
        )
        .then((response) => {
          console.log(response.data);
          this.events = response.data.results;
        });
    },
  },
};
</script>