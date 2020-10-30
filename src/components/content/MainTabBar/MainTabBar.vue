<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg"  ></img>
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" ></img>
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" ></img>
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" ></img>
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from 'components/common/TabBar/TabBar'//这里因为在webpack.base.config.js文夹里面改了配置，用components代替src/components 修改了路径配置
  import  TabBarItem from 'components/common/TabBar/TabBarItem'
    export default {
        name: "MainTabBar",
        components: {
          TabBar,
          TabBarItem
      }
    }
</script>

<style scoped>

</style>
