
<template>
    <div>
        <button v-on:click="deleteThisImage">Delete image</button>
        <img v-if="getImageFromStore" :src="getImageFromStore.url"/>
        <p v-if="getImageFromStore">{{ getImageFromStore.title }}</p>
    </div>
</template>

<script>
import { DELETE_DATA_FROM_SERVER } from '../store/actionsLib';

export default {
  data() {
    return {
      imageId: Number(this.$route.params.id),
    };
  },
  methods: {
    deleteThisImage() {
      this.$router.push('/');
      return this.$store.dispatch(DELETE_DATA_FROM_SERVER, this.imageId);
    },
  },
  computed: {
    getImageFromStore() {
      const imageInfo = this.$store.state.blogPictures.filter(
        (item) => {
          return item.id === this.imageId;
        },
      );
      return imageInfo[0];
    },
  },
};
</script>

<style scoped>

</style>
