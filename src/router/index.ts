import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import EducationView from '../views/EducationView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'about', component: AboutView },
    { path: '/education', name: 'education', component: EducationView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
