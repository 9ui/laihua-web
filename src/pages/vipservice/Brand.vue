<template>
  <div class="vipserver-brand">
    <h2>想获得更好的<b>品牌传播效果</b>？</h2>
    <div class="card">
      <div class="card-left">
        <h3 class="title">{{ brand.title }}</h3>
        <div class="desc">{{ brand.desc }}</div>
        <ul class="tag">
          <li v-for="(b, index) in brand.tags" :key="index">{{ b }}</li>
        </ul>
        <div class="btns">
          <button class="btn btn1" @click="$router.push('/hostingevents')">查看案例</button>
          <button class="btn btn2" @click="$emit('open', 3)">获取报价</button>
        </div>
      </div>
      <div class="card-right">
        <img class="img" src="../../assets/images/vipservice/bg1.png" />
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from '@vue/composition-api';
  import { brand } from './data';
  export default defineComponent({
    setup() {
      return {
        brand,
      };
    },
  });
</script>

<style></style>
