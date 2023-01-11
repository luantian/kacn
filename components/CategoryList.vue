<template>
  <div class="category-list">
    <div
      class="category-list-item"
      v-for="(item, index) in dataSource"
      :key="index"
    >
      <div class="__screen-title label" :id="'a' + item.cat_id">{{ item.cat_name }}</div>
      <div class="children">
        <CategoryCard v-for="(sub, index) in item.sub" :data="sub" :key="index"></CategoryCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
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
.label {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  padding: 16px 0;
}

.children {
  display: flex;
  flex-wrap: wrap;
  > div {
    margin: 16px 14px;
  }
}
</style>
