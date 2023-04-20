const Module = () => import('./Module.vue')
const Home = () => import('./views/Home.vue')
const Post = () => import('./views/Post.vue')

const moduleRoute = [
  {
    path: '/posts',
    component: Module,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: ':id',
        component: Post
      }
    ]
  }
]

export default router => {
  moduleRoute.forEach(function(route) {
    router.addRoute(route)
  })
}