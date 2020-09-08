<template>
  <div class="home">
    <h1>Find some shows within 100 miles!</h1>
    <div class="wrapper">
      <input v-model="search_term" type="text" class="input" placeholder="EX: Seattle, Washington">
      <div class="searchbtn">
        <i class="fas fa-search"></i>

      </div>
      
      <button type="button"v-on:click="getevents()" >Search a new Location</button>

    </div>

    <!-- Create v-for here !-->

    <h1>{{ message }}</h1>
       <ul>
      <li v-for="event in events" :key="event.id">
        <span>{{ "Artist: " + event.title }}</span>
        <label>{{ "Venue: " + event.entities[0].name }}</label>
        <label>{{ "Description: " + event.description }}</label>
        <label>{{ "Coordinates: " + event.location }}</label>
      </li>
    </ul>
  </div>
</template>
<style>
</style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "",
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
      if (this.search_term === "Seattle, Washington") {
        var url =
          "https://api.predicthq.com/v1/events/?active.gte=2015-04-01&active.lte=2020-04-30&category=concerts&sort=rank&within=500mi@47.6062,-122.3321";
      } else {
        var url =
          "https://api.predicthq.com/v1/events/?active.gte=2015-04-01&active.lte=2020-04-30&category=concerts&sort=rank&within=500mi@51.5074,0.1278";
      }
      axios.get(url).then((response) => {
        console.log(response.data);
        this.events = response.data.results;
        // create loop here
      });
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

