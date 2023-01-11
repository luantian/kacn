<template>
  <div class="index">
    <!-- <Category :dataSource="dataSource" isListenerScroll></Category>
    <CategoryList :dataSource="dataSource"></CategoryList> -->
    <Navbar>
      <template #sign>
        <el-tag type="info">苹果</el-tag>
        <el-tag type="info">原神 <img src="~/assets/imgs/menu_hot_red.svg" alt=""></el-tag>
        <el-tag type="info">抖音</el-tag>
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
