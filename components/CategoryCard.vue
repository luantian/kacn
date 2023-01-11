<template>
  <div class="category-card">
    <img class="card-img" :src="data.catImgSrc" alt="" />
    <div class="card-title">{{ data.cat_name }}</div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.category-card {
  width: 150px;
  border: 1px solid #dee3eb;
  border-radius: 10px;
  text-align: center;
  padding: 30px 0;
  cursor: pointer;
  transition: .3s;
  background-color: #fff;
  &:hover {
    color: #3B8CFE;
    box-shadow: 0 2px 20px 0 rgb(0 0 0 / 10%);
    transform: scale(1.1);
  }
}

.card-img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 10px;
}
</style>
