<template>
    <div class="edit-valuation-wrapper">
        <div class="header border-bottom">
            <a
                class="back-btn"
                @click="$router.go(-1)"
            >
                <i class="iconfont">&#xe697;</i>
            </a>
            <h2>人工估价</h2>
        </div>
        <div class="container-wrap">
            <div class="msg-wrap tenement-msg">
                <span class="warns border-bottom">物业信息（必填）</span>
                <div>
                    <evaluation-info></evaluation-info>
                </div>
            </div>
            <div class="msg-wrap contact-msg">
                <span class="warns border-bottom">联系人信息（必填）</span>
            </div>
            <div class="upload-pic-wrap"></div>
        </div>
    </div>
</template>

<script>
import evaluationInfo from '@/views/Evaluation/Components/EvaluationInfo.vue'
export default {
    name: 'EditValuation',
    components: {
        evaluationInfo
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/common.scss';
.container-wrap{
    margin-top: 96/$rem;
    .msg-wrap{
        .warns{
            display: block;
            height: 66/$rem;
            line-height: 66/$rem;
            font-size:24/$rem;
            color:rgba(160,160,160,1);
            padding: 0 24/$rem;
        }
    }
}
</style>
