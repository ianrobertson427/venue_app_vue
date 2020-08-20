<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div v-for="venue in venues">
      <p><a v bind:href="`/venues/${venue.id}`">{{ venue.name }}</a></p>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  mixins: [Vue2Filters.mixin],
};
</script>
