
<template>
    <div>
        <button v-on:click="deleteThisImage">Delete image</button>
        <img v-if="getImageFromStoreToShow" :src="getImageFromStoreToShow.url"/>
        <p v-if="getImageFromStoreToShow">{{ getImageFromStoreToShow.title }}</p>
    </div>
</template>

<script>
import { DELETE_IMAGE } from '../store/actionsConstants';

export default {
  data() {
    return {
      imageId: Number(this.$route.params.id),
    };
  },
  methods: {
    deleteThisImage() {
      this.$router.push('/');
      return this.$store.dispatch(DELETE_IMAGE, this.imageId);
    },
  },
  computed: {
    getImageFromStoreToShow() {
      return this.$store.getters.getImageFromStore(this.imageId);
    },
  },
};
</script>

<style scoped>

</style>
