<template>
    <div class="header border-bottom">
        <router-link to="/" class="back-btn">
            <i class="iconfont">&#xe697;</i>
        </router-link>
        <h2>城市选择</h2>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/common.scss';
.back-btn{
    padding-left: 0 !important;
    i{
        font-size: 54/$rem !important;
        color: #909090;
        margin-left: -8/$rem;
        font-weight: bold;
    }
}
</style>
