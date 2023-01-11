<template>
  <div class="index">
    <!-- <Category :dataSource="dataSource" isListenerScroll></Category>
    <CategoryList :dataSource="dataSource"></CategoryList> -->
    <Navbar>
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
        { title: "苹果" },
        { title: "原神", imgPath: require("~/assets/imgs/menu_hot_red.svg") },
        { title: "抖音", imgPath: require("~/assets/imgs/menu_new_green.svg") },
      ],
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

<style lang="less" scoped></style>
