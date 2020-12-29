<template>
  <div class="vipserver-appreciation">
    <h2> 更多<b>会员增值服务</b>套餐 </h2>
    <img src="../../assets/images/vipservice/2.png" alt="" class="bg2" />
    <div class="tabs">
      <div
        v-for="(s, i) in otherServices"
        :key="s.id"
        class="tab-item"
        :class="[i === currentIndex ? 'active' : '']"
        @click="setActiveItem(i)"
      >
        {{ s.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from '@vue/composition-api';
  import { otherServices } from './data';
  export default defineComponent({
    setup() {
      const currentIndex = ref(0);
      return {
        otherServices,
        currentIndex,
      };
    },
  });
</script>

<style></style>
