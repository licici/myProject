<template>
    <div class="search-city-wrap" ref="wrapper">
        <div>
            <div class="area">
                <span class="title">当前城市</span>
                <div class="square-cities-wrap">
                    <div class="cities-list">
                        <div>{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <span class="title">热门城市</span>
                <div class="square-cities-wrap">
                    <div
                        class="cities-list"
                        v-for="item in hot"
                        :key="item.id"
                        @click="handleCityName(item.name)"
                    >
                        <div>{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div
                class="area"
                v-for="(item, key) in cities"
                :key="key"
                :ref="key"
            >
                <span class="title">{{key}}</span>
                <div class="city-list-wrap">
                    <div
                        class="line border-bottom"
                        v-for="innerItem of item"
                        :key="innerItem.id"
                        @click="handleCityName(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
    name: 'CityList',
    props: {
        cities: Object,
        hot: Array,
        letter: String
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        })
    },
    methods: {
        handleCityName (city) {
            // this.$store.dispatch('changeCity', city)
            // this.$store.commit('changeCity', city)
            this.changeCity(city)
            // alert(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    watch: {
        // 监听letter的变化
        letter () {
            if (this.letter) {
                // 获取到dom结构
                const element = this.$refs[this.letter][0]
                // console.log(element)
                this.scroll.scrollToElement(element)
            }
            // console.log(this.letter)
        }
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            bounce: false
        })
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/common.scss';
.search-city-wrap{
    position: absolute;
    top: 223/$rem;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    .area{
        .title{
            display: block;
            font-size: 26/$rem;
            color: #999;
            padding-left: 24/$rem;
            margin-bottom: 20/$rem;
            margin-top: 20/$rem;
        }
        .square-cities-wrap{
            display: flex;
            flex-wrap: wrap;
            padding-left: 24/$rem;
            .cities-list{
                div{
                    background-color: #fff;
                    width: 210/$rem;
                    height: 70/$rem;
                    line-height: 70/$rem;
                    text-align: center;
                    margin-bottom: 20/$rem;
                    margin-right: 30/$rem;
                    font-size: 28/$rem;
                }
            }
        }
    }
}
</style>
