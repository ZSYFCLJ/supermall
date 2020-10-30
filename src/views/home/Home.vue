<template>
   <div id="home" class="wrapper">
     <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <scroll class="content"
             ref="scroll"
             :probe-type="3"
             @scroll="contentScroll"
             :pull-up-load="true"
             @pullingUp="loadMore">
       <homeSwiper :banners="banners"/> <!--  动态获取banners  -->
       <recommend-view :recommends="recommends"/>
       <feature-view/>
       <tab-control class="tab-control"
                    :titles="['流行','新款','精选']"
                    @tabClick="tabClick"/>
       <goods-list :goods="goods[currentType].list"/>
     </scroll>
      <back-top @click.native="backClick" v-show="isShowBackTop"/><!-- 原生组件不能监听点击，需要加上修饰符 -->
   </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";


  import { getHomeMultidata,getHomeGoods} from "network/home";


  export default {
    name: "home",
    components: {
      NavBar,
      TabControl,
      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell':{page: 0, list: []},
        },
        currentType:'pop',
        isShowBackTop:false
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata()
      //2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
     },

    methods:{
      /**
       * 事件监听相关的方法
       **/
      tabClick(index){
            switch (index) {
                case 0:
                  this.currentType='pop'
                    break
              case 1:
                this.currentType='new'
                    break
              case 2:
                this.currentType='sell'
            }
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0) //通过this.$refs.scroll拿到scroll组件并可以调用里面方法,scrollTo回到坐标位置方法
      },
      contentScroll(position){
        //console.log(position);
        this.isShowBackTop =(-position.y) > 1000
      },
      loadMore(){
        // console.log('上拉加载更多')
        this.getHomeGoods(this.currentType)

        this.$refs.scroll.scroll.refresh()  /*better-scroll 的bug，由于content内容高度固定，异步图片加载高度不重新计算，所以滚动区域加载不上去，要重新刷新*/
      },

      /**
       * 网络请求相关的方法
      **/
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // this.result = res;
          // console.log(res);
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page =this.goods[type].page+1
        getHomeGoods(type,page).then(res => {
          //console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    }
    }

</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    height: 100vh; /*视口高度为100%  */
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left:0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    /*position: sticky;!*sticky 粘性   兼容性不强，慎用慎用慎用*!*/
    top:44px;
    z-index:9;
  }
  /*.content{   !*定位为方法*!*/
  /*  overflow: hidden;*/
  /*  position: absolute;*/
  /*  top:44px;*/
  /*  bottom:49px;*/
  /*  left:0;*/
  /*  right: 0;*/
  /*}*/

  .content{    /* 计算方法*/
    height:calc(100% - 44px);
    overflow: hidden;
    margin-top: 44px;
  }

</style>
