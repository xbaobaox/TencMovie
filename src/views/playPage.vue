<template>
  <div class="play-page">
    <div class="head">
      <router-link to="/">
        <img src="../assets/images/TencentVip.png" alt="" class="vip-icon" />
      </router-link>
      <div class="login-box">
        <img src="../assets/images/fangdajing.png" alt="" class="search-icon" />
        <p class="login">登录</p>
        <p class="seeAll">看完整版</p>
      </div>
    </div>
    <div class="film-play">
      <div class="play-box">
        <div class="playerinterface">
          <img src="../assets/images/playPage.jpg" alt="" class="film" />
        </div>
        <div class="player-swiper">
          <swiper :options="playerOptions">
            <swiper-slide
              v-for="(item, index) of playerInfo"
              :key="index"
              class="box"
            >
              <div class="item-box">
                <img :src="item.img" alt="" id="neirong" />
                <p class="desc">{{ item.desc }}</p>
                <p class="open">打开</p>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="title">
          <p class="film-name">庆余年</p>
          <p class="film-desc">9.2分 · VIP超前点播 · 古装 剧情</p>
          <div class="title-bott">
            <div class="resolution">
              <p class="res-num">720P</p>
              <p class="useApp">APP看</p>
            </div>
            <img
              src="../assets/images/download.png"
              alt=""
              class="download-icon"
            />
          </div>
        </div>
        <div class="upgrade">
          升级最新版 解锁超前点播 1月1日超前看大结局
        </div>
        <div class="season">
          <div class="season-title">
            <p class="title-left">剧集</p>
            <p class="season-desc">
              每周一二三20:00更新，VIP抢先看6集。VIP额外尊享3元/集解锁超前点播特权，1月1日提前看大结局！/更新至41集
            </p>
          </div>
          <div class="season-swiper">
            <swiper :options="seasonOptions">
              <swiper-slide v-for="(item, index) of season" :key="index">
                <div
                  class="season-swiper-item"
                  @click="seleted(index)"
                  :class="{ selectedSeason: seasonIndex == index }"
                >
                  {{ item }}
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="pianhuazixun">
      <div v-for="(item, index) of allCom.data" :key="index">
        <userFavorite v-if="item.type == 2" :favoriteData="item" />
        <recommend v-else-if="item.type == 3" :recommendData="item" />
      </div>
    </div>
    <div class="weal">
      <p class="weal-title">会员福利</p>
      <swiper :options="wealOptions">
        <swiper-slide v-for="(item, index) of weal" :key="index">
          <div class="weal-box">
            <img :src="item.img" alt="" />
            <p class="weal-desc1">{{ item.desc1 }}</p>
            <p class="weal-desc2">{{ item.desc2 }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="privilege">
      <p class="pri-title">会员特权</p>
      <swiper :options="privilegeOptions">
        <swiper-slide v-for="(item, index) of pri" :key="index">
          <div class="pri-box">
            <i class="pri-icon" :style="item.position"></i>
            <p class="pri-desc">{{ item.desc }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="apps-recommend">
      <swiper :options="appsOptions">
        <swiper-slide v-for="(item, index) of apps" :key="index">
          <div class="apps-box">
            <img :src="item.img" alt="" class="apps-icon" />
            <p class="apps-desc">{{ item.name }}</p>
            <p class="download-btn">下载</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="discuss">
      <p class="discuss-title">评论</p>
      <p class="discuss-btn">
        <img src="../assets/images/Tencent.jpg" alt="" class="discuss-icon" />
        打开腾讯视频，参与61318条热评大讨论
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import userFavorite from "../components/userFavorite";
import recommend from "../components/recommend";
export default {
  name: "playPage",
  components: {
    userFavorite,
    recommend
  },
  data() {
    return {
      seasonIndex: 0,
      playerOptions: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          bulletClass: "my-bullet"
        }
      },
      seasonOptions: {
        freeMode: true,
        width: 65
      },
      wealOptions: {
        freeMode: true,
        width: 170
      },
      privilegeOptions: {
        freeMode: true,
        width: 100
      },
      appsOptions: {
        freeMode: true,
        width: 120
      },
      playerInfo: [
        {
          img: require("../assets/images/playpageswiper1.jpg"),
          desc: "《庆余年》范闲“喊曹操曹操到”，后悔没喊陈萍萍啊！"
        },
        {
          img: require("../assets/images/playpageswiper2.jpg"),
          desc: "《庆余年》：五竹几乎无人可挡，为何叶轻眉还遭人杀害？两个原因"
        },
        {
          img: require("../assets/images/playpageswiper3.jpg"),
          desc: "《庆余年》庆帝护犊子心重呀，把大军压到边境，任由范闲在齐国胡闹"
        },
        {
          img: require("../assets/images/playpageswiper4.jpg"),
          desc: "庆余年：庆帝展露身手，不知道算几品高手啊"
        },
        {
          img: require("../assets/images/downloadApp.jpg"),
          desc: "看全集高清完整版"
        }
      ],
      season: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      weal: [
        {
          img: require("../assets/images/fuli1.png"),
          desc1: "福利社跨年狂欢抽奖",
          desc2: "答题抽鹅厂鼠公仔"
        },
        {
          img: require("../assets/images/fuli2.jpg"),
          desc1: "VIP首月仅12元",
          desc2: "抽iPhone 11等新年好礼"
        },
        {
          img: require("../assets/images/fuli3.png"),
          desc1: "40元享VIP+QQ双会员",
          desc2: "热播好剧等你解锁"
        },
        {
          img: require("../assets/images/fuli4.png"),
          desc1: "VIP+QQ音乐联合会员",
          desc2: "品质音乐&热播好剧双享"
        }
      ],
      pri: [
        {
          position: "background-position:0 0",
          desc: "院线新片"
        },
        {
          position: "background-position:-50px 0;",
          desc: "独家美剧"
        },
        {
          position: "background-position:0 -50px",
          desc: "广告特权"
        },
        {
          position: "background-position:-50px -50px",
          desc: "1080P"
        },
        {
          position: "background-position:-100px 0",
          desc: "赠观影券"
        },
        {
          position: "background-position:-100px -50px",
          desc: "尊贵身份"
        }
      ],
      apps: [
        {
          img: require("../assets/images/app1.png"),
          name: "一零零一"
        },
        {
          img: require("../assets/images/app2.png"),
          name: "这是啥"
        },
        {
          img: require("../assets/images/app3.gif"),
          name: "完美世界"
        },
        {
          img: require("../assets/images/app4.gif"),
          name: "跑跑卡丁车"
        },
        {
          img: require("../assets/images/app5.webp"),
          name: "三生三世十里桃花"
        },
        {
          img: require("../assets/images/app6.webp"),
          name: "龙族幻想"
        }
      ]
    };
  },
  created() {
    axios
      .get("https://www.shuipingguo.com/2h4g/getvideo", { params: {} })
      .then(data => {
        console.log(data);
        this.$store.commit("TELEPLAY", data);
      });
  },
  computed: {
    allCom() {
      return this.$store.state.teleplayChange;
    }
  },
  methods: {
    seleted(index) {
      this.seasonIndex = index;
      console.log(index);
    }
  }
};
</script>
<style lang="less" scoped>
.head {
  display: flex;
  align-items: center;
  background: rgb(45, 45, 46);
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  .vip-icon {
    width: 120px;
  }
  .login-box {
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    .search-icon {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    .login {
      color: #fff;
      margin-right: 10px;
    }
    .seeAll {
      padding: 3px 14px;
      background: #ff6022;
      border-radius: 5px;
      color: #fff;
      font-size: 14px;
    }
  }
}
.film-play {
  .play-box {
    .film {
      width: 100%;
    }
    .player-swiper {
      .item-box {
        display: flex;
        align-items: center;
        padding: 0 10px;
        padding-left: 0;
        position: relative;
        img {
          width: 90px;
          border-radius: 5px;
          margin-right: 10px;
        }
        .desc {
          font-size: 14px;
          width: 45%;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          flex: 1;
        }
        .open {
          padding: 5px 15px;
          background: #ff6022;
          color: #fff;
          border-radius: 5px;
        }
      }
    }
  }
}
.box:last-child {
  .item-box {
    #neirong {
      width: 56px;
    }
  }
}
.player-swiper {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  margin-left: 10px;
}
.title {
  padding: 10px 15px;
  .film-name {
    font-size: 18px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
  }
  .film-desc {
    color: #999;
    font-size: 14px;
    margin-top: 10px;
  }
  .resolution {
    position: relative;
    border: 2px solid black;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    padding: 0 3px;
    .useApp {
      font-size: 10px;
      padding: 0 2px;
      background-color: #ff6022;
      width: 30px;
      z-index: 100;
      position: absolute;
      top: -19px;
      right: -28px;
      color: #fff;
      border-radius: 4px;
    }
    .res-num {
      position: absolute;
      padding: 0 5px;
      left: -3px;
      top: -7px;
      background-color: #fff;
      font-size: 10px;
      font-weight: bold;
    }
  }
  .title-bott {
    display: flex;
    align-items: center;
    position: relative;
    .download-icon {
      position: absolute;
      right: 0;
      width: 26px;
    }
  }
}
.upgrade {
  text-align: center;
  width: 89%;
  background-color: #e5c057;
  color: #fff;
  padding: 10px 10px;
  margin: 0 auto;
  border-radius: 5px;
  margin-top: 30px;
}
.season-title {
  display: flex;
  padding: 15px;
  align-items: center;
  .title-left {
    width: 90px;
    font-weight: bold;
    margin-right: 5px;
  }
  .season-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
  }
}
.season-swiper {
  padding: 15px;
  padding-top: 0;
  .season-swiper-item {
    height: 55px;
    width: 55px;
    border-radius: 5px;
    background-color: rgb(246, 248, 250);
    text-align: center;
    line-height: 55px;
  }
  .selectedSeason {
    color: #ff6022;
  }
}
.weal {
  padding: 15px;
  .weal-title {
    font-size: 14px;
    font-weight: bold;
  }
  .weal-box {
    img {
      width: 160px;
      border-radius: 5px;
    }
    .weal-desc1 {
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .weal-desc2 {
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.privilege {
  margin: 0;
  .pri-title {
    padding-left: 15px;
    font-size: 14px;
    font-weight: bold;
  }
  .pri-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .pri-icon {
      display: block;
      background: url(../assets/images/privilege1.png) no-repeat top left/150px
        100px;
      width: 50px;
      height: 50px;
    }
    .pri-desc {
      font-size: 14px;
    }
  }
}
.apps-recommend {
  margin-top: 10px;
  .apps-box {
    // padding-left: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .apps-icon {
      width: 60px;
    }
    .apps-desc {
      font-size: 14px;
      margin: 3px;
    }
    .download-btn {
      margin: 3px;
      padding: 3px 10px;
      color: #999;
      font-size: 12px;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
}
.discuss {
  padding-left: 15px;
  .discuss-title {
    font-weight: bold;
  }
  .discuss-btn {
    width: 90%;
    text-align: center;
    padding: 10px;
    border: 1px solid #666;
    border-radius: 5px;
    .discuss-icon {
      width: 23px;
      vertical-align: middle;
    }
  }
}
</style>
