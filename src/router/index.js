import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import iView from 'iView'
import 'iview/dist/styles/iview.css'    // 使用 CSS

Vue.use(Router)
Vue.use(iView)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
