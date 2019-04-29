// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index.js'
import 'swiper/dist/css/swiper.css'
import '@/assets/style/reset.css'
import '@/assets/style/border.css'
import '@/assets/style/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})