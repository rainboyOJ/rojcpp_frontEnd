import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Login from './views/Login.vue'

import Index from './views/Index.vue'
import User from './views/User.vue'
import Submissions from './views/Submissions.vue'
import Problem from './views/Problem.vue'
import ProblemList from './views/ProblemList.vue'
import Rank from './views/Rank.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/login', component: Login, meta: { title: 'Login' } },
  { 
    path: '/',
    component: Home, 
    redirect:'/index',
    meta: { title: 'Home' },
    children: [
      {
        path:'index',
        component:Index
      },
      {
        path:'user',
        component:User
      },
      {
        path:'submission/:id(\\d+)?',
        component:Submissions
      },
      {
        path:'problem/:id(\\d+)?',
        component:Problem
      },
      {
        path:'problems/:id(\\d+)?',
        component:ProblemList
      },
      {
        path:'rank/:id(\\d+)?',
        component:Rank
      },
      {
        path: '/about',
        meta: { title: 'About' },
        component: About,
        // example of route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import('./views/About.vue')
      },
    ]
  },
  { path: '/:path(.*)', component: NotFound },
]
