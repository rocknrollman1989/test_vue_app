<template>
    <div class="load-new-picture">
        <img v-if="imageData.url" :src="imageData.url" alt="your Image">
        <form @submit.prevent="addImage">
            <label for="discription">Your title</label>
            <input type="text" id="discription" class="input-text"
            v-model="imageData.title" @input="checkButtonToActive">
            <label for="urlForImage">Please, enter URL</label>
            <input type="text" id="urlForImage" class="input-text"
            v-model="imageData.url" @input="checkButtonToActive">
            <input v-if="buttonIsActiveToLoad" type="submit" value="Load" class="btn-to-load">
        </form>
    </div>
</template>

<script>
import { LOAD_NEW_IMAGE } from '../store/actionsConstants';

export default {
  data() {
    return {
      imageData: {
        title: '',
        url: '',
      },
      buttonIsActiveToLoad: false,
    };
  },
  methods: {
    addImage() {
      const { url, title } = this.imageData;
      const { counterToCreateID } = this.$store.state;
      const imageData = {
        url,
        title,
        id: counterToCreateID,
      };
      this.$store.dispatch(LOAD_NEW_IMAGE, imageData);
      this.$router.push('/');
    },
    checkButtonToActive() {
      if (this.imageData.title && this.imageData.url) {
        this.buttonIsActiveToLoad = true;
        return;
      }
      this.buttonIsActiveToLoad = false;
    },
  },
};
</script>

<style>
</style>
