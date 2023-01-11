<template>
  <el-tag type="info">
    <slot></slot>
    <img class="img" v-if="imgPath" :src="imgPath" alt="标签图片" />
  </el-tag>
</template>

<script>
export default {
  name: "Tag",
  props: {
    imgPath: "",
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.img {
  position: relative;
  top: 4px;
}

::v-deep(.el-tag) {
  font-size: 14px;
}
</style>
