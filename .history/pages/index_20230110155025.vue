<template>
  <div class="index">
    <!-- <Category :dataSource="dataSource" isListenerScroll></Category>
    <CategoryList :dataSource="dataSource"></CategoryList> -->
    <Navbar>
      <template #sign>
        <el-tag type="info">123</el-tag>
        <el-tag>123 <img src="~/assets/imgs/menu_search.png" alt=""></el-tag>
        <el-tag>123</el-tag>
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
