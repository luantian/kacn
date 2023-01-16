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
            <slot name="sign"></slot>
          </div>
          <div class="search-button">
            <img src="~/assets/imgs/menu_search.svg" alt="search_button" />
          </div>
        </div>
        <div class="currency">
          <CurrencySelect />
        </div>
        <div class="select-language">
          <CustomSelect v-model="languageType" :options="languages" placeholder="">
            <el-option
              v-for="item in languages"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </CustomSelect>
        </div>
        <div class="new-count">
          <el-badge :value="12">
            <span class="iconfont icon-menu_wish"></span>
          </el-badge>
        </div>
        <div class="user-info">
          <Dropdown>
            <template #title>
              <img v-if="isLogin" class="user-photo" src="~assets/imgs/user_photo.png" alt="user_photo">
              <span v-else class="iconfont icon-menu_user"></span>
            </template>
            <template #content>
              <div>
                弹出层
              </div>
            </template>
          </Dropdown>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import { languages } from "@/utils/consts";
export default {
  name: "Navbar",
  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      languages,
      languageType: "language1",
    };
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
    img {
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
    padding-left: 20px;
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
    padding-left: 80px;
  }

  .currency {
    margin: 0 10px 0 20px;
  }

  .select-language {
    width: 92px;
  }

  .new-count {
    margin: 0 24px;
  }

  .icon-menu_wish {
    font-size: 36px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }

  .user-photo {
    width: 40px;
    height: 40px;
  }
}
</style>
