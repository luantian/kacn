<template>
  <div class="nav-bar">
    <Container>
      <div class="main">
        <div class="logo">
          <img src="~/assets/imgs/KACN-logo.png" alt="logo" />
        </div>
        <NavbarSearch></NavbarSearch>
        <div class="currency">
          <CurrencySelect />
        </div>
        <div class="select-language">
          <CustomSelect v-model="languageType" :options="languages" placeholder="语言">
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
              <img class="user-photo" src="~assets/imgs/user_photo.png" alt="user_photo">
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
