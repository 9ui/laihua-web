<template>
  <div class="right-info">
    <!-- <Affix :offset-top="100" @change="onchange"
      ><button class="h-btn">固定在距离底部偏移量10px的位置</button></Affix
    > -->
    <!-- <Affix :offset-bottom="10" @change="onchange1"
      ><button class="h-btn">固定在距离底部偏移量10px的位置</button></Affix
    > -->
    <div class="affix-demo-3-vue bg-gray2-color relative">
      <Affix
        :fixed-offset-top="0"
        :offset-top="0"
        :offset-bottom="20"
        class="affix-demo-3"
        :container="getContainer"
        @change="onchange"
      >
        <div class="h-cell h-cell-blue">固定容器内</div>
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
        fixed: true,
      };
    },
    methods: {
      getContainer() {
        return this.$el;
      },
      onchange(fixed: any) {
        console.log('fixed', fixed);
      },
    },
  });
</script>

<style>
  .right-info {
    position: relative;
    z-index: 1;
    display: flex;
    width: 828px;
    height: 1500px;
    border-bottom: 2px dashed #eee;
    flex-direction: column;
    justify-content: center;
  }

  .bg-gray2-color {
    background-color: #eee;
  }

  .lh-affix {
    width: 828px;
  }

  .lh-affix-absolute {
    width: 828px;
  }

  .affix-demo-3-vue {
    width: 828px;
    height: 1000px;
    overflow: hidden;
  }

  .relative {
    position: relative;
  }

  .affix-demo-3 {
    width: 100%;
    height: 80px;
  }

  .h-cell.h-cell-blue {
    width: 100%;
    height: 80px;
    color: #fff;
    background-color: #39afd1;
    border-color: #31accf;
  }
</style>
