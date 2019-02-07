<template>
    <div>
        <img :src="dataImage.url"/>
        <p>{{dataImage.title}}</p>
    </div>
</template>

<script>

export default {
    props: {
        dataImage: Object
    }

}


</script>

<style scoped>

</style>
