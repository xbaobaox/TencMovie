<template>
  <div class="choice">
    <swiper :options="choiceOptions">
      <swiper-slide v-for="(item, index) of choiceData" :key="index">
        <div class="choice-item" @click="seleted(index)" :class="{seleted:x==index}">
          {{ item.name }}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "choice",
  props: {
    choiceData: Array
  },
  data() {
    return {
      x: 0,
      choiceOptions: {
        freeMode: true,
        width: 100,
        spaceBetween:-30,
        slidesOffsetAfter:-250
      }
    };
  },
  methods: {
    seleted(index) {
      this.x = index;
    }
  }
};
</script>
<style lang="less" scoped>
.choice {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.choice-item {
  font-size: 14px;
  margin: 10px;
  padding: 5px 10px;
  text-align: center;
  border-radius: 15px;
}
.seleted {
  border: 1px solid #ff6a00;
  color: #ff6a00;
}
</style>
