<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h1>{{ events }}</h1>
    <p> hello hello hello</p>
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
          "https://api.predicthq.com/v1/events/?active.gte=2015-04-01&active.lte=2020-04-30&category=concerts&sort=rank&within=100mi@34.0522,-118.2437"
        )
        .then((response) => {
          console.log(response.data);
          this.events = response.data.results;
        });
    },
  },
};
</script>