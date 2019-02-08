<template>
    <div class="load-new-picture">
        <img :src="imageData.url" alt="your Image">
        <form @submit.prevent="addImage">
            <label for="discription">Your title</label>
            <input type="text" id="discription" v-model="imageData.title">
            <label for="urlForImage">Please, enter URL</label>
            <input type="text" id="urlForImage" v-model="imageData.url">
            <input type="submit" value="Load">
        </form>
    </div>
</template>

<script>
import { LOAD_NEW_IMAGE } from '../store/actionsLib';
import { mapState } from 'vuex';

export default {
    data: function(){
        return{
            imageData: {
                title:'',
                url:'',
            }
        }
    },
    methods: {
        addImage(){
            
            let imageData = {
                url: this.imageData.url,
                title: this.imageData.title,
                id: this.$store.state.counterToCreateID
                
            }
            this.$store.dispatch(LOAD_NEW_IMAGE, imageData);
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>
