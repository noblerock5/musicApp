<template>
    <div class="swiperTop">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in state.images" :key="image">
                <img :src="image.pic" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import axios from 'axios'
import {Banner, getBanner} from '@/request/api/home.js'
import {reactive, onMounted} from 'vue'
export default {
    setup() {
        const state = reactive({
            images:[
            'https://unpkg.com/@vant/assets/apple-1.jpeg',
            'https://unpkg.com/@vant/assets/apple-2.jpeg',
        ]});
        onMounted(async() => {
            // axios.get('http://localhost:3000/banner?type=2').then((res) => {
            //     console.log(res);
            //     state.images = res.data.banners
            //     console.log(state.images);
            // })
            let res = await getBanner()
            state.images = res.data.banners
            console.log(res);
        })
        return { state };
    },
}
</script>

<style lang="less">
.swiperTop{
    // 在上面自己添加一个id
    .van-swipe {
        width: 100%;
        height: 3rem;        
        .van-swipe-item {
            padding: 0 0.2rem;
            img {
                width: 100%;
                height: 100%;
                border-radius: 0.2rem;
            }
        }

        .van-swipe__indicators--active {
            background-color: rgb(219, 130, 130);
        }
    }
}
</style>