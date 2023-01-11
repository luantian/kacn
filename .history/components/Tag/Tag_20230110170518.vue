<template>
  <el-tag class="tag" type="info">
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

.tag {
  margin: 0 4px;
  font-size: 14px;
  border-radius: 100px;
  border-color: transparent;
  cursor: pointer;
}
.img {
  position: relative;
  top: 4px;
}



</style>
