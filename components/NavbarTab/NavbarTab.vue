<template>
  <Container>
    <div>123</div>
    <div class="tabs">
      <div class="tab" v-for="(item, index) in dataSource" :key="index">
        <div v-if="item.type === 'normal'">{{ item.title }}</div>
        <Dropdown trigger="hover" v-else>
          <template #title>
            <div>{{ item.title }}</div>
          </template>
          <template #content>
            <div>弹出层</div>
          </template>
        </Dropdown>
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
    cursor: pointer;
  }
}
</style>
