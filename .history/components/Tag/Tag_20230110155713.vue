<template>
  <div class="tag">
    <el-tag type="info"><slot></slot> <img src="~/assets/imgs/menu_hot_red.svg" alt=""></el-tag>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    path: ''
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>

</style>
