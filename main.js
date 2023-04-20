import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css'

import postsModule from './components/modules/posts'
import usersModule from './components/modules/users'

import { registerModules } from './register-modules'

registerModules({
  posts: postsModule,
  users: usersModule
})

createApp(App)
.use(router)
.mount('#app')
