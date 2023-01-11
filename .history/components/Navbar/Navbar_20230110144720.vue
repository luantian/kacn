<template>
  <div class="nav-bar">
    <Container>
      <div class="main">
        <div class="logo">
          <img src="~/assets/imgs/KACN-logo.png" alt="" />
        </div>
        <div class="search-wrap">请输入充值的游戏名称</div>
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
  align-items: center;
  .logo {
    margin-right: 60px;
    .img {
      width: 195px;
      height: 60px;
    }
  }

  .search-wrap {
    position: relative;
    width: 550px;
    height: 50px;
    line-height: 50px;
    border: 2px solid #3b8cfe;
    background: #ffffff;
    border-radius: 25px;
    color: #999;
    text-indent: 20px;
    .search-button {
      width: 70px;
      height: 50px;
      background: #3b8cfe;
      justify-content: center;
      display: flex;
      box-align: center;
      align-items: center;
      box-shadow: 0px 2px 10px 0px rgb(59 140 254 / 50%);
      border-radius: 25px;
      box-sizing: border-box;
      position: absolute;
      right: 0;
    }
  }
}
</style>
