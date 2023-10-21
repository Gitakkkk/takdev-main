<template>
  <div class="post-list">
    <h2>Blog Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'post', params: { id: post.id } }">{{ post.title }}</router-link>
        <p>{{ post.date }}</p>
        <p>{{ post.excerpt }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-list {
  max-width: 800px;
  margin: 0 auto;
}

.post-list h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.post-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-list li {
  margin-bottom: 2rem;
}

.post-list li p {
  margin: 0;
}
</style>
