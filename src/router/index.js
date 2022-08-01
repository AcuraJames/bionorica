import { createRouter, createWebHistory } from "vue-router"

import HomeView from '@/views/HomeView'
import TimetableView from '@/views/TimetableView'
import TeambuildingView from '@/views/TeambuildingView'
import FeedbackView from '@/views/FeedbackView'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Главная'
    }
  },
  {
    path: '/timetable',
    name: 'TimetableView',
    component: TimetableView,
    meta: {
      title: 'Расписание'
    }
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: FeedbackView,
    meta: {
      title: 'Обратная связь'
    }
  },
  {
    path: '/teambuilding',
    name: 'Teambuilding',
    component: TeambuildingView,
    meta: {
      title: 'Тимбилдинг'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router