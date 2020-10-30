<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
      name: "RecommodView",
      props:{
        recommends:{
          type:Array,
          default() {
            return [];
          }
        }
      }
    }
</script>

<style scoped>
  .recommend{
    display:flex;
    width:100%;
    text-align: center;
    font-size: 15px;
    padding: 10px 0 20px ;
    border-bottom: 10px solid #eeeeee;
  }
  .recommends-item{
    flex:1;
  }
  .recommends-item img{
    width: 65px;
    height: 65px;
    margin-top: 10px;
  }
</style>
