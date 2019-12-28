<template>
  <div>
    <!-- 导航栏 -->
    <indexHeaderBar />
    <div class="all-com" v-for="(item, index) of allCom.data" :key="index">
      <showMovie v-if="item.type == 1" :showMovieData="item" />
      <userFavorite v-else-if="item.type == 2" :favoriteData="item" />
      <recommend v-else-if="item.type == 3" :recommendData="item" />
      <syncMovie v-else-if="item.type == 4" :syncData="item" />
    </div>
    <!-- 定时swiper -->
    <showMovie :showMovieData="info" />
    <!-- 滚动swiper -->
    <userFavorite :favoriteData="favorite" />
    <!-- 双列展示 -->
    <!-- <recommend :recommendData="reco" /> -->
    <!-- 奇数展示 -->
    <syncMovie :syncData="sync" />
    <syncMovie :syncData="variety" />
  </div>
</template>

<script>
import indexHeaderBar from "../components/indexHeaderBar.vue";
import showMovie from "../components/showMovie.vue";
import userFavorite from "../components/userFavorite";
import recommend from "../components/recommend";
// import childChoice from "./components/childChoice";
import syncMovie from "../components/syncMovie";
import axios from "axios";
export default {
  name: "home",
  components: {
    indexHeaderBar,
    showMovie,
    userFavorite,
    recommend,
    syncMovie
  },
  data() {
    return {
      // allCom:{},
      info: {},
      favorite: {},
      reco: {},
      sync: {},
      variety: {}
    };
  },
  computed: {
    // allCom: {
    //   // console.log(this.$store)
    //   // return this.$store.state.teleplayChange
    //   set(e) {
       
    //   },
    //   get() {
    //     return this.$store.state.teleplayChange
    //   }
    // }
    allCom(){
      return this.$store.state.teleplayChange
    }
  },
  created() {
    axios
      .get("https://www.shuipingguo.com/2h4g/getvideo", { params: {} })
      .then(data => {
        // console.log(data);
        // this.allCom = data.data;
        this.$store.commit("TELEPLAY", data);
      });
  }
};
</script>

<style>

</style>
