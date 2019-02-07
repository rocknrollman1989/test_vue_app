<template>
    <div class="load-new-picture">
        <img :src="pictureUrl" alt="your Image">
        <form>
            <label for="discription">Your title</label>
            <input type="text" id="discription" v-model="title">
            <label for="urlForImage">Please, enter URL</label>
            <input type="text" id="urlForImage" v-model="imageData.pictureUrl">
            <button @click="addImage">Add</button>
        </form>
    </div>
</template>

<script>

export default {
    date: function(){
        return{
            imageData: {
                pictureUrl:'',
                title:'',
            }
        }
    },
    methods: {
        addImage(){
            console.log(this.imageData)
        }
    }
}
</script>

<style>

</style>
