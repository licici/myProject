<template>
  <div class="footer-wrap">
    <div class="footer border-top">
      <div class="home-item">
        <a
          @click="toPage('/')"
          :class="$route.path=='/'?'on':''"
        >
          <i class="iconfont">&#xe696;</i>
          <p>首页</p>
        </a>
      </div>
      <div class="home-item">
        <a
          @click="toPage('/evaluation')"
          :class="$route.path=='/evaluation'?'on':''"
        >
          <i class="iconfont">&#xe74e;</i>
          <p>评估</p>
        </a>
      </div>
      <div class="home-item">
        <a
          @click="toPage('/news')"
          :class="$route.path=='/news'?'on':''"
        >
          <i class="iconfont">&#xe6c5;</i>
          <p>资讯</p>
        </a>
      </div>
      <div class="home-item">
        <a
          @click="toPage('/user')"
          :class="$route.path=='/user'?'on':''"
        >
          <i class="iconfont">&#xe6b8;</i>
          <p>我的</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'navFooter',
    methods: {
        toPage (path) {
            this.$router.push(path)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    @import '@/assets/style/common.scss';
    .footer-wrap {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 99;
      background: #fff;
      width: 100%;
      height: 98/$rem;
      .footer{
        display: flex;
        height: 98/$rem;
        .home-item{
          flex: 1;
          text-align: center;
          a{
            display: block;
            width: 100%;
            height: 86/$rem;
            padding-top: 12/$rem;
            color: $themeTextColor;
            &.on{
              color: $themeColor;
            }
            i{
              font-size: 40/$rem;
            }
            p{
              font-size: 22/$rem;
              margin-top: 4/$rem;
            }
          }
        }
      }
    }
</style>
