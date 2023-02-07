<template>
    <div class="musicList">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="musicContent">
            <van-swipe :loop="false" :width="150" :show-indicators="false" class="my-swipe">
                <van-swipe-item v-for="item in musicList" :key="item">
                    <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
                        <img :src="item.picUrl" alt="">
                        <span class="playCount">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                            {{ changeConut(item.playCount) }}
                        </span>
                        <span class="name">{{ item.name }}</span>
                    </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
import {getMusicList} from '@/request/api/home.js'
import { reactive, onMounted } from "vue";
export default {
    data() {
        return {
            musicList: []
        }
    },
    methods: {
        async getGeDan() {
            let res = await getMusicList()
            console.log(res);
            this.musicList = res.data.result
        },
        changeConut:function(num) {
            if(num >= 100000000) {
                return (num / 100000000).toFixed(1) + "亿"
            }else if(num / 10000) {
                return (num / 10000).toFixed(1) + "万"
            }
        }
    },
    mounted() {
        this.getGeDan()
    }

    // 下面的部分在视频p13中找不到问题回头来看
    // setup() {
    //     const state = reactive({
    //         musicList: [],
    //     });
    //     function changeCount(num) {
    //         if (num >= 100000000) {
    //             return (num / 100000000).toFixed(1) + "亿";
    //         } else if (num >= 10000) {
    //             return (num / 10000).toFixed(1) + "万";
    //         }
    //     }
    //     onMounted(async () => {
    //         let res = await getMusicList();
    //         console.log(res);
    //         state.musicList = res.data.result;
    //     });
    //     return { state, changeCount };
    // },
}
</script>

<style lang="less" scoped>
.musicList{
        width: 100%;
        height: 5rem;
        padding: .2rem;
        .musicTop{
            width: 100%;
            height: .6rem;
            display: flex;
            justify-content: space-between;
            margin-bottom: .2rem;
            .title{
                font-size: .4rem;
                font-weight: 900;
            }
            .more{
                border: 0.02rem solid #ccc;
                text-align: center;
                line-height: .6rem;
                padding: 0 0.2rem;
                border-radius: .4rem;
            }
        }
        .musicContent{
            width: 100%;
            height: 3.6rem;
            // .my-swipe{
            //     height: 100%;
            //     img{
            //         width: 100%;
            //         height: 3rem;
            //     }
            // }
            .van-swipe-item {
                //   margin-right: 0.14rem;
                padding-right: 0.2rem;
                position: relative;
                height: 3.8rem;
            
                img {
                    width: 100%;
                    height: 2.4rem;
                    border-radius: 0.2rem;
                    //   position: absolute;
                }
            
                .playCount {
                    position: absolute;
                    z-index: 100;
                    right: 0.3rem;
                    color: white;
                    margin-top: 0.06rem;

                    .icon {
                        width: 0.3rem;
                        height: 0.3rem;
                    }
                }
            
                .name {
                    //   position: absolute;
                    bottom: 0px;
                }
            }
        }
    }
</style>