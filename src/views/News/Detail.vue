<template>
    <div class="detail-wrapper">
        <div class="header border-bottom">
                <a
                    class="back-btn"
                    @click="$router.go(-1)"
                >
                    <i class="iconfont">&#xe697;</i>
                </a>
                <h2>资讯详情</h2>
                <!-- <router-link to="" class="search-news">
                    <i class="iconfont">&#xe6ac;</i>
                </router-link> -->
            </div>
        <div class="detail-wrap" ref="detail">
            <div class="detail-content">
                <h3 class="title">{{getDetailTitle}}</h3>
                <div class="news-remark">
                    <span>千千</span>
                    <span>58浏览</span>
                    <span>1天前</span>
                </div>
                <div class="pic-insert">
                    <img src="../../assets/images/news-pic.png" alt="">
                </div>
                <div class="detail-txt">
                    <p>4月7日，宝安中心区滨海文化公园（一期）建设用地的土地使用权和中央海滨文化公园的设计建设运营权以公</p>
                    <p>此 次土地公开招标吸引了深圳华侨城股份有限公司、深圳市   源房地产开发有限公司、万科企业股份有限公司、深圳招商房地产有限公司4家</p>
                    <p>经综合评审，宝中滨海文化公园（一期）建设用地的土地使用权和中央海滨文化公园的设计建设运营权最终由深圳华侨城股份有限公司以最高分91.46分中标，以45.8亿竞得此地，折合楼面地价27,366元/㎡。4月7日，宝安中心区滨海文化公园（一期）建设用地的土地使用权和</p>
                    <p>4月7日，宝安中心区滨海文化公园（一期）建设用地的土地使用权和中央海滨文化公园的设计建设运营权以公</p>
                    <p>此 次土地公开招标吸引了深圳华侨城股份有限公司、深圳市   源房地产开发有限公司、万科企业股份有限公司、深圳招商房地产有限公司4家</p>
                    <p>经综合评审，宝中滨海文化公园（一期）建设用地的土地使用权和中央海滨文化公园的设计建设运营权最终由深圳华侨城股份有限公司以最高分91.46分中标，以45.8亿竞得此地，折合楼面地价27,366元/㎡。4月7日，宝安中心区滨海文化公园（一期）建设用地的土地使用权和</p>
                    <p>4月7日，宝安中心区滨海文化公园（一期）建设用地的土地使用权和中央海滨文化公园的设计建设运营权以公</p>
                    <p>此 次土地公开招标吸引了深圳华侨城股份有限公司、深圳市   源房地产开发有限公司、万科企业股份有限公司、深圳招商房地产有限公司4家</p>
                    <p>经综合评审，宝中滨海文化公园（一期）建设用地的土地使用权和中央海滨文化公园的设计建设运营权最终由深圳华侨城股份有限公司以最高分91.46分中标，以45.8亿竞得此地，折合楼面地价27,366元/㎡。4月7日，宝安中心区滨海文化公园（一期）建设用地的土地使用权和</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'NewsDetail',
    data () {
        return {}
    },
    computed: {
        getDetailTitle () {
            var list = this.$store.state.newsList
            for (var i = 0; i < list.length; i++) {
                // console.log(list[i].id)
                if (this.$route.params.id === list[i].id) {
                    return list[i].newsTitle
                }
            }
        }
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.detail)
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/common.scss';
.detail-wrapper{
    height: auto;
    .detail-wrap{
        background-color: #fff;
        position: absolute;
        top: 96/$rem;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        z-index: 10;
        .detail-content{
            padding: 30/$rem 24/$rem 60/$rem 24/$rem;
            .title{
                font-size:36/$rem;
                font-weight:500;
                line-height:44/$rem;
            }
            .news-remark{
                margin-top: 45/$rem;
                span{
                    font-size:22/$rem;
                    color:#b3b3b3;
                    margin-right: 28/$rem;
                }
            }
            .pic-insert{
                margin-top: 25/$rem;
                margin-bottom: 50/$rem;
                img{
                    width: 100%;
                    max-height: 360/$rem;
                }
            }
            .detail-txt{
                p{
                    font-size:30/$rem;
                    line-height:48/$rem;
                    margin-bottom: 30/$rem;
                    text-indent: 50/$rem;
                }
            }
        }
    }
}
</style>
