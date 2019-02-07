<template>
    <router-link :to="'/image/' + dataImage.id">
        <img :src="dataImage.url"/>
        <p>{{dataImage.title}}</p>
    </router-link>
</template>

<script>

export default {
    props: {
        dataImage: Object
    }

}


</script>

<style scoped>
img{
    width: 80%;
}
p{
    position: relative;
}
p:after{
    content: ''
}
a{
    text-decoration: none;
    color: black;
}

</style>
