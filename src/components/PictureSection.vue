<template>
  <div class="pictures">
    <router-link :to="'/create-new-image'"><div class="to-create-new-post"></div></router-link>
    <div v-for="(dataImage) of showOurDataImage" :key="dataImage.id" class="picture">
      <picture-item v-bind:data-image="dataImage"></picture-item>
    </div>
    <p v-if="fetchDataProcess">Loading images</p>
    <p v-if="checkErrorState">Please reload page, something going wrong</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PictureItem from './PictureItem.vue';

export default {
  components: {
    'picture-item': PictureItem,
  },

  computed: mapState({
    fetchDataProcess(state) {
      return state.fetchDataProcess;
    },
    checkErrorState(state) {
      return state.error;
    },
    showOurDataImage(state) {
      return state.blogPictures;
    },
  }),

};
</script>

<style scoped>
.pictures{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.picture{
  width: 25%;
}
a{
   width: 25%;
}
.to-create-new-post{
   width: 100%;
   height: 100%;
   background: grey;
}
</style>
