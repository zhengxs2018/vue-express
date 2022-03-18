import type { RouteRecordRaw } from 'vue-router'

import HomeView from '../views/home/HomeView.vue'
import IndexPane from '../views/home/IndexPane.vue'
import MinePane from '../views/home/MinePane.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    redirect: '/home/index',
    component: HomeView,
    children: [
      {
        name: 'home',
        path: '/home/index',
        component: IndexPane,
        meta: {
          title: '首页'
        }
      },
      {
        name: 'mine',
        path: '/home/mine',
        component: MinePane,
        meta: {
          title: '我的'
        }
      }
    ]
  },
  {
    path: '/mine/settings',
    component: () => import('../views/settings/SettingsView.vue'),
    meta: {
      title: '我的设置'
    }
  }
]

export default routes
