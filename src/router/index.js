import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../components/views/IndexView.vue'
import RankView from '../components/views/RankView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/rank/',
    name: 'rank',
    component: RankView
  },
  {
    // 动态匹配，传参，组件可以用'$route.params'获取参数
    path: '/rank/:item'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
