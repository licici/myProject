<template>
    <div>
        <div class="user-wrapper">
            <div class="user-header">
                <div class="user-account">
                    <div class="left-pic">
                        <img src="../../assets/images/reset-pic.png" alt="">
                    </div>
                    <div class="account-wrap">
                        <h4>管理账号</h4>
                        <p>李千千-15124548754</p>
                    </div>
                    <router-link to="" class="right-msg">
                        <span to="">账户信息</span>
                        <i class="iconfont">&#xe6a7;</i>
                    </router-link>
                </div>
            </div>
            <div class="user-operation-wrap border-top">
                <router-link to="" class="line border-bottom arrow">
                    <div class="left-title"><i class="iconfont">&#xe839;</i>我的钱包</div>
                    <div class="right-info">余额：30估豆<i class="iconfont">&#xe6a7;</i></div>
                </router-link>
                <router-link to="" class="line border-bottom arrow">
                    <div class="left-title"><i class="iconfont">&#xe74a;</i>我的订单</div>
                    <div class="right-info"><i class="iconfont">&#xe6a7;</i></div>
                </router-link>
                <router-link to="" class="line border-bottom arrow">
                    <div class="left-title"><i class="iconfont">&#xe74e;</i>评估记录</div>
                    <div class="right-info">5<i class="iconfont">&#xe6a7;</i></div>
                </router-link>
                <router-link to="" class="line border-bottom arrow">
                    <div class="left-title"><i class="iconfont">&#xe6c5;</i>我的资讯</div>
                    <div class="right-info"><i class="iconfont">&#xe6a7;</i></div>
                </router-link>
                <router-link to="" class="line border-bottom arrow">
                    <div class="left-title"><i class="iconfont">&#xe6ab;</i>开票信息</div>
                    <div class="right-info"><i class="iconfont">&#xe6a7;</i></div>
                </router-link>
            </div>
            <div class="user-operation-wrap border-top">
                <router-link to="" class="line border-bottom arrow">
                    <div class="left-title"><i class="iconfont">&#xe6c7;</i>帮助与服务</div>
                    <div class="right-info"><i class="iconfont">&#xe6a7;</i></div>
                </router-link>
                <router-link to="" class="line border-bottom arrow">
                    <div class="left-title"><i class="iconfont">&#xe69b;</i>消息中心</div>
                    <div class="right-info"><i class="iconfont">&#xe6a7;</i></div>
                </router-link>
                <router-link to="" class="line border-bottom arrow">
                    <div class="left-title"><i class="iconfont">&#xe87a;</i>邀请好友</div>
                    <div class="right-info"><i class="iconfont">&#xe6a7;</i></div>
                </router-link>
                <router-link to="" class="line border-bottom arrow">
                    <div class="left-title"><i class="iconfont">&#xe87b;</i>管理子帐号</div>
                    <div class="right-info"><i class="iconfont">&#xe6a7;</i></div>
                </router-link>
                <router-link to="" class="line border-bottom arrow">
                    <div class="left-title"><i class="iconfont">&#xe6ae;</i>设置</div>
                    <div class="right-info"><i class="iconfont">&#xe6a7;</i></div>
                </router-link>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import navFooter from '@/components/NavFooter.vue'
export default {
    name: 'User',
    components: {
        navFooter
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/common.scss';
.user-wrapper{
    padding-bottom: 128/$rem;
    .user-header{
        width: 100%;
        height: 372/$rem;
        background: url('../../assets/images/user-bg.png') no-repeat;
        background-size: cover;
        .user-account{
            position: relative;
            display: flex;
            align-items: center;
            height: 372/$rem;
            padding-left: 24/$rem;
            .left-pic{
                img{
                    width: 120/$rem;
                    height: 120/$rem;
                }
            }
            .account-wrap{
                margin-left: 28/$rem;
                color: #ffffff;
                h4{
                    font-size: 40/$rem;
                    font-weight: 500;
                    line-height: 56/$rem;
                }
                p{
                    font-size: 28/$rem;
                    margin-top: 8/$rem;
                }
            }
            .right-msg{
                position: absolute;
                right: -28/$rem;
                color: #ffffff;
                height: 56/$rem;
                line-height: 56/$rem;
                padding: 0 28/$rem;
                background-color: rgba(0,0,0,0.2);
                border-radius: 50/$rem;
                span{
                    color: #ffffff;
                    font-size: 24/$rem;
                }
                i{
                    font-size: 30/$rem;
                }
            }
        }
    }
    .user-operation-wrap{
        margin-top: 24/$rem;
    }
}
</style>
