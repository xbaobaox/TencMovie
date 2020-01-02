<template>
  <div class="recommend">
    <h3 class="recommend-title">{{ recommendData.title }}</h3>
    <div class="reco-box">
      <div
        class="item"
        v-for="(item, index) of recommendData.list"
        :key="index"
      >
        <router-link to="/playPage">
          <img :src="item.img" alt="" />
        </router-link>
        <p class="title">{{ item.name }}</p>
        <p class="desc">{{ item.summary }}</p>
      </div>
    </div>
    <div class="refresh">
      <img src="../assets/images/refresh.png" alt="" />
      <span>换一换</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommend",
  props: {
    recommendData: Object
  },
  data() {
    return {
      reco: [
        {
          img: require("../assets/images/reco1.png"),
          title: "爱保·嫁给50岁老汉",
          desc: "女孩比儿子大一岁见面尬聊"
        },
        {
          img: require("../assets/images/reco2.jpg"),
          title: "斗罗大陆·更新",
          desc: "七对一！跨级挑战柳二龙"
        },
        {
          img: require("../assets/images/reco3.jpg"),
          title: "少年的你·会员免费",
          desc: "七对一！跨级挑战柳二龙"
        },
        {
          img: require("../assets/images/reco4.jpg"),
          title: "西行纪·热播",
          desc: "孙悟空石中魂苏醒"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.recommend-title {
  margin: 20px 0 0 20px;
}
.reco-box {
  display: flex;
  padding: 10px 10px;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    width: 45%;
    margin-bottom: 10px;
    img {
      width: 100%;
    }
    .title {
      margin: 2px 0;
      font-size: 14px;
    }
    .desc {
      margin: 2px 0;
      font-size: 12px;
      color: #999;
    }
  }
}
.refresh {
  display: flex;
  width: 95%;
  margin: 0 auto;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 15px;
  align-items: center;
  justify-content: center;
  img {
    width: 12px;
    margin-right: 5px;
  }
  span {
    color: #999;
    font-size: 12px;
  }
}
// .refresh::before {
//   display: block;
//   position: absolute;
//   top: -12px;
//   left: 0;
//   width: 100%;
//   height: 1px;
//   background: linear-gradient(180deg, #a2a2b6 0, #a2a2b6 50%, transparent 0);
//   content: "";
//   opacity: 0.2;
// }
</style>
