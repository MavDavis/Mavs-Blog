Limport { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import ForgotPassword from '../views/ForgotPassword'
import CreateBlog from '../views/CreateBlog.vue'
import BlogView from '../views/BlogView.vue'
import Register from '../views/Register.vue'
import { nextTick } from 'vue'
import Admin from '../views/Admin.vue'
import PostPreview from '../views/PostPreview.vue'
import Profile from '../views/Profile.vue'
import ViewBlog from '../views/ViewBlog.vue'
import EditBlog from '../views/EditBlog.vue'
//test
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'Home'
    }
  },
  {
    path: '/editBlog/:id',
    name: 'EditBlog',
    component: EditBlog,
    meta:{
      title:'EditBlog'
    }
  },
  {
    path:'/postPreview',
    name:'PostPreview',
    component:PostPreview,
    meta:{
      title:'Post Preview'
    }
  },
  
  {
    path: '/admin',
    name: 'Admin',
component:Admin,
    meta:{
      title:'Admin'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
component:Profile,
    meta:{
      title:'Profile'
    }
  },
  {
    path: '/blogView',
    name: 'BlogView',
component:BlogView,
    meta:{
      title:'BlogView'
    }
  },
  {
    path: '/createBlog',
    name: 'CreateBlog',
component:CreateBlog,
    meta:{
      title:'CreatBlog'
    }
  },
    {
    path: '/register',
    name: 'Register',
component:Register,
    meta:{
      title:'Register'
    }
  },
  {
    path: '/login',
    name: 'Login',
component:Login,
    meta:{
      title:'Login'
    }
  },
  {
    path: "/viewBlog/:id",
    component: ViewBlog,
    name: "ViewBlog",
    meta:{
      title:'BlogDetails'
    }
},
  {
    path: '/forgot-Password',
    name: 'ForgotPassword',
component:ForgotPassword,
    meta:{
      title:'ForgotPassword'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
    scrollBehavior(to, from){
    return{top:0, behavior:'smooth'}
  }
})
router.beforeEach((to, from, next)=>{
  document.title = `${to.meta.title}~Mavs-Blogs `;
  next()
})
export default router
