<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'Container',
  data() {
    return {

    }
  }
}

</script>

<style lang="less" scoped>
  .nav-bar {
    height: 130px;
    background-color: #fff;
  }
  .main {

  }
</style>
