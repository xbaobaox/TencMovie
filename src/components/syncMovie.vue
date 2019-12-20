<template>
  <div class="sync-movie">
    <h3 class="title">同步剧场</h3>
    <div class="sync-title-img">
      <img src="../assets/images/sync-title-img.jpg" alt="" />
      <p class="top">
        <img src="../assets/images/play.png" alt="" />
        超前点播
      </p>
      <p class="bottom">更新至31集</p>
      <p class="title-name">庆余年[更新 超前点播]</p>
      <p class="title-desc">萍萍范闲出手 长公主就此翻车？</p>
    </div>
    <div class="sync-box">
      <div class="sync-item">
        <img src="" alt="">
        <p class="name"></p>
        <p class="desc"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "syncMovie",

};
</script>
<style lang="less" scoped>
.title {
  margin: 10px 0px 3px 15px;
}
.sync-title-img {
  position: relative;
  padding: 0 15px;
  img {
    width: 100%;
  }
  .top {
    display: flex;
    font-size: 10px;
    position: absolute;
    top: 0;
    left: 4%;
    color: #fff;
    img {
      width: 10px;
    }
  }
  .bottom {
    position: absolute;
    bottom: 0;
    right: 6%;
    background-color: rgba(255, 255, 255, 0.4);
    color: #fff;
    font-size: 10px;
    padding: 1px;
  }
  .title-name{
    margin: 3px 0;
    font-size: 14px;
  }
  .title-desc{
    font-size: 12px;
    color:#999;
    margin: 5px 0;
  }
}
.sync-box{
  display: flex;
  .sync-item{
    width: 45%;
  }
}
</style>
