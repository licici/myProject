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
        <keep-alive>
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide><img src="../../assets/images/banner2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/images/banner1.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/images/banner3.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/images/banner4.jpg" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </keep-alive>
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
        <router-link to="/EditValuation">
          <img src="../../assets/images/index3.png" alt="">
          <p>人工估价</p>
        </router-link>
      </div>
      <div class="news-scroll-wrap border-topbottom">
        <div class="news-bg"></div>
        <div class="news-scroll border-left">
          <keep-alive>
            <swiper :options="swiperOptionTxt" ref="mySwiperTxt">
              <swiper-slide
                v-for="item in slideList"
                :key="item.id"
              >
                <a
                  class="one-line"
                  @click="toDetail(item)"
                >
                  {{item.newsTitle}}
                </a>
              </swiper-slide>
            </swiper>
          </keep-alive>
        </div>
      </div>
      <estate-charts></estate-charts>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import navFooter from '@/components/NavFooter.vue'
import estateCharts from './Components/estateCharts.vue'
import axios from 'axios'
export default {
    name: 'Index',
    components: {
        navFooter,
        estateCharts
    },
    computed: {
        ...mapState(['city']),
        slideList () {
            return this.$store.state.newsList
        }
        // mySwiperTxt () {
        //     return this.$refs.mySwiperTxt.swiper
        // }
    },
    data () {
        return {
            lastCity: '',
            swiperOption: {
                speed: 300,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 3000
                },
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            swiperOptionTxt: {
                speed: 300,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 3000
                },
                loop: true,
                direction: 'vertical'
            }
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
        },
        toDetail (item) {
            this.$router.push(`/news/detail/${item.id}`)
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
        // setInterval(() => {
        //     this.swiper.slideNext()
        // }, 3000)
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
            width: 100/$rem;
            height: 100/$rem;
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
          .swiper-container{
            height: 32/$rem !important;
            .swiper-slide{
                display: block;
                font-size: 28/$rem;
                line-height: 32/$rem;
                // height: 32/$rem !important;
                width: 480/$rem;
            }
          }
        }
      }
    }
  }
</style>
