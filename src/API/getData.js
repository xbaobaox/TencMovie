import axios from "axios";
const getList = {
  home: "https://www.shuipingguo.com/2h4g",
  search: "https://www.shuipingguo.com/getvideo/search",
  vip: "https://www.shuipingguo.com/2h4g/getvideo/list_vip"
};
export function getHome(params) {
  return axios.get(getList.home, { params: params });
}
export function getSearch(params) {
  return axios.get(getList.search, { params: params });
}
export function getVip(params) {
  return axios.get(getList.vip, { params: params });
}
