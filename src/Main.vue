<template>
  <div class="main">
    <h1 class="title">Takdev</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MainPage',
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 3.5em;
  font-weight: 700;
  margin-bottom: 0.5em;
  color: #3498db;
  text-shadow: 2px 2px 4px rgba(52, 152, 219, 0.7);
  text-align: center;
  margin-left: 20px;
  cursor: pointer;
}

.main {
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #555;
  padding: 20px;
  margin: 20px;
}
</style>
