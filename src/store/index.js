import Vue from "vue";
import Vuex from "vuex";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(Vuex);
Vue.use(VueAwesomeSwiper /* { default global options } */);
const TELEPLAY="TELEPLAY"
export default new Vuex.Store({
  actions: {},
  state: {
    teleplayChange:{}
  },
  
  mutations: {
    //[TLELEPLAY](state//改变的数据, teleplayDate//原始数据)
    [TELEPLAY](state, teleplayData) {
      // console.log(teleplayData)
      state.teleplayChange = teleplayData.data
      console.log(state.teleplayChange)
    }
  },
  modules: {}
});
