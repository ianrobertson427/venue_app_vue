
<template>
  <div class="home">
    <h1>{{ message }}</h1>
   <h1>{{ venues }}</h1> 

    
    <div v-for="venue in venues">
      <h3><a v-bind:href="`/venues/${venue.id}`">{{ venue.name }}</a></h3>
      <p>{{ venue.capacity }}</p>
      <hr>
    </div>
  </div>
</template>

<style>
</style>
