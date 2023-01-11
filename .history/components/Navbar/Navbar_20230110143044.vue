<template>
  <div class="nav-bar">
    <Container>
      <div class="main">
        <div class="logo">
          <img src="~/assets/imgs/KACN-logo.png" alt="" />
        </div>
        <div class="search-wrap">123123</div>
        <div></div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.nav-bar {
  height: 130px;
  background-color: #fff;
}
.main {
  display: flex;
  justify-content: center;
  .logo {
    margin-right: 60px;
    .img {
      width: 195px;
      height: 60px;
    }
  }

  .search-wrap {
    width: 550px;
    height: 50px;
    border: 2px solid #3b8cfe;
    background: #ffffff;
    border-radius: 25px;
  }
}
</style>
