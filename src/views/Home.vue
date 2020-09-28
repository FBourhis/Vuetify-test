<template>
  <div class="home">
    <h1>Homepage</h1>
    <v-btn class="pink white--text">Click me !</v-btn>
    <v-btn text dark color="pink">Click me !</v-btn>
    <v-btn depressed color="pink">
      <v-icon left medium>mdi-email</v-icon>
      <span>EMAIL ME</span>
    </v-btn>

    <v-btn small depressed color="pink">
      <v-icon left small>mdi-email</v-icon>
      <span>EMAIL ME</span>
    </v-btn>

    <v-btn fab dark>
      <v-icon color="pink">mdi-heart</v-icon>
    </v-btn>
    

  </div>
</template>

<script>

export default {
  
}

</script>

<style scoped>
button{
  margin: 10px;
}
</style>
