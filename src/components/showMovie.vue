<template>
  <div class="showMovie">
    <div class="swiper-img">
      <swiper :options="swiperContOption" >
        <swiper-slide v-for="(item,index) of showMovieData.list" :key='index' >
          <div class="show-box">
            <img :src="item.img" alt="" class="show-img" />
            <p class="update">更新至{{ item.number }}集</p>
            <p class="title">{{ item.summary }}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "showMovie",
  props:{
    showMovieData:''
  },
  data() {
    return {
      swiperContOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        }
      },
      showImg: [
        {
          title: "【庆余年】神仙爱情！2019搞到这对cp无悔了",
          img: require("../assets/images/1.jpg"),
          update: "更新至31集"
        },
        {
          title: "【斗罗大陆·更新啦】我们“切磋”，情意绵绵❤",
          img: require("../assets/images/2.jpg"),
          update: ""
        },
        {
          title: "【西行纪·更新】孙悟空石中魂苏醒",
          img: require("../assets/images/3.jpg"),
          update: "更新至31集"
        },
        {
          title: "【演员·终极盛典】张雨绮妩媚重现《妖猫传》",
          img: require("../assets/images/0.jpg"),
          update: "2019-12-14"
        },
        {
          title: "【第二次也很美】王子文张鲁一“怼甜冤家”上线",
          img: require("../assets/images/4.jpg"),
          update: "更新至52集"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.show-box {
  padding: 0 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: -webkit-linear-gradient(90deg, #f2f4f5, #fff 59%);
  .update {
    position: absolute;
    right: 5%;
    bottom: 17%;
    color: #fff;
    font-size: 8px;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 1px 1px;
  }
  .show-img {
    width: 97%;
  }
  .title {
    font-size: 14px;
    align-self: flex-start;
  }
}
.swiper-pagination {
  position: absolute;
  left: 87%;
  bottom: 16px;
  width: 13%;
  font-size: 12px;
  background-color: rgb(244, 246, 247);
}
</style>
