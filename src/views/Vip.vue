<template>
  <div class="vip">
    <div class="search-bar">
      <div class="search-box">
        <input type="text" placeholder="庆余年" class="search-input" />
        <router-link to="./search">
          <img
            src="../assets/images/fangdajing.png"
            alt="search"
            class="search-icon"
          />
        </router-link>
      </div>
    </div>
    <div class="filter">
      <choice :choiceData="kind" />
      <choice :choiceData="hot" />
      <choice :choiceData="country" />
      <choice :choiceData="year" />
    </div>
    <div class="vip-flexbox">
      <vipItem />
    </div>
    <div class="fixed-bar">
      <a href="" class="refresh"></a>
      <a href="" class="home"></a>
    </div>
  </div>
</template>
<script>
import choice from "../components/choice";
import vipItem from "../components/vipItem";
export default {
  name: "vip",
  components: {
    choice,
    vipItem
  },
  data() {
    return {
      kind: [
        {
          id: 1,
          name: "电视剧"
        },
        {
          id: 2,
          name: "电影"
        },
        {
          id: 3,
          name: "动漫"
        },
        {
          id: 4,
          name: "综艺"
        },
        {
          id: 5,
          name: "少儿"
        },
        {
          id: 6,
          name: "纪录片"
        },
        {
          id: 7,
          name: "音乐"
        },
        {
          id: 8,
          name: "知识"
        }
      ],
      hot: [
        {
          id: 1,
          name: "最新"
        },
        {
          id: 2,
          name: "最热"
        },
        {
          id: 3,
          name: "好评"
        }
      ],
      country: [
        {
          id: 1,
          name: "全部"
        },
        {
          id: 2,
          name: "内地"
        },
        {
          id: 3,
          name: "美国"
        },
        {
          id: 4,
          name: "泰国"
        },
        {
          id: 5,
          name: "中国香港"
        },
        {
          id: 6,
          name: "中国台湾"
        },
        {
          id: 7,
          name: "韩国"
        },
        {
          id: 8,
          name: "日本"
        },
        {
          id: 9,
          name: "腾讯出品"
        },
        {
          id: 10,
          name: "其他"
        }
      ],
      theme: [
        {
          id: 1,
          name: "全部"
        },
        {
          id: 2,
          name: "偶像爱情"
        },
        {
          id: 3,
          name: "古装历史"
        },
        {
          id: 4,
          name: "玄幻史诗"
        },
        {
          id: 5,
          name: "都市生活"
        },
        {
          id: 6,
          name: "罪案谍战"
        },
        {
          id: 7,
          name: "历险科幻"
        },
        {
          id: 8,
          name: "军旅抗战"
        },
        {
          id: 9,
          name: "喜剧"
        },
        {
          id: 10,
          name: "武侠江湖"
        },
        {
          id: 11,
          name: "青春校园"
        },
        {
          id: 12,
          name: "时代传奇"
        },
        {
          id: 13,
          name: "体育电竞"
        },
        {
          id: 14,
          name: "真人动漫"
        }
      ],
      year: [
        {
          id: 1,
          name: "全部"
        },
        {
          id: 2,
          name: "2019"
        },
        {
          id: 3,
          name: "2018"
        },
        {
          id: 4,
          name: "2017"
        },
        {
          id: 5,
          name: "2016"
        },
        {
          id: 6,
          name: "2015"
        },
        {
          id: 7,
          name: "2014"
        },
        {
          id: 8,
          name: "2013"
        },
        {
          id: 9,
          name: "2012"
        },
        {
          id: 10,
          name: "2011"
        },
        {
          id: 11,
          name: "2011"
        },
        {
          id: 12,
          name: "更早"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.vip {
  // position: relative;
  .fixed-bar {
    height: 44px;
    width: 100%;
    background: #363636;
    position: fixed;
    bottom: 0;

    .refresh {
      float: left;
      width: 25px;
      height: 25px;
      margin-top: 10px;
      margin-left: 20px;
      background: url(../assets/images/g_menubar_btn.png) no-repeat;
      background-position: -50px 0;
      background-size: 100px 26px;
      background-size: 100px 26px;
    }
    .home {
      float: right;
      width: 25px;
      height: 25px;
      margin-top: 10px;
      margin-right: 20px;
      background: url(../assets/images/g_menubar_btn.png) -75px 0 no-repeat;
      background-size: 100px 26px;
      background-size: 100px 26px;
    }
  }
}

.search-bar {
  padding: 10px 0;
  background-color: rgb(239, 239, 239);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .search-box {
    width: 90%;
    position: relative;
    .search-input {
      background-color: #fff;
      border: none;
      border-radius: 5px;
      width: 90%;
      margin: 0 auto;
      padding: 6px 0px;
      padding-left: 40px;
      color: #999;
      font-size: 15px;
    }
    .search-icon {
      position: absolute;
      width: 24px;
      left: 5px;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
  }
}
</style>
