import Home from '@/components/Home'
import NotFound from '@/components/NotFound'
/* eslint-disable import/prefer-default-export */
export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '*',
    component: NotFound
  }
]

export const VueRouterObject = {
  routes,
  mode: 'history',
  saveScrollPosition: true
}

export default VueRouter => new VueRouter(VueRouterObject)
