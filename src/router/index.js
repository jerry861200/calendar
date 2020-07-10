import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import weekcalendar from '../views/weekcalendar.vue'
import Receive from '../views/Receive.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/weekcalendar',
    name: 'weekcalendar',
    component: weekcalendar
  },
  {
    path: '/receive',
    name: 'Receive',
    component: Receive
  }
  
]

const router = new VueRouter({
  mode: 'history'
  ,routes
})

export default router
