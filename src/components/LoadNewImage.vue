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
                title: this.imageData.title
            }
            this.$store.dispatch('loadANewImage', imageData);
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>
