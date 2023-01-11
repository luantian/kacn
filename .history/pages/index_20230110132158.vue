<template>
  <div class="index">
    <Category :dataSource="dataSource" isListenerScroll></Category>
    <CategoryList :dataSource="dataSource"></CategoryList>

    <NuxtLink :to="aboutUrl">关于</NuxtLink>
    <div>
      <!-- {{ msg }} -->
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      dataSource: [],
      id: 123,
    };
  },
  computed: {
    aboutUrl() {
      return `/about/${this.id}`
    }
  },
  async asyncData({ $axios }) {
    // https://jsonplaceholder.typicode.com/users
    //获取评论列表
    const data = await $axios.$get('/api/Index/index')
    console.log('_________data', data)
  },

  created() {
    console.log("created");
  },
  mounted() {
    console.log('mounted')
    setTimeout(() => {
      this.dataSource = [
        {
          cat_id: 222,
          cat_name: "iTunes1",
          parent_id: 0,
          bannerImgSrc:
            "https://duzqtec7dckun.cloudfront.net/data/catBanner/20191204yohjmi.jpg",
          catImgSrc:
            "https://duzqtec7dckun.cloudfront.net/data/catImg/20210203gipjfq.png",
          level: 1,
          sub: [
            {
              cat_id: 262,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 263,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 264,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 265,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
          ],
        },
        {
          cat_id: 322,
          cat_name: "iTunes2",
          parent_id: 0,
          bannerImgSrc:
            "https://duzqtec7dckun.cloudfront.net/data/catBanner/20191204yohjmi.jpg",
          catImgSrc:
            "https://duzqtec7dckun.cloudfront.net/data/catImg/20210203gipjfq.png",
          level: 1,
          sub: [
            {
              cat_id: 323,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 324,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 325,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 326,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
          ],
        },
        {
          cat_id: 3227,
          cat_name: "iTunes3",
          parent_id: 0,
          bannerImgSrc:
            "https://duzqtec7dckun.cloudfront.net/data/catBanner/20191204yohjmi.jpg",
          catImgSrc:
            "https://duzqtec7dckun.cloudfront.net/data/catImg/20210203gipjfq.png",
          level: 1,
          sub: [
            {
              cat_id: 32288,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 32289,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 32210,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 32211,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
          ],
        },
        {
          cat_id: 32212,
          cat_name: "iTunes4",
          parent_id: 0,
          bannerImgSrc:
            "https://duzqtec7dckun.cloudfront.net/data/catBanner/20191204yohjmi.jpg",
          catImgSrc:
            "https://duzqtec7dckun.cloudfront.net/data/catImg/20210203gipjfq.png",
          level: 1,
          sub: [
            {
              cat_id: 32213,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 32215,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 32216,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 32217,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
          ],
        },
        {
          cat_id: 32218,
          cat_name: "iTunes5",
          parent_id: 0,
          bannerImgSrc:
            "https://duzqtec7dckun.cloudfront.net/data/catBanner/20191204yohjmi.jpg",
          catImgSrc:
            "https://duzqtec7dckun.cloudfront.net/data/catImg/20210203gipjfq.png",
          level: 1,
          sub: [
            {
              cat_id: 33310,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 33311,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 33312,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 33314,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 33315,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 33316,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 33317,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 33318,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 33319,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 36310,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 36311,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 36311,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 36312,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 36314,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 36313,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 36315,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 36317,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 36318,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 36319,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 36390,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
          ],
        },
        {
          cat_id: 224,
          cat_name: "iTunes6",
          parent_id: 0,
          bannerImgSrc:
            "https://duzqtec7dckun.cloudfront.net/data/catBanner/20191204yohjmi.jpg",
          catImgSrc:
            "https://duzqtec7dckun.cloudfront.net/data/catImg/20210203gipjfq.png",
          level: 1,
          sub: [
            {
              cat_id: 262,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 262,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 262,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
            {
              cat_id: 262,
              cat_name: "中国区苹果充值1111111asdf",
              parent_id: 224,
              bannerImgSrc: "",
              catImgSrc:
                "https://duzqtec7dckun.cloudfront.net/data/catImg/20220610jwaszm.png",
              level: 2,
              sub: [],
            },
          ],
        },
      ];
      this.id = 100;
    }, 10);
  },
};
</script>
