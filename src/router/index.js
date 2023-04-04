import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import AboutView from '../views/About/AboutView.vue'
import Contact from '../views/Contact/Contact.vue'
import Help from '../views/Help/Help.vue'
import Notice from '../views/Notice/Notice.vue'
import NoticeDetails from '../views/Notice/NoticeDetails'
import Blog from '../views/Blog/Blog.vue'
import BlogDetails from '../views/Blog/BlogDetails.vue'
import Books from '../views/Books/Books.vue'
import BookDetails from '../views/Books/BookDetails'
import Syllabus from '../views/Syllabus/Syllabus.vue'
import SyllabusDetails from '../views/Syllabus/SyllabusDetails.vue'
import Routine from '../views/Routine/Routine.vue'
import RoutineDetails from '../views/Routine/RoutineDetails.vue'
import Faq from '../views/FAQ/Faq.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path:'/contact',
    name:'contact',
    component:Contact
  },
  {
    path:'/help',
    name:'help',
    component:Help
  },
  {
    path:'/notice',
    name:'notice',
    component:Notice
  },
  {
    path:'/notice/:id',
    name:'notice-details',
    component:NoticeDetails,
    props:true
  },
  {
    path:'/blog',
    name:'blog',
    component:Blog
  },
  {
    path:'/blog/:id',
    name:'blog-details',
    component:BlogDetails,
    props:true
  },
  {
    path:'/books',
    name:'books',
    component:Books
  },
  {
    path:'/books/:id',
    name:'book-details',
    component:BookDetails,
    props:true
  },
  {
    path:'/syllabus',
    name:'syllabus',
    component:Syllabus
  },
  {
    path:'/syllabus/:id',
    name:'syllabus-details',
    component:SyllabusDetails,
    props:true
  },
  {
    path:'/routine',
    name:'routine',
    component:Routine
  },
  {
    path:'/routine/:id',
    name:'routine-details',
    component:RoutineDetails,
    props:true
  },
  {
    path:'/faq',
    name:'faq',
    component:Faq
  },
  {
    path:'/jobs',
    name:'jobs',
    component:Jobs
  },
  {
    path:'/jobs/:id',
    name:'job-details',
    component:JobDetails,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
