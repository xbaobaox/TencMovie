<template>
  <div class="childchoice">
    <h3 class="title">少儿精选剧场</h3>
    <div class="swiper">
      <swiper :options="childSwiperOptions">
        <swiper-slide v-for="(item, index) of choice" :key="index">
          <div class="swiper-box">
            <img :src="item.img" alt="" />
            <p class="name">{{ item.name }}</p>
            <p class="desc">{{ item.desc }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "childChoice",
  data() {
    return {
      childSwiperOptions: {
        freeMode:true,
        width: 160,
        slidesOffsetAfter:-180
      },
      choice: [
        {
          img: require("../assets/images/child-1.jpg"),
          name: "超级飞侠 第七季",
          desc: "全国小朋友都在看"
        },
        {
          img: require("../assets/images/child-2.jpg"),
          name: "会说话的汤姆猫家族",
          desc: "搞笑汤姆猫和他的朋友们"
        },
        {
          img: require("../assets/images/child-3.jpg"),
          name: "迷你特工队X",
          desc: "海外知名的冒险动画"
        },
        {
          img: require("../assets/images/child-4.jpg"),
          name: "汪汪队立大功",
          desc: "遇事不退缩动脑巧解决"
        },
        {
          img: require("../assets/images/child-5.jpg"),
          name: "萌鸡小队",
          desc: "跟小萌鸡学和别人相处"
        },
        {
          img: require("../assets/images/child-6.jpg"),
          name: "贝肯熊第4季",
          desc: "倒霉熊爆笑回归"
        },
        {
          img: require("../assets/images/child-7.png"),
          name: "猪猪侠之竞速小英雄2",
          desc: "星际赛车竞速之旅"
        },
        {
          img: require("../assets/images/child-8.jpg"),
          name: "神奇的朋友_咖宝车神",
          desc: "咖宝车神炫酷变形！"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.title {
  padding: 0 15px 5px;
}
.swiper {
  margin-left: 15px;
  .swiper-box {
    margin: 5px 5px;
    img {
      width: 100%;
    }
    .name{
      margin: 3px 0;
      font-size: 16px;
    }
    .desc{
      font-size: 12px;
      color:#999;
      margin: 3px 0;
    }
  }
}
</style>
