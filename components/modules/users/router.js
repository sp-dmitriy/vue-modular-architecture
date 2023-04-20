const Module = () => import('./Module.vue')
const Home = () => import('./views/Home.vue')
const User = () => import('./views/User.vue')

const moduleRoute = [
  {
    path: '/users',
    component: Module,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: ':id',
        component: User
      }
    ]
  }
]

export default router => {
  moduleRoute.forEach(function(route) {
    router.addRoute(route)
  })
};