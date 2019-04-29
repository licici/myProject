<template>
    <div class="alphabet-list">
        <div
            class="item"
            v-for="item in letters"
            :key="item"
            :ref="item"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >
            {{item}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    computed: {
        // 定义letters方法循环出所有字母，并全部push到数组里
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
                // console.log(letters)
            }
            return letters
        }
    },
    data () {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated () {
        // 优化后
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleLetterClick (e) {
            // 表示每次点击alphabet组件的字母，都会向外触发change事件，并携带当前点击的字母（由city来监听这个change事件）
            this.$emit('change', e.target.innerText)
            // console.log(e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    // 获取字母A距离顶部的位置
                    // const startY = this.$refs['A'][0].offsetTop
                    // console出来的是A字母的整个信息结构，取0是a的dom结构
                    // console.log(startY)
                    // 获取手指滑动屏幕时的手指距离顶部的实时位置
                    // touches是触屏滑动时的所有信息
                    const touchY = e.touches[0].clientY - 117
                    // console.log(touchY)
                    // 差值除以字母高度
                    const index = Math.floor((touchY - this.startY) / 15)
                    console.log(index)
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change', this.letters[index])
                    }
                }, 16)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/common.scss';
.alphabet-list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 223/$rem;
    right: 6/$rem;
    bottom: 0;
    z-index: 99;
    width: 28/$rem;
    .item{
        line-height: 30/$rem;
        text-align: center;
    }
}
</style>
