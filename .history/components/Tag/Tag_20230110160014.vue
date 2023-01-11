<template>
  <el-tag type="info">
    <slot></slot>
    <img v-if="imgPath" :src="imgPath" alt="标签图片"/>
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

<style lang="less" scoped></style>
