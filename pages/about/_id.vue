<template>
  <div class="about">
    关于我们
  </div>
</template>

<script>
export default {
  name: 'About',
  validate({ params }) {
    // return <校验结果>
    // 若结果为false则会跳转到404页面
    return /^\d+$/.test(params.id)
  },
  data() {
    return {

    }
  },
  mounted() {
    console.log('id', this.$route.params.id);
  }
}

</script>

<style lang="less" scoped>

</style>
