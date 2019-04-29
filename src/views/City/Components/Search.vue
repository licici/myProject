<template>
    <div class="search-city-wrap">
        <div class="search-city border-bottom">
            <input v-model="keyword" type="text" placeholder="搜索城市">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li
                    class="border-bottom"
                    v-for="item in list"
                    :key="item.id"
                    @click="handleCityName(item.name)"
                >
                    {{item.name}}
                </li>
                <li
                    class="border-bottom"
                    v-show="hasNoData"
                >
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    methods: {
        handleCityName (city) {
            // this.$store.dispatch('changeCity', city)
            // this.$store.commit('changeCity', city)
            this.changeCity(city)
            // alert(city)
            this.$router.push('/')
            this.keyword = ''
        },
        ...mapMutations(['changeCity'])
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            }, 100)
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search, {
            click: true
        })
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/common.scss';
.search-city-wrap{
    .search-city{
        position: fixed;
        top: 94/$rem;
        left: 0;
        width: 702/$rem;
        background-color: #fff;
        padding: 18/$rem 24/$rem;
        z-index: 99;
        input{
            width: 92%;
            padding: 0 4%;
            background: #F5F5F5;
            border-radius: 50/$rem;
            height: 68/$rem;
            font-size: 28/$rem;
        }
    }
    .search-content{
        position: absolute;
        top: 198/$rem;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #eee;
        overflow: hidden;
        z-index: 999;
        ul{
            li{
                line-height: 64/$rem;
                padding-left: 48/$rem;
                font-size: 26/$rem;
                background: #fff;
            }
        }
    }
}
</style>
