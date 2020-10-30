<template>
  <swiper>
    <swiper-item v-for="item in banners"> <!-- 遍历banners   -->
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper ,SwiperItem} from  "components/common/swiper";
    export default {
      name: "homeSwiper",
      props:{
          banners:{
            type:Array,
            default(){   //默认值必须是函数
              return []
            }
          }
      },
      components:{
        Swiper,
        SwiperItem
      }
    }
</script>

<style scoped>

</style>
