<template>
  <div>
    <div
      ref="wrapper"
      :style="headerPosition"
      :class="['wrapper', headerPosition == 'position:relative' ? '' : 'fixed-hd']"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import * as Core from '@/core';
  const { VueAPI } = Core;
  export default VueAPI.defineComponent({
    components: {},
    data() {
      return {
        headerPosition: 'position:relative', // 表格顶端的对齐方式
        isFill: false, // 防表头抖动填充
      };
    },
    computed: {},
    mounted() {
      document.body.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      // 监听页面滑动
      handleScroll() {
        // 页面左右滑动的距离
        const scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
        // 表格距离顶端距离
        const marginTop = (this.$refs.wrapper as HTMLElement).offsetTop;
        // 页面滑动的距离
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        // 浏览器可视宽度
        const clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
        // 表格的高度
        // let tableHeight = (this.$refs.wrapper as HTMLElement).clientHeight;
        if (marginTop < scrollTop && scrollTop < marginTop + 800) {
          this.isFill = true;
          this.headerPosition = 'position:fixed;top:48px;z-index:10;';
          // 如果页面宽度小于1300,表头的位置也要跟着改变
          if (clientWidth < 1300) {
            this.headerPosition = `position:fixed;top:48px;margin-left:${-scrollLeft}px;`;
          }
        } else {
          this.isFill = false;
          this.headerPosition = 'position:relative';
        }
      },
    },
  });
</script>
