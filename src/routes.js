import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Login from './views/Login.vue'
import Reg from './views/Register.vue'

import Index from './views/Index.vue'
import User from './views/User.vue'
import Submissions from './views/Submissions.vue'
import Problem from './views/Problem.vue'
import ProblemList from './views/ProblemList.vue'
import Rank from './views/Rank.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/login', component: Login, name:'Login',meta: { title: 'Login' } },
  { path: '/register', component: Reg, name:'Register',meta: { title: 'Register' } },
  { 
    path: '/',
    component: Home, 
    redirect:'/index',
    name:'Home',
    meta: { title: 'Home' },
    children: [
      {
        path:'index',
        name:'Index',
        component:Index
      },
      {
        path:'user',
        name:'UserInfo',
        component:User
      },
      {
        path:'submission/:id(\\d+)?',
        name:'Submissions',
        component:Submissions
      },
      {
        path:'problem/:id(\\d+)?',
        name:'Problem',
        component:Problem
      },
      {
        path:'problems/:id(\\d+)?',
        name:'Problems',
        component:ProblemList
      },
      {
        path:'rank/:id(\\d+)?',
        name:'Rank',
        component:Rank
      },
      {
        path: '/about',
        name:'About',
        meta: { title: 'About' },
        component: About,
        // example of route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import('./views/About.vue')
      },
    ]
  },
  { path: '/:path(.*)',name:'NotFound', component: NotFound },
]
