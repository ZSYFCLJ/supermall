<template>
  <div class="tab-bar-item" @click="itemClick" >
    <div v-if="!isActive" ><slot name="item-icon" ></slot></div>
    <div v-else ><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
    export default {
      name: "TabBarItem",
      props:{
        path:String,
        activeColor:{
          type:String,
          default:'red'
        }
      },
      data(){
          return {
            //isActive:true
          }
      },
      computed:{
        isActive(){
          //home=>item1(home)==true
          //home=>item1(cart)==false
          //home=>item1(category)==false
          //home=>item1(profile)==false
          return this.$route.path==this.path //这里需要判断，$route为最活跃路由，也就是点击的路由，看看他是否等于四个item里面的路由
         // return this.$route.path.indexOf(this.path) !==-1//老师的方法，用了indexOf函数
        },
        activeStyle(){ //动态修改字体颜色属性
            return this.isActive?{color:this.activeColor}:{} //三元表达式，从上面props里拿到activeColor，
                  //如果this.isActive为真，则传入color:this.activeColor，
                  //如果this.isActive为假，则传入{}空值
        }
      },
      methods:{
        itemClick(){
          //console.log('itemClick')
          this.$router.push(this.path)
        }

      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;/*tab-bar常用开发高度为49px*/
  }
  .tab-bar-item img{
    margin-top: 3px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
  /*.active{*/
  /*  color: red;*/
  /*}*/
</style>
