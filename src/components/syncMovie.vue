<template>
  <div class="sync-movie">
    <h3 class="title">同步剧场</h3>
    <div class="sync-box">
      <div
        class="sync-item"
        v-for="(item, index) of syncData.list"
        :key="index"
      >
        <i class="cloud">
          <img :src="item.img" alt="" />
          <span class=""></span>
        </i>
        <p class="name">{{ item.name }}</p>
        <p class="desc">{{item.summary}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "syncMovie",
  props: {
    syncData: Object
  },
  mounted() {
    console.log(this.syncData);
  }
};
</script>
<style lang="less" scoped>
.title {
  margin: 10px 0px 10px 15px;
}
.sync-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 0 5px;
  .sync-item {
    width: 47%;
    margin-bottom: 10px;
    .name{
      margin: 3px 0;
    }
    .desc{
      margin: 3px 0;
    }
    .desc{
      color:#999;
      font-size: 12px;
    }
    img {
      width: 100%;
      padding: 0px;
    }
    img:first-child {
      padding: 0;
    }
  }
}
.sync-item:first-child {
  padding: 0 10px;
  width: 100%;
}
</style>
