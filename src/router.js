import { createWebHistory, createRouter } from 'vue-router';
import ProjectCard from './components/ProjectCard';
import Blog from './components/Blog';
import Admin from './components/Admin';

const routes = [
  {
    path: '/',
    component: ProjectCard,
  },
  {
    path: '/blog',
    component: Blog,
  },
  {
    path: '/admin',
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
