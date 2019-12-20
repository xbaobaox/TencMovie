<template>
  <div id="app">
    <!-- 导航栏 -->
    <indexHeaderBar />
    <!-- 定时swiper -->
    <showMovie :showMovieData="info" />
    <!-- 滚动swiper -->
    <userFavorite :favoriteData="favorite" />
    <!-- 双列展示 -->
    <recommend :recommendData="reco"/>
    <childChoice />
    <syncMovie />
  </div>
</template>
 
<script>
import indexHeaderBar from "@/components/indexHeaderBar.vue";
import showMovie from "./components/showMovie.vue";
import userFavorite from "./components/userFavorite";
import recommend from "./components/recommend";
import childChoice from "./components/childChoice";
import syncMovie from "./components/syncMovie";
import axios from "axios";
export default {
  name: "app",
  components: {
    indexHeaderBar,
    showMovie,
    userFavorite,
    recommend,
    childChoice,
    syncMovie
  },
  data() {
    return {
      info: {},
      favorite:{},
      reco:{},
    };
  },
  created() {
    axios
      .get("https://www.shuipingguo.com/2h4g/getvideo", { params: {} })
      .then(data => {
        // console.log(data)
        this.info = data.data.data[0];
        console.log(this.info);
        this.favorite=data.data.data[1]
        // console.log(this.favorite);
        this.reco=data.data.data[2]
        // console.log(this.reco)
      });
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
