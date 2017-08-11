import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import VideoList from '@/components/VideoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/videos',
    	name: 'Videos',
    	component: VideoList
    }
  ]
})
