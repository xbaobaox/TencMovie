<template>
  <div class="index-header-bar-box">
    <div class="index-header-bar">
      <img src="../assets/images/0.png" alt="" class="header-bar-logo" />
      <div class="header-input">
        <input type="text" placeholder="庆余年" />
        <img
          src="../assets/images/fangdajing.png"
          alt=""
          class="header-bar-fangdajing"
        />
      </div>
    </div>
    <div class="index-bar">
      <swiper :options="swiperIndexOption">
        <swiper-slide
          v-for="(item, index) of indexBar"
          :key="index"
          class="swiperitem"
        >
          <p
            class="item-name"
            :class="{ fontcolor: x == index }"
            @click="seleted(index)"
          >
            {{ item.name }}
            <span :class="{ line: x == index }"></span>
          </p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "indexHeaderBar",

  data() {
    return {
      x: 0,
      swiperIndexOption: {
        freeMode: true,
        width: 55,
        slidesOffsetAfter: -190
      },
      indexBar: [
        {
          
          name: "精选"
        },
        {
          type: 1,
          name: "电视剧"
        },
        {
          type: "",
          name: "VIP"
        },
        {
          type: 2,
          name: "电影"
        },
        { name: "综艺" },
        { name: "动漫" },
        { name: "少儿" },
        { name: "娱乐" },
        { name: "潮音" },
        { name: "游戏" },
        { name: "纪录片" }
      ]
    };
  },
  methods: {
    seleted(index) {
      console.log(index);
      this.x = index;
      let typeNum = {};
      if (this.indexBar[this.x].type) {
        typeNum["type"] = this.indexBar[this.x].type;
        
      }
      axios
        .get("https://www.shuipingguo.com/2h4g/getvideo", {
          params: {type:typeNum.type}
        })
        .then(data => {
          console.log(data);
          this.$store.commit("TELEPLAY", data);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@Color: #ff6022;
@line: {
  display: block;
  position: absolute;
  bottom: 2px;
  left: 50%;
  width: 12px;
  margin-left: -6px;
  border-bottom: 2px solid #ff6022;
};
.index-header-bar {
  display: flex;
  align-content: center;
  padding: 10px;
  position: relative;
  .header-bar-logo {
    width: 103px;
    height: 24px;
    position: relative;
    top: 4px;
  }
  .header-input {
    position: absolute;
    right: 15px;
    input {
      border: none;
      background-color: rgb(246, 246, 247);
      width: 150px;
      height: 30px;
      padding-left: 10px;
      border-radius: 5px;
    }
    input::placeholder {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.3);
    }
    .header-bar-fangdajing {
      width: 18px;
      position: absolute;
      right: 10px;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
  }
}
.item {
  font-weight: bold;
  font-size: 18px;
}
.swiper-index {
  margin-top: 8px;
}
.swiperitem {
  font-size: 18px;
  font-weight: bold;
  padding: 0 5px;
  .item-name {
    display: inline-block;
    width: 58px;
    padding-bottom: 8px;
    text-align: center;
    margin-bottom: 0;
    .line {
      display: block;
      position: absolute;
      bottom: 2px;
      left: 50%;
      width: 12px;
      margin-left: -6px;
      border-bottom: 2px solid #ff6022;
    }
  }
}
.fontcolor {
  color: #ff6022;
}
</style>
