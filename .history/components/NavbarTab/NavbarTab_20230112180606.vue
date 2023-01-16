<template>
  <div class="navbar-tab">
    <div class="tab" v-for="(item, index) in dataSource" :key="index">
      <Dropdown trigger="hover">
        <template #title>
          <div>{{ item.title }}</div>
        </template>
        <template #content>
          <div>弹出层</div>
        </template>
      </Dropdown>
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
};
</script>

<style lang="less" scoped>
.tab {
  display: flex;
}
</style>
