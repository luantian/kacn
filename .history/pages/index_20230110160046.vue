<template>
  <div class="index">
    <!-- <Category :dataSource="dataSource" isListenerScroll></Category>
    <CategoryList :dataSource="dataSource"></CategoryList> -->
    <Navbar>
      <template #sign>
        <Tag type="info">苹果</Tag>
        <Tag type="info" :imgPath="imgPath">原神</Tag>
        <Tag type="info">抖音</Tag>
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
      imgPath: require("~/assets/imgs/menu_hot_red.svg")
    };
  },
  async asyncData({ $axios }) {
    // https://jsonplaceholder.typicode.com/users
    //获取评论列表
    const data = await $axios.$get('/api/Index/index')
    console.log('_________data', data)
  },

  created() {
    console.log("created");
  },
  mounted() {
    console.log('mounted')
  },
};
</script>
