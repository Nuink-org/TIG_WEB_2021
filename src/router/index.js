import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ContentsPage from '@/views/contents/ContentsPage.vue'
import WebInteractionPage from '@/views/contents/WebInteractionPage.vue'
import MusicExperimentPage from '@/views/contents/MusicExperimentPage.vue'
import RadioPage from '@/views/contents/RadioPage.vue'
import ProjectionMappingPage from '@/views/contents/ProjectionMappingPage.vue'
import TalkSessionPage from '@/views/contents/TalkSessionPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contents',
    name: 'Contents',
    component: ContentsPage,
    children: [
      {
        path: '/web_interaction',
        name: 'WebInteraction',
        component: WebInteractionPage
      },
      {
        path: '/music_experiment',
        name: 'MusicExperiment',
        component: MusicExperimentPage
      },
      {
        path: '/radio',
        name: 'Radio',
        component: RadioPage
      },
      {
        path: '/projection_mapping',
        name: 'ProjectionMapping',
        component: ProjectionMappingPage
      },
      {
        path: '/talk_session',
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
  routes
})

export default router
