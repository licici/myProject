// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index.js'
// 导入vue-echarts插件
import ECharts from 'vue-echarts/components/ECharts'
// 导入echarts的图形类型
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title.js'
import 'swiper/dist/css/swiper.css'
import '@/assets/style/reset.css'
import '@/assets/style/border.css'
import '@/assets/style/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.component('v-chart', ECharts)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
