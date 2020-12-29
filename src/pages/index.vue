<template>
  <div class="a-container">
    <div>{{ message }}</div>
    <button type="primary" @click="increment">增加</button>
    <div>{{ count }}</div>
    <hr />
    <div>商品名称:{{ pName }}</div>
    <div>商品实付价:{{ price }}</div>
    <div>商品原价:{{ oldPrice }}</div>
    <hr />
    <div>模拟接口请求</div>
    <button type="primary" @click="request">请求商品数据</button>
    <div>{{ students }}</div>
    <hr />
    <div>{{ category }}</div>
  </div>
</template>

<script lang="ts">
  import { LazyContainer } from '@/components/Container/index';
  import * as Core from '@/core';
  import { ProductsStore, CountStore, StudentStore, SolutionStore } from '~/store';
  const { VueAPI } = Core;
  export default VueAPI.defineComponent({
    components: { LazyContainer },
    setup() {
      const state = VueAPI.reactive({
        message: '好123',
        count: 1,
        pName: '',
        price: 1,
        oldPrice: 1,
        students: {},
        category: {},
      });
      VueAPI.onMounted(() => {
        // eslint-disable-next-line
        console.log('count', CountStore.getCount);
        console.log('213123');
      });
      // 增加的方式
      const increment = () => {
        CountStore.setCount(++state.count);
        state.count = CountStore.getCount;
        // eslint-disable-next-line
        console.log('count', CountStore.getCount);
      };
      // 模拟请求商品数据
      const request = () => {
        ProductsStore.setPName('来画会员');
        ProductsStore.setPrice(100);
        ProductsStore.setOldPrice(250);
        state.pName = ProductsStore.getName;
        state.price = ProductsStore.getPrice;
        state.oldPrice = ProductsStore.getOldPrice;
        SolutionStore.fetchCategory();
        for (let index = 0; index < 10; index++) {
          StudentStore.setStudents({
            name: '張三' + index,
            age: 21 + index,
            sex: '男',
          });
        }
        state.category = SolutionStore.getCategory;
        state.students = StudentStore.getStudents;
      };
      return {
        ...VueAPI.toRefs(state),
        increment,
        request,
      };
    },
  });
</script>
<style lang="less">
  .a-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
