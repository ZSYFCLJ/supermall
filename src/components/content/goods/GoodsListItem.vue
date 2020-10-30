<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "GoodsListItem",
      props:{
          goodsItem:{
            type:Object,
            default(){
              return{}
            }
          }
      }
    }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;/*子绝父相，下面goods-info是相对这个父元素来定位*/
    width: 48%;/*这里要加个宽度，因为goods里面设置了flex布局，没有宽度就会塞一行*/
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;/*ellipsis 省略号*/
    white-space: nowrap;/*nowrap 单元格内不换行*/
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;/* 第一个0表示背景颜色 background-color
                                                                        第二个0/14px ：0是background-position属性
                                                                                      14px是background-size属性
                                                                        第三个14px 和前面14opx更同构成background-size，可省略*/
  }
</style>
