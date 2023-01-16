<template>
  <el-select v-bind="$attrs" v-on="$listeners">
    <template v-for="(index, name) in $slots" :slot="name">
      <slot :name="name" />
    </template>
  </el-select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>

@fontColor: #333;

::v-deep(.el-input__inner) {
  padding: 0 10px;
  border-radius: 30px;
  color: @fontColor;
  border: 1px solid #dee3eb;
  font-size: 14px;
  background: #f5f5f5;
}
::v-deep(.el-input__suffix) {
  right: 2px;
}
::v-deep(.el-select__caret.el-input__icon.el-icon-arrow-up) {
  color: @fontColor;
  font-weight: 900;
}

// ::v-deep(.el-icon-arrow-up::before) {
//   content: '&#xe667;';
// }
</style>
