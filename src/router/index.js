import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../components/views/IndexView.vue'
import RankView from '../components/views/RankView.vue'
import ItemView from '../components/views/ItemView.vue'

const routes = [
  {
    path: '/',
    component: IndexView
  },
  {
    path: '/rank/',
    component: RankView
  },
  {
    // 动态匹配，传参，组件可以用'$route.params'获取参数
    path: '/rank/:item',
    component: ItemView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
