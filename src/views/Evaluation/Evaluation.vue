<template>
    <div class="evaluation-wrapper">
        <div class="header border-bottom">
            <h2>评估</h2>
        </div>
        <div class="evaluation-wrap">
            <ul class="evaluation-tab-wrap border-bottom">
                <li
                    @click="changeTab('enquiryInfo')"
                    :class="currentView=='enquiryInfo'?'on':''"
                >
                    询价
                </li>
                <li
                    @click="changeTab('evaluationInfo')"
                    :class="currentView=='evaluationInfo'?'on':''"
                >
                    评估
                </li>
            </ul>
            <div class="evaluation-info-wrap">
                <keep-alive>
                    <component :is="currentView"></component>
                </keep-alive>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import navFooter from '@/components/NavFooter.vue'
import enquiryInfo from './Components/EnquiryInfo.vue'
import evaluationInfo from './Components/EvaluationInfo.vue'
export default {
    name: 'Evaluation',
    components: {
        navFooter,
        enquiryInfo,
        evaluationInfo
    },
    data () {
        return {
            // currentView: this.$route.query.view || 'enquiryInfo'
        }
    },
    computed: {
        currentView () {
            return this.$route.query.view || 'enquiryInfo'
        }
    },
    methods: {
        changeTab (name) {
            this.$router.replace(`/evaluation?view=${name}`)
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/common.scss';
.evaluation-wrapper{
    padding-bottom: 128/$rem;
    .evaluation-wrap{
        margin-top: 94/$rem;
        .evaluation-tab-wrap{
            display: flex;
            height: 70/$rem;
            background-color: #fff;
            li{
                flex: 1;
                line-height: 70/$rem;
                text-align: center;
                font-size: 30/$rem;
            }
            .on{
                color: $themeColor;
                border-bottom: 4/$rem solid $themeColor;
            }
        }
    }
}

</style>
