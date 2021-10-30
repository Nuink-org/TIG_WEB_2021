import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'
import ContentsPage from '@/views/contents/ContentsPage.vue'
import BehindTheScenesPage from '@/views/contents/BehindTheScenesPage.vue'
import MusicExperimentPage from '@/views/contents/MusicExperimentPage.vue'
import RadioPage from '@/views/contents/RadioPage.vue'
import ProjectionMappingPage from '@/views/contents/ProjectionMappingPage.vue'
import TalkSessionPage from '@/views/contents/TalkSessionPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      scrollPos: {
        top: 0,
        left: 0
      }
    }
  },
  {
    path: '/contents',
    name: 'Contents',
    component: ContentsPage,
    children: [
      {
        path: 'behind_the_scenes',
        name: 'BehindTheScenes',
        component: BehindTheScenesPage
      },
      {
        path: 'music_experiment',
        name: 'MusicExperiment',
        component: MusicExperimentPage
      },
      {
        path: 'radio',
        name: 'Radio',
        component: RadioPage
      },
      {
        path: 'projection_mapping',
        name: 'ProjectionMapping',
        component: ProjectionMappingPage
      },
      {
        path: 'talk_session',
        name: 'TalkSession',
        component: TalkSessionPage
      }
    ]
  },
  {
    // それ以外はホーム画面に遷移
    path: '/:notFound(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || to.meta.scrollPos || { top: 0, left: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // Homeページに戻る際には、以前のポジションを読み込み、そのポジションに戻るようにする。
  from.meta.scrollPos && (from.meta.scrollPos.top = store.state.scrollTopPos)
  return next()
})

export default router
