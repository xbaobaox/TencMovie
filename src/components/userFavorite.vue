<template>
  <div class="userfavorite">
    <h3 class="title">猜你会追</h3>
    <swiper :options="userFavoriteOptions" >
      <swiper-slide v-for="(item,index) of favoriteData.list" :key="index">
        <div class="favorite-box">
          <img :src="item.img" alt="" class="favorite-img" />
          <p class="favorite-name">{{item.name}}</p>
          <p class="favorite-desc" title="">{{item.summary}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "userFavorite",
  props:{
    favoriteData:'',
  },
  mounted(){
    // console.log(this.favoriteData);
  },
  data() {
    return {
      userFavoriteOptions: {
        width: 160,
        freeMode: true,
        //右边框和边距的偏移量 px单位
        slidesOffsetAfter:-180
      },
      favoriteItem: [
        {
          img: require("../assets/images/favorite-0.jpg"),
          title: "追婚记",
          desc: "霍思燕“赖上”王阳明"
        },
        {
          img: require("../assets/images/favorite-1.png"),
          title: "枪口",
          desc: ""
        },
        {
          img: require("../assets/images/favorite-2.jpg"),
          title: "独步天下",
          desc: "唐艺昕林峯共谱旷世奇恋"
        },
        {
          img: require("../assets/images/favorite-3.jpg"),
          title: "极速救援",
          desc: "飞行医疗救援队与死神赛跑"
        },
        {
          img: require("../assets/images/favorite-4.jpg"),
          title: "河山",
          desc: "秦海璐王新军热血抗战"
        },
        {
          img: require("../assets/images/favorite-5.jpg"),
          title: "知否知否应是绿肥红瘦",
          desc: "赵丽颖冯绍峰琴瑟和鸣"
        },
        {
          img: require("../assets/images/favorite-6.jpg"),
          title: "欢乐颂2",
          desc: "五美感情生活再掀波澜"
        },
        {
          img: require("../assets/images/favorite-7.jpg"),
          title: "龙珠传奇",
          desc: "杨紫秦俊杰演绎清宫小情歌"
        },
        {
          img: require("../assets/images/favorite-8.jpg"),
          title: "白狐的人生",
          desc: "高冷白狐恋上抠门少女"
        },
        {
          img: require("../assets/images/favorite-9.jpg"),
          title: "锦绣未央",
          desc: "唐嫣挑战史上最高能女主"
        },
        {
          img: require("../assets/images/favorite-10.jpg"),
          title: "如懿传",
          desc: "周迅霍建华演绎清宫风云"
        },
        {
          img: require("../assets/images/favorite-11.jpg"),
          title: "将夜",
          desc: "少年逆天而行热血复仇"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.title {
  margin: 20px 0 10px 20px;
}
.favorite-box {
  padding: 0 25px;
  .favorite-img {
    width: 135%;
  }
  .favorite-name {
    margin: 3px 0;
    font-size: 14px;
    width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .favorite-desc {
    width: 130%;
    margin: 3px 0;
    font-size: 10px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
