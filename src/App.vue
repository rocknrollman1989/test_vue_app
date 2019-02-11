<template>
  <div id="app">
    <router-view>
      <picture-section/>
    </router-view>
  </div>
</template>

<script>
import PictureSection from './components/PictureSection.vue';
import { FETCH_DATA } from './store/actionsConstants';

export default {
  name: 'app',
  components: {
    'picture-section': PictureSection,
  },
  created() {
    this.$store.dispatch(FETCH_DATA);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}
</style>
