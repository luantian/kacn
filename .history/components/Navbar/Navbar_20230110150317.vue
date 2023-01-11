<template>
  <div class="nav-bar">
    <Container>
      <div class="main">
        <div class="logo">
          <img src="~/assets/imgs/KACN-logo.png" alt="logo" />
        </div>
        <div class="search-wrap">
          <div>请输入充值的游戏名称</div>
          <div class="signs">
            <slot name="sign">
              <el-button icon="el-icon-search">sadfasdf</el-button>
            </slot>
          </div>
          <div class="search-button">
            <img src="~/assets/imgs/menu_search.svg" alt="search_button" />
          </div>
        </div>
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
@mainColor: #3b8cfe;

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
    display: flex;
    position: relative;
    width: 550px;
    height: 50px;
    line-height: 50px;
    border: 2px solid @mainColor;
    background: #ffffff;
    border-radius: 25px;
    color: #999;
    text-indent: 20px;
    .search-button {
      position: absolute;
      width: 70px;
      height: 50px;
      background: @mainColor;
      justify-content: center;
      display: flex;
      align-items: center;
      box-shadow: 0px 2px 10px 0px rgb(59 140 254 / 50%);
      border-radius: 25px;
      box-sizing: border-box;
      z-index: 2;
      top: 0;
      right: -3px;
      cursor: pointer;
    }
  }

  .signs {
  }
}
</style>
