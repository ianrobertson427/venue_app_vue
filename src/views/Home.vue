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
    axios.defaults.headers.common["Authorization"] =
      "Bearer UDXYtLXMGfqV_Y0ozyO5UwmE8KukBsNgwAh5hyTy";
    axios
      .get(
        "https://api.predicthq.com/v1/events?q=rock&country=US&active.gte=2019-01-01&active.lte=2020-01-01&active.tz=America/Los_Angeles&sort=rank"
      )
      .then((response) => {
        console.log(response.data);
        this.events = response.data;
      });
  },
  methods: {},
};
</script>