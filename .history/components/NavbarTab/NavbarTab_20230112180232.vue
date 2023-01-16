<template>
  <div class="navbar-tab">
    <div class="tab" v-for="(item, index) in dataSource" :key="index">
      <Dropdown>
        <template #title>
          {{ item.title }}
          <span class="iconfont icon-menu_user"></span>
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
