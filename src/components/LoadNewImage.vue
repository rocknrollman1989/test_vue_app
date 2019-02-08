<template>
    <div class="load-new-picture">
        <img v-if="imageData.url" :src="imageData.url" alt="your Image">
        <form @submit.prevent="addImage">
            <label for="discription">Your title</label>
            <input type="text" id="discription" v-model="imageData.title" @input="checkButtonToActive">
            <label for="urlForImage">Please, enter URL</label>
            <input type="text" id="urlForImage" v-model="imageData.url" @input="checkButtonToActive">
            <input v-if="buttonIsActiveToLoad" type="submit" value="Load">
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
            },
            buttonIsActiveToLoad: false
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
        },
        checkButtonToActive(){
            if(this.imageData.title&&this.imageData.url){
               return this.buttonIsActiveToLoad = true;
            }
            return this.buttonIsActiveToLoad = false;
        }
    }
}
</script>

<style>

</style>
