<template>
  <div class="content-wrapper">
    <div class="content-inner">
      <div class="header border-bottom">
        <router-link to="/city" class="city-wrap">
          <span>{{this.city}}</span>
          <i class="iconfont">&#xe6a6;</i>
        </router-link>
        <h2>小资家</h2>
        <router-link to="" class="msg-btn">
          <i class="iconfont">&#xe69b;</i>
          <span class="red-number">12</span>
        </router-link>
      </div>
      <div class="single-banner">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide><img src="../../assets/images/banner2.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../assets/images/banner1.png" alt=""></swiper-slide>
          <swiper-slide><img src="../../assets/images/banner3.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../assets/images/banner4.jpg" alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="nav-menu-wrap">
        <router-link to="/evaluation?view=enquiryInfo">
          <img src="../../assets/images/index1.png" alt="">
          <p>询价</p>
        </router-link>
        <router-link to="/evaluation?view=evaluationInfo">
          <img src="../../assets/images/index2.png" alt="">
          <p>评估</p>
        </router-link>
        <router-link to="">
          <img src="../../assets/images/index3.png" alt="">
          <p>人工估价</p>
        </router-link>
        <router-link to="">
          <img src="../../assets/images/index4.png" alt="">
          <p>大宗交易</p>
        </router-link>
      </div>
      <div class="news-scroll-wrap border-topbottom">
        <div class="news-bg"></div>
        <div class="news-scroll border-left">
          <div class="news-item">
            <router-link class="one-line" to="">华侨哈哈哈哈哈啊哈城以45.8亿成功拿下宝安滨海！</router-link>
          </div>
        </div>
      </div>
      <div class="news-list-wrap">
        <router-link
          to=""
          class="news-list border-bottom"
          v-for="item of indexNewsList"
          :key="item.id"
        >
          <div class="news-title-wrap">
            <h3 class="two-line">{{item.newsTitle}}</h3>
            <div class="news-remark">
              <span>千千</span>
              <span>58浏览</span>
              <span>1天前</span>
            </div>
          </div>
          <div class="news-pic"><img src="../../assets/images/news-pic.png" alt=""></div>
        </router-link>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import navFooter from '@/components/NavFooter.vue'
import axios from 'axios'
export default {
    name: 'Index',
    components: {
        navFooter
    },
    computed: {
        ...mapState(['city'])
    },
    data () {
        return {
            lastCity: '',
            swiperOption: {
                speed: 300,
                autoplay: {
                    delay: 3000
                },
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            indexNewsList: [
                {
                    id: '01',
                    newsTitle: '111华侨城以45.8亿成功拿下宝安滨海文化公园核心用地8亿成功拿下宝安滨海文化公园核心用地'
                }, {
                    id: '02',
                    newsTitle: '222华侨城以45.8亿成功拿下宝安滨海文化公园核心用地8亿成功拿下宝安滨海文化公园核心用地'
                }, {
                    id: '03',
                    newsTitle: '333华侨城以45.8亿成功拿下宝安滨海文化公园'
                }
            ]
        }
    },
    methods: {
        getIndexInfo () {
            axios.get('/api/city.json?city=' + this.city)
                .then(this.getIndexInfoSucc)
        },
        getIndexInfoSucc (res) {
            res = res.data
            // console.log(res.data)
            if (res.ret && res.data) {
                // this.city = res.data.city
            }
        }
    },
    mounted () {
        console.log('mounted')
        this.lastCity = this.city
        this.getIndexInfo()
    },
    activated () {
        // 当页面重新被显示的时候会执行
        console.log('activated')
        if (this.lastCity !== this.city) {
            this.lastCity = this.city
            this.getIndexInfo()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import '@/assets/style/common.scss';
  .content-wrapper /deep/ .swiper-pagination-bullet-active{
      background: $themeColor !important;
  }
  .content-wrapper{
    .content-inner{
      padding-bottom: 128/$rem;
      .single-banner{
        width: 100%;
        height: 375/$rem;
        margin-top: 94/$rem;
        .swiper-slide{
          img{
            width: 100%;
            height: 375/$rem;
          }
        }
      }
      .nav-menu-wrap{
        display: flex;
        align-items: center;
        padding: 40/$rem 0;
        background-color: #fff;
        a{
          flex: 1;
          text-align: center;
          img{
            width: 90/$rem;
            height: 90/$rem;
          }
          p{
            font-size: 28/$rem;
            margin-top: 18/$rem;
          }
        }
      }
      .news-scroll-wrap{
        display: flex;
        height: 50/$rem;
        background-color: #fff;
        padding: 20/$rem;
        padding-right: 24/$rem;
        .news-bg{
          width: 190/$rem;
          height: 50/$rem;
          background: url(../../assets/images/news-bg.png) no-repeat left center;
          background-size: cover;
        }
        .news-scroll{
          margin-left: 18/$rem;
          padding: 9/$rem 20/$rem;
          padding-right: 0;
          .news-item{
            a{
              display: block;
              font-size: 28/$rem;
              line-height: 32/$rem;
              width: 480/$rem;
            }
          }
        }
      }
    }
  }
</style>
