import Vue from 'vue';
import VueRouter from 'vue-router';
import PictureSection from '../components/PictureSection.vue';
import PictureDetails from '../components/PictureDetails.vue';
import LoadNewImage from '../components/LoadNewImage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: PictureSection },
  { path: '/image/:id', component: PictureDetails },
  { path: '/create-new-image', component: LoadNewImage },
];
export const router = new VueRouter({
  routes,
});

export { router as default };
