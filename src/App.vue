<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
     <router-link to="/" class="links">Convert</router-link>
     <router-link to="/list" class="links">List</router-link>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .links {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    padding: 10px;
    text-decoration: none;
    text-transform: uppercase;
  }
</style>
