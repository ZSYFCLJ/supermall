<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

    export default {
      name: "Scroll",
      props:{
        probeType:{  //搞一个动态值，Scroll.vue是一个单独的组件，probeType有时需要监听，有时不需要
          type:Number,
          default:0
        },
        pullUpLoad:{
          type:Boolean,
          default: false
        }
      },
      data(){
          return {
            scroll:null
          }
        },
      mounted(){
          //1.创建BScroll对象
        this.scroll=new BScroll(this.$refs.wrapper,{
          click:true,   //这里必须要设置为true，因为scroll组件里包含<tab-control>组件，里面包含div组件，
          probeType:this.probeType,
          pullUpLoad:this.pullUpLoad
        })

        //2.监听滚动位置
        this.scroll.on('scroll',(position)=>{
          // console.log(position);
          this.$emit('scroll',position)  //这里把监听事件传送出去
        })

        //3.监听上拉加载更多
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
        })
      },
      methods:{
        scrollTo(x,y,time=300){
          this.scroll.scrollTo(x,y,time)  //利用封装思想包装一个方法
        },
        finishPullUp(){
          this.scroll.finishPullUp()
        }
      }
    }
</script>

<style scoped>

</style>
