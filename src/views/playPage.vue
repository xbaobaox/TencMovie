<template>
  <div class="play-page">
    <div class="head">
      <img src="../assets/images/TencentVip.png" alt="" class="vip-icon" />
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
                <img :src="item.img" alt="" id="neirong"/>
                <p class="desc">{{ item.desc }}</p>
                <p class="open">打开</p>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "playPage",
  data() {
    return {
      playerOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          bulletClass: "my-bullet"
        }
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
      ]
    };
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
    // margin-right: 20%;
  }
  .login-box {
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    .search-icon {
      width: 20px;
      height: 20px;
      // line-height: 20px;
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
.my-bullet {
  display: inline-block;
  width: 3px;
  height: 3px;
  background: #000;
  position: relative;
  margin: 0 2px;
}
.box:last-child {
  .item-box {
    #neirong {
      width: 56px;
    }
  }
}
.player-swiper{
  border-bottom: 1px solid rgba(0,0,0,.03);
  margin-left: 10px;
}
</style>
