
<template>
    <div>
        <img :src="getImageFromStore.url"/>
        <p>{{ getImageFromStore.tittle }}</p>
        <p>FDFDFDsdsdsdsF</p>
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
