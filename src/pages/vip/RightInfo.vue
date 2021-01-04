<template>
  <div class="right-info">
    <div class="affix-demo-3-vue bg-gray2-color relative text-right">
      <Affix
        :fixed-offset-top="0"
        :offset-top="0"
        :offset-bottom="20"
        class="affix-demo-3"
        :container="getContainer"
        @change="onchange"
      >
        <button class="h-btn h-btn-blue">固定容器内</button>
      </Affix>
    </div>
  </div>
</template>

<script lang="ts">
  import * as Core from '@/core';
  import { Affix } from '@/components/Affix/index';
  const { VueAPI } = Core;
  export default VueAPI.defineComponent({
    components: {
      Affix,
    },
    data() {
      return {
        fixed: false,
      };
    },
    methods: {
      onchange(fixed: any) {
        this.fixed = fixed;
      },
      getContainer() {
        return this.$el;
      },
    },
  });
</script>

<style>
  .right-info {
    position: relative;
    z-index: 1;
    width: 828px;
    border-bottom: 2px dashed #eee;
  }

  /* .rect {
    width: 1200px;
    height: 80px;
    background-color: darkgoldenrod;
  } */
  .bg-gray2-color {
    background-color: #eee;
  }

  .text-right {
    text-align: right !important;
  }

  .relative {
    position: relative;
  }

  .affix-demo-3-vue {
    height: 1000px;
    overflow: hidden;
  }

  .affix-demo-3 {
    float: right;
    width: 100px;
    background-color: aqua;
  }

  .h-btn {
    display: inline-block;
    height: 300px;
    padding: 8px 15px;
    font-family: inherit;
    font-size: 13px;
    line-height: 1;
    color: inherit;
    cursor: pointer;
    background-color: transparent;
    background-color: #fff;
    border: none;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
    outline: none;
    box-shadow: 0 1px 1px 0 #eee;
    box-sizing: border-box;
    transition: all 0.2s;
  }

  .h-btn.h-btn-blue {
    color: #fff;
    background-color: #39afd1;
    border-color: #31accf;
  }
</style>
