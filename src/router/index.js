import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Home/Index'
import Evaluation from '@/views/Evaluation/Evaluation'
import News from '@/views/News/News.vue'
import User from '@/views/User/User.vue'
import City from '@/views/City/City.vue'
import NewsDetail from '@/views/News/Detail.vue'
import EditValuation from '@/views/ArtiValuation/EditValuation.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/evaluation',
        name: 'Evaluation',
        component: Evaluation
    }, {
        path: '/news',
        name: 'News',
        component: News
    }, {
        path: '/user',
        name: 'User',
        component: User
    }, {
        path: '/city',
        name: 'City',
        component: City,
        meta: {
            keep: true
        }
    }, {
        path: '/news/detail/:id',
        name: 'NewsDetail',
        component: NewsDetail
    }, {
        path: '/EditValuation',
        name: 'EditValuation',
        component: EditValuation
    }]
})
