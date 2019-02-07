
<template>
    <div>
        <button v-on:click="deleteThisImage">Delete image</button>
        <img v-if="getImageFromStore" :src="getImageFromStore.url"/>
        <p v-if="getImageFromStore">{{ getImageFromStore.title }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    data: function(){
        return{
            imageId: this.$route.params.id,
        }
    },
    methods: {
        deleteThisImage: function(){
            this.$router.push('/');
            return this.$store.dispatch('deleteDataFromServer', this.imageId);
        }
    },
    computed: {
        getImageFromStore: function(){

            let imageInfo = this.$store.state.blogPictures.filter((item) => {
                return item.id == this.imageId 
            })
            return imageInfo[0]
        }
    }
}
</script>

<style scoped>

</style>
