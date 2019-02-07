<template>
  <div class="pictures">
    <div v-for="(key, item) of showOurDataImage" :key="item" class="picture">
      {{key}}
    </div>
    <p v-if="fetchDataProcess">Loading images</p>
    <p v-if="checkErrorState">Please reload page, something going wrong</p>
  </div>
</template>

<script>

export default {
  
  data: function() {
    return{
      
    }
  },
  computed:{
    fetchDataProcess(){
      return this.$store.state.fetchDataProcess;
    },
    checkErrorState(){
      return this.$store.state.error;
    },
    showOurDataImage(){
      return this.$store.state.blogPictures
    }
  }
  
}
</script>

<style scoped>


</style>
