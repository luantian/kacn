<template>
  <div class="dropdown">
    <el-popover
      placement="top"
      :trigger="trigger"
      @show="onShow"
      @hide="onHide"
    >
      <div slot="reference" class="main">
        <slot name="title"></slot>
        <span class="iconfont icon-cooper_bottom" :class="isShow"></span>
      </div>
      <slot name="content"></slot>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    trigger: String,
    default: 'click'
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    isShow() {
      return this.visible && "icon-rotate";
    },
  },
  methods: {
    onShow() {
      this.visible = true;
    },
    onHide() {
      this.visible = false;
    },
  },
};
</script>

<style lang="less" scoped>
.dropdown {
  cursor: pointer;
}

.main {
  display: flex;
  align-items: center;
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
