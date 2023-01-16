<template>
  <div class="index">
    <!-- <Category :dataSource="dataSource" isListenerScroll></Category>
    <CategoryList :dataSource="dataSource"></CategoryList> -->
    <Navbar class="navbar">
      <template #sign>
        <Tag
          type="info"
          v-for="(sign, index) in signs"
          :key="index"
          :imgPath="sign.imgPath"
          >{{ sign.title }}
        </Tag>
      </template>
    </Navbar>
    <NavbarTab :dataSource="navbarTabs"></NavbarTab>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      dataSource: [],
      id: 123,
      signs: [
        { title: "苹果卡" },
        { title: "原神", imgPath: require("~/assets/imgs/menu_hot_red.svg") },
        { title: "抖音", imgPath: require("~/assets/imgs/menu_new_green.svg") },
      ],
      navbarTabs: [
        { title: 'KA-CN首页', type: 'normal' },
        { title: '直播平台' },
        { title: '礼品卡' },
        { title: '手游充值' },
        { title: '电商代购' },
        { title: '视频音乐' },
        { title: '游戏陪玩' },
        { title: '社交互动' },
        { title: '实用工具' },
      ]
    };
  },
  async asyncData({ $axios }) {
    // https://jsonplaceholder.typicode.com/users
    //获取评论列表
    const data = await $axios.$get("/api/Index/index");
    console.log("_________data", data);
  },

  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style lang="less" scoped>

.navbar {
  padding: 36px 0;
}
</style>
