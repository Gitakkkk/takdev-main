<template>
  <div class="main">
    <h1 class="title" @click="goToMain">Takdev</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  methods: {
    goToMain() {
      this.$router.push('/');
    },
  },
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
  color: #000000;
  text-align: center;
  margin-left: 20px;
}

.title:hover {
  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.main {
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #555;
  padding: 20px;
  margin: 20px;
}
</style>
