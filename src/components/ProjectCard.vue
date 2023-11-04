<template>
  <div class="project-cards">
    <div class="project-card" @click="showPrepareAlert">
      <img src="https://takdev.s3.ap-northeast-2.amazonaws.com/public/favicon.ico" alt="Blog thumnail image" />
      <h2>Blog</h2>
      <h5>Vue.js 적응</h5>
    </div>
    <div class="project-card" @click="showPrepareAlert">
      <img src="https://takdev.s3.ap-northeast-2.amazonaws.com/public/favicon.ico" alt="Admin thumnail image" />
      <h2>Admin</h2>
      <h5>데이터 시각화</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  methods: {
    goToBlog() {
      this.$router.push('/blog');
    },
    goToAdmin() {
      this.$router.push('/admin');
    },
    showPrepareAlert() {
      alert('준비 중인 페이지입니다.');
    },
  },
};
</script>

<style>
.project-cards {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
}

.project-card {
  color: black;
  background-color: #ffffff;
  padding: 20px;
  margin: 10px;
  width: 300px;
  height: 500px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.project-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.project-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

.project-card h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.project-card h5 {
  font-size: 18px;
  color: #888;
}
</style>
