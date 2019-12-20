<template>
  <div class="sync-movie">
    <h3 class="title">{{syncData.title}}</h3>
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
  margin: 10px 0px 10px 20px;
}
.sync-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
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
    }
  }
}
.sync-item:first-child {
  width: 100%;
}
</style>
