<template>
    <div>
        <div class="news-wrapper">
            <div class="header">
                <h2>资讯</h2>
                <router-link to="" class="search-news">
                    <i class="iconfont">&#xe6ac;</i>
                </router-link>
            </div>
            <div class="news-list-wrap border-top">
                <div
                    class="news-list border-bottom"
                    v-for="item in list"
                    :key="item.id"
                    @click="toDetail(item)"
                >
                    <div class="news-title-wrap">
                        <h3 class="two-line">{{item.newsTitle}}</h3>
                        <div class="news-remark">
                            <span>2018-3-10 10:00</span>
                            <span>58浏览</span>
                        </div>
                    </div>
                    <div class="news-pic"><img src="../../assets/images/news-pic.png" alt=""></div>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
        <div class="back-top">
            <i class="iconfont">&#xe6a5;</i>
        </div>
    </div>
</template>

<script>
import navFooter from '@/components/NavFooter.vue'
export default {
    name: 'News',
    components: {
        navFooter
    },
    data () {
        return {}
    },
    computed: {
        list () {
            return this.$store.state.newsList
        }
    },
    methods: {
        toDetail (item) {
            this.$router.push(`/news/detail/${item.id}`)
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/common.scss';
.news-wrapper{
    padding-bottom: 128/$rem;
    .news-list-wrap{
        margin-top: 94/$rem;
        .news-item{
            background-color: #fff;
        }
    }
}
</style>
