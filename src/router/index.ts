import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Index",
    component: () => import('@/views/resume-container/index.vue'),
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router