import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import test from '../views/test.vue'
import experience from '../views/Experience.vue'
import projects from '../views/Projects.vue'
import school from '../views/School.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test',
      name: "test",
      component: test
    },
    {
      path: '/school',
      name: "school",
      component: school
    },
    {
      path: '/experience',
      name: "experience",
      component: experience
    },

    {
      path: '/projects',
      name: "projects",
      component: projects
    },


    {
      // path: '/about',
      // name: 'about',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
