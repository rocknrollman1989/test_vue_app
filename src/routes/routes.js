import Vue from 'vue';
import VueRouter from 'vue-router';
import PictureSection from '../components/PictureSection.vue';
import PictureSelfComponent from '../components/PictureSelfComponent.vue';
import LoadNewImage from '../components/LoadNewImage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: PictureSection },
  { path: '/image/:id', component: PictureSelfComponent },
  { path: '/create_new_image', component: LoadNewImage },
];
export const router = new VueRouter({
  routes,
});

export { router as default };
