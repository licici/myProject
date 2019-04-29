<template>
    <div class="enquiry-info-wrap">
        <div class="enquiry-info">
            <div class="line border-bottom arrow">
                <div class="left-title">城市<i>*</i></div>
                <router-link to="/city" tag="div" class="right-info">深圳<i class="iconfont">&#xe6a7;</i></router-link>
            </div>
            <div class="line border-bottom">
                <div class="left-title">小区<i>*</i></div>
                <div class="right-info">
                    <input type="text" placeholder="请输入小区名称">
                </div>
            </div>
            <div class="line border-bottom">
                <div class="left-title">楼栋<i>*</i></div>
                <div class="right-info">
                    <input type="text" placeholder="请输入楼栋编号">
                </div>
            </div>
            <div class="line border-bottom">
                <div class="left-title">房号<i>*</i></div>
                <div class="right-info">
                    <input type="text" placeholder="请输入楼栋编号">
                </div>
            </div>
            <div class="line border-bottom">
                <div class="left-title">建筑面积㎡<i>*</i></div>
                <div class="right-info">
                    <input type="text" placeholder="请输入建筑面积">
                </div>
            </div>
        </div>
        <div class="single-btn">
            <span class="btn-txt">立即询价</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'enquiryInfo'
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/common.scss';
.enquiry-info-wrap{
    .enquiry-info{
        background-color: #fff;
    }
}
</style>
