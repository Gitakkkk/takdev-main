<template>
  <div class="app">
    <h1 class="title">Takdev</h1>
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
html {
  margin: 0;
  padding: 0;
  background-color: #ece6cc;
}

.title {
  font-size: 5em;
  font-weight: 300;
  margin-bottom: 0.25em;
  color: #2c3e50;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #ece6cc;
}
</style>
