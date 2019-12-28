<template>
  <div class="vip-item">
    <div class="item-box" v-for="(item, index) of vipItem.data" :key="index">
      <img :src="item.imgv" alt="" />
      <span class="name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "vipItem",
  computed: {
    vipItem() {
      return this.$store.state.teleplayChange;
    }
  }
};
</script>

<style lang="less" scoped>
.vip-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  .item-box {
    width: 30%;
    text-align: center;
    margin-bottom: 10px;
    img {
      width: 100%;
    }
    .name {
      margin: 0px 0;
      font-size: 12px;
      color: #333;
    }
  }
}
</style>
