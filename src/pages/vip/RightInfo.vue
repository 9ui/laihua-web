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
    <Collapse v-model="activeName">
      <CollapseItem title="迈尔斯·莫拉莱斯" name="1">
        终极宇宙里的蜘蛛侠，被一只放射性蜘蛛咬伤，并因此获得了超能力。偶然和其他宇宙的蜘蛛侠相遇，将和他们共同对抗最强反派。
      </CollapseItem>
      <CollapseItem title="彼得·帕克" name="2">
        616宇宙的蜘蛛侠，他帮助训练迈尔斯·莫拉莱斯正视自己，勇于承担肩上的责任，在这期间也慢慢的找回自我。
      </CollapseItem>
      <CollapseItem title="格温·史黛西" name="3">
        我是她是一个非常聪明、反应极快的女孩儿，能够以宛如舞者般优雅的身姿穿梭往来，是她所属那个世界的蜘蛛侠。
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script lang="ts">
  import * as Core from '@/core';
  import { Affix } from '@/components/Affix/index';
  import { Collapse, CollapseItem } from '@/components/Collapse/index';
  const { VueAPI } = Core;
  export default VueAPI.defineComponent({
    components: {
      Affix,
      Collapse,
      CollapseItem,
    },
    data() {
      return {
        fixed: true,
        activeName: ['1'],
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
