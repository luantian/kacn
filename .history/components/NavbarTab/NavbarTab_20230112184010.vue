<template>
  <Container>
    <div class="tabs">
      <div class="tab" v-for="(item, index) in dataSource" :key="index">
        <Dropdown trigger="hover" v-if="item.type === 'dropdown'">
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
  </Container>
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
.tabs {
  display: flex;
  .tab {
    margin-right: 40px;
    border-top: 2px solid red;
    padding: 10px 0;
    .active {
      border-top: 2px solid blue;
    }
  }
}
</style>
