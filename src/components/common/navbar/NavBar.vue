<template>
    <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height:44px;
    line-height: 44px;/* 一般导航栏高度都是44px*/
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100 ,0.1);
  }
  .left,.right {
    width: 60px;

  }
  .center{
    flex:1; /*  左右两边固定好宽度，中间设置为1，则刚好占满*/

  }
</style>
