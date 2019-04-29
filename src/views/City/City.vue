<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list
            :cities="cities"
            :hot="hotCities"
            :letter="letter"
        >
        </city-list>
        <city-alphabet
            :cities="cities"
            @change="handleLetterChange"
        >
        </city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './Components/Header.vue'
import CitySearch from './Components/Search.vue'
import CityList from './Components/List.vue'
import CityAlphabet from './Components/Alphabet.vue'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {
        return {
            cities: {},
            hotCities: [],
            letter: ''
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json')
                .then(this.getCityInfoSucc)
        },
        getCityInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                this.cities = res.data.cities
                this.hotCities = res.data.hotCities
            }
        },
        handleLetterChange (letter) {
            // 当接收到外部传来的letter时
            this.letter = letter
            // 再把letter数据转发给List组件，还是通过属性的方法
            // console.log(letter)
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/common.scss'
</style>
