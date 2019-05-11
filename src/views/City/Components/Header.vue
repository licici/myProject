<template>
    <div class="header border-bottom">
        <a class="back-btn" @click="$router.go(-1)">
            <i class="iconfont">&#xe697;</i>
        </a>
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
</style>
