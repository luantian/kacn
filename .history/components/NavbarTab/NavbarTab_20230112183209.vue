<template>
  <div class="navbar-tab">
    <div class="tab" v-for="(item, index) in dataSource" :key="index">
      <Dropdown trigger="hover" v-if="item.type === 'dropdown' ">
        <template #title>
          <div>{{ item.title }}</div>
        </template>
        <template #content>
          <div>弹出层</div>
        </template>
      </Dropdown>
      <div class="" v-else>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarTab",
  props: {
    dataSource: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  render(createElement)  {
    return createElement(
      'h' + this.level,   // tag name 标签名称
      this.$slots.default // 子组件中的阵列
    )
  },
};
</script>

<style lang="less" scoped>
.navbar-tab {
  display: flex;
}
</style>
