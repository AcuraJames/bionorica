import { createRouter, createMemoryHistory } from "vue-router"

import HomeView from '@/views/HomeView'
import TimetableView from '@/views/TimetableView'
import TeambuildingView from '@/views/TeambuildingView'
import FeedbackView from '@/views/FeedbackView'
import StreamView from '@/views/StreamView'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/timetable',
    name: 'Timetable',
    component: TimetableView,
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: FeedbackView,
  },
  {
    path: '/teambuilding',
    name: 'Teambuilding',
    component: TeambuildingView,
  },
  {
    path: '/stream',
    name: 'Stream',
    component: StreamView,
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router