<template>
  <div class="nav-bar">
    <Container>
      <div class="main">
        <div class="logo">
          <img src="~/assets/imgs/KACN-logo.png" alt="">
        </div>
        <div></div>
        <div></div>
      </div>
    </Container>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
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
    display: flex;
  }

  .logo {

  }
</style>
