<template>
    <div class="game-list">
        <div class="game-list-item" v-for="(item,index) in gamelist" :key="index">
            <div class="item-icon">
                <img :src="item.icon"/>
            </div>
            <div class="item-right">
                <div class="right-text">
                    <span>{{item.gamename}}</span>
                    <span><span class="text-num">{{item.online_users}}W</span>人在玩</span>
                    <span>{{item.summary}}</span>
                </div>
                <div class="right-btn">
                    <span>开始玩</span>
                </div>
                <div class="line"></div>
            </div>
        </div>
    </div>
 </template>
 <script setup>
 const props=defineProps({
    gamelist:{
        type:Array,
        default:()=>[]
    }
})
 </script>
 <style lang="scss" scoped>
   .game-list{
      width: 750px;
      .game-list-item{
        display: flex;
        width: 100%;
        height: 240px;
        // background-color: aquamarine;
        margin: 20px 0;
        .item-icon{
            width: 220px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 180px;
                height: 180px;
                border-radius: 33px;
            }
        }
        .item-right{
            flex: 1;
            display: flex;
            align-items: center;
            position: relative;
            // box-shadow:0 1px px -1px red;
            // -webkit-box-shadow:0 1px 1px -1px rgab(0,0,0,0.8);
            .right-text{
                flex: 1;
                display: flex;
                flex-direction: column;
                span:nth-child(1){
                    // margin: 10px 0;
                    // white-space: nowrap;
                }
                span:nth-child(2){
                    margin: 15px 0;
                    font-size: 32px;
                    color: rgb(120, 120, 120);
                    // color: #FFB001;
                }
                span:nth-child(3){
                    font-size: 28px;
                    color: rgb(120, 120, 120);
                    line-height: 36px;
                    overflow:hidden;  //超出文本隐藏
                    text-overflow:ellipsis;  ///超出部分省略号显示
                    display:-webkit-box;  //弹性盒模型
                    -webkit-box-orient:vertical;  //上下垂直
                    -webkit-line-clamp:2;
                }
                .text-num{
                    color: #FFB001;
                }
            }
            .right-btn{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 180px;
                span{   
                    padding: 15px 20px;
                    border-radius: 30px;
                    color: rgb(250, 250, 250);
                    font-size: 32px;
                    font-weight: 600;
                    background-color: #5BD95E;
                }
            }
            .line{
                width: 100%;
                height: 1px;
                transform: scaleY(0.3);
                position: absolute;
                left: 0;
                bottom: 0;
                background-color: rgba(100,100,100,0.6);
            }
            
        }
      }
   }
//    @media screen and (-webkit-min-device-pixel-ratio:2){
//         .item-right{
//             border-bottom: 0.1px solid rgba(100,100,100,.8);
//         }    
//     }
//     @media screen and (-webkit-min-device-pixel-ratio:3){
//         .item-right{
//             border-bottom: 0.1px solid rgba(100,100,100,.8);
//         }    
//     }
 </style>