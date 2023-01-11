<template>
  <div class="category">
    <Affix>
      <div class="main">
        <div class="title">{{ title }}</div>
        <div class="content">
          <a
            v-for="(item, index) in dataSource"
            class="custom-button"
            :class="{ active: index === active }"
            :key="index"
            :idx="index"
            :href="'#a' + item.cat_id"
            >{{ item.cat_name }}</a
          >
        </div>
      </div>
    </Affix>
  </div>
</template>

<script>
import { throttle } from "lodash";

let oDomTitles = null;

export default {
  name: "Category",
  props: {
    title: {
      type: String,
      default: "全部分类",
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
    isListenerScroll: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: 0,
    };
  },
  mounted() {
    this.isListenerScroll &&
      window.addEventListener("scroll", this.throttleFn());
  },
  beforeDestroy() {
    this.isListenerScroll &&
      window.removeEventListener("scroll", this.throttleFn());
  },
  methods: {
    handleScroll() {
      // console.log("handleScroll");
      if (!oDomTitles) {
        oDomTitles = document.querySelectorAll(".__screen-title");
      }
      // console.log("oDomTitles", oDomTitles);
      const results = [];
      oDomTitles.forEach((item, index) => {
        if (this.elementIsVisibleInViewport(item)) {
          results.push(index);
        }
      });
      if (
        this.getScrollTop() + this.getWindowHeight() ==
        this.getScrollHeight()
      ) {
        this.active = results[results.length - 1];
      } else {
        this.active = results[0];
      }
    },
    throttleFn() {
      return throttle(this.handleScroll, 100);
    },
    elementIsVisibleInViewport(el, partiallyVisible = false) {
      // 第一个参数是element  第二个参数是 是否部分可见也算可见
      // 设置为false 即有一部份不可见即不可见
      // 设置为true 即部分可见即算是可见
      const { top, left, bottom, right } = el.getBoundingClientRect();
      const { innerHeight, innerWidth } = window;
      return partiallyVisible
        ? ((top > 0 && top < innerHeight) ||
            (bottom > 0 && bottom < innerHeight)) &&
            ((left > 0 && left < innerWidth) ||
              (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    },
    getScrollTop() {
      let scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;

      if (document.body) {
        bodyScrollTop = document.body.scrollTop;
      }

      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
      }

      scrollTop =
        bodyScrollTop - documentScrollTop > 0
          ? bodyScrollTop
          : documentScrollTop;

      return scrollTop;
    },

    getScrollHeight() {
      var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0;

      if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
      }

      if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
      }

      scrollHeight =
        bodyScrollHeight - documentScrollHeight > 0
          ? bodyScrollHeight
          : documentScrollHeight;

      return scrollHeight;
    },
    getWindowHeight() {
      let windowHeight = 0;
      if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
      } else {
        windowHeight = document.body.clientHeight;
      }
      return windowHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@h: 50px;
@fontColor: #333;
@white: #fff;

.main {
  display: flex;
  color: @fontColor;
  font-size: 16px;
  border: 1px solid #dee3eb;
  background: @white;
  .title {
    height: @h;
    line-height: @h;
    margin: 6px;
    min-width: 100px;
    font-weight: bold;
    text-align: center;
    padding: 20px 0;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    padding: 20px 10px;
  }
}

.custom-button {
  display: block;
  width: 120px;
  height: @h;
  line-height: @h;
  color: @fontColor;
  margin: 6px;
  text-align: center;
  border-radius: 4px;
  background-color: #f5f5f5;
  cursor: pointer;
  text-decoration: none;
  &.active,
  &:hover {
    color: @white;
    background-color: #3b8cfe;
  }
}

::v-deep(.el-link--inner) {
  color: @fontColor;
}

::v-deep(.el-link.el-link--default) {
  color: @white;
}

::v-deep(.el-button) {
  margin-left: 10px;
  margin-top: 10px;
  width: 100px;
  padding-left: 0;
  padding-right: 0;
  text-align: center;
}
</style>
