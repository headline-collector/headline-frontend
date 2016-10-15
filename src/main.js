// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookie from 'vue-cookie'
import App from './App'
import Index from './components/index'
import Login from './components/login'
import Manage from './components/manage'
import Register from './components/register'

Vue.use(VueCookie)

Vue.use(VueRouter)

var router=new VueRouter();

router.map({
  '/':{
    component:Index,
    name:"index"
  },
  '/login':{
    component:Login,
    name:"login"
  },
  '/manage':{
    component: Manage,
    name:"manage"
  },
  "register":{
    component:Register,
    name:"register"
  }
});

router.beforeEach(({to, next}) => {
    if(VueCookie.get("token")==null&&to.path!="/register"){
          to.router.go({name: 'login'});
      }
      next()
});

router.start(App,'#app');


