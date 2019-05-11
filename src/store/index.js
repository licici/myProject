import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
console.log(state.newsList)
export default new Vuex.Store({
    state: state,
    // actions: {
    //     changeCity (ctx, city) {
    //         ctx.commit('changeCity', city)
    //         console.log(city)
    //     }
    // },
    mutations: mutations
})
