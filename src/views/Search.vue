<template>
  <div class="search">
    <div class="header">
      <img src="../assets/images/QuanWangSou.png" alt="" />
      <div class="input-box">
        <input type="text" placeholder="庆余年" />
      </div>
      <router-link to="/" class="back">返回</router-link>
    </div>
    <div class="search-index">
      <swiper :options="searchOptions">
        <swiper-slide v-for="(item, index) of search" :key="index">
          <div class="search-index-item">
            <p @click="seleted(index)" :class="{ seleted: x == index }">
              {{ item.name }}
              <i :class="{ line: x == index }"></i>
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="search-item-box">
      <div
        class="search-item"
        v-for="(item, index) of searchData.data.data"
        :key="index"
      >
        <span
          :class="{
            top1: index == 0,
            top2: index == 1,
            top3: index == 2
          }"
          >{{ index + 1 }}</span
        >
        <p>{{ item.name }}</p>
        <img src="../assets/images/up.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {getSearch} from "../API/getData.js";
export default {
  name: "Search",
  data() {
    return {
      x: 0,
      searchOptions: {
        freeMode: "true",
        width: 58,
        spaceBetween: -10
      },
      search: [
        {
          id: 1,
          name: "热搜"
        },
        {
          id: 2,
          name: "电视剧"
        },
        {
          id: 3,
          name: "少儿"
        },
        {
          id: 4,
          name: "综艺"
        },
        {
          id: 5,
          name: "电影"
        },
        {
          id: 6,
          name: "动漫"
        },
        {
          id: 7,
          name: "明星"
        },
        {
          id: 8,
          name: "游戏"
        },
        {
          id: 9,
          name: "音乐"
        },
        {
          id: 10,
          name: "热点"
        },
        {
          id: 11,
          name: "实时"
        }
      ]
    };
  },
  computed: {
    searchData() {
      return this.$store.state.searchStoreData;
    }
  },
  beforeCreate() {
    // axios
    // .get("https://www.shuipingguo.com/getvideo/search", {
    //   params: { kw: 1 }
    // })
    getSearch({ kw: 1 }).then(data => {
      this.$store.commit("SEARCHDATA", data);
    });
  },
  methods: {
    seleted(index) {
      this.x = index;
      axios
        .get("https://www.shuipingguo.com/getvideo/search", {
          params: { kw: index + 1 }
        })
        .then(data => {
          this.$store.commit("SEARCHDATA", data);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  padding: 10px;
  .back {
    font-size: 14px;
    color: #666;
    margin-left: 10px;
  }
  img {
    width: 70px;
  }
  .input-box {
    background-image: linear-gradient(
      to right,
      rgb(92, 206, 13),
      rgb(7, 177, 244)
    );
    position: relative;
    width: 65%;
    height: 30px;
    border-radius: 15px;
    margin-left: 10px;
    input {
      width: 98.5%;
      height: 87%;
      border: none;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
      border-radius: 15px;
      box-sizing: border-box;
      padding-left: 10px;
    }
    input::placeholder {
      font-size: 14px;
    }
  }
}
.search-index-item {
  p {
    font-size: 14px;
    color: #333;
    text-align: center;
    position: relative;
    .line {
      display: block;
      position: absolute;
      height: 2px;
      background-color: #ff6022;
      width: calc(100% - 40px);
      right: 0;
      bottom: 0;
      left: 0;
      top: 30px;
      margin: auto;
    }
  }
  .seleted {
    color: #ff6022;
    font-weight: bold;
  }
}
.search-item-box {
  padding: 5px 15px;
  .search-item {
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    p {
      font-size: 14px;
      color: #666;
    }
    img {
      width: 16px;
      position: absolute;
      right: 0;
    }
    span {
      display: inline-block;
      height: 15px;
      width: 15px;
      text-align: center;
      line-height: 15px;
      font-size: 12px;
      margin-right: 5px;
      background: #e6e6e6;
      color: #878787;
    }

    .top1 {
      background: #e42818;
      color: #fff;
    }
    .top2 {
      background: #ff7100;
      color: #fff;
    }
    .top3 {
      background: #ffb900;
      color: #fff;
    }
  }
}
</style>
