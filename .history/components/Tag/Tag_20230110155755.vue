<template>
  <div class="tag">
    <el-tag type="info"><slot></slot> <img :src="imgPath" alt="标签图片"></el-tag>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    imgPath: ''
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>

</style>
