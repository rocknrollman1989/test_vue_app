import Vue from 'vue'
import VueRouter from 'vue-router'
import PictureSection from '../components/PictureSection.vue'
import PictureSelfComponent from '../components/PictureSelfComponent.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: PictureSection },
    { path: '/image/:id', component: PictureSelfComponent}
  ]
export const router = new VueRouter({
    routes
})
