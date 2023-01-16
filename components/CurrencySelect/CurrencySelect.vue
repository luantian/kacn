<template>
  <div>
    <div class="currency-select" :class="currencySelectColor" @click="onShowDialog">
      <img class="currency-img" src="~assets/imgs/demo.jpg" alt="国旗" />
      <div class="title">USA/USD</div>
      <!-- <div class="currency-icon" :class="iconDirectionClass">
        <img src="~assets/imgs/down_black.svg" alt="三角箭头" />
      </div> -->
      <span class="iconfont icon-cooper_bottom" :class="iconDirectionClass"></span>
    </div>
    <CustomDialog title="选择您的国家和货币" :visible.sync="visible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="visible = false">确 定</el-button>
      </span>
    </CustomDialog>
  </div>
</template>

<script>
export default {
  name: "CurrencySelect",
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    iconDirectionClass() {
      return this.visible && "icon-rotate";
    },
    currencySelectColor() {
      return this.visible && "border-color";
    },
  },
  methods: {
    onShowDialog() {
      this.open();
    },
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
  },
};
</script>

<style lang="less" scoped>
.currency-select {
  display: flex;
  position: relative;
  align-items: center;
  width: 137px;
  height: 40px;
  background: #f5f5f5;
  border-radius: 20px;
  border: 1px solid #dee3eb;
  transition: .3s;
  cursor: pointer;
  box-sizing: border-box;
  .title {
    color: #333;
    font-size: 14px;
  }
  &:hover {
    border: 1px solid #C0C4CC;
  }
}

.border-color {
  border: 1px solid #409EFF;
}

.currency-img {
  display: block;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  margin: 0 5px 0 10px;
}

.currency-icon {
  padding: 0 6px;
  position: absolute;
  right: 0;
  transition: 0.3s;
}

.icon-cooper_bottom {
  font-size: 12px;
  transform: scale(0.5) rotateZ(0);
  transition: 0.3s;
}

.icon-rotate {
  transform: scale(0.5) rotateZ(180deg);
}

</style>
