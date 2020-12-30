<template>
  <div class="index-scene">
    <div class="index-container">
      <div class="header">
        <section class="title">
          <h2>丰富的模板场景</h2>
          <p>上万+个精选模板 涵盖多种内容场景</p>
          <div class="btn" @click="navTo">查看更多</div>
        </section>
      </div>
      <section data-v-75667c7f="" class="content"
        ><img
          data-v-75667c7f=""
          src="https://resources.laihua.com/2020-7-24/23bedc8c-d7cc-4972-b466-820f041fd3cb.png"
          class="scene-img animate img-0" /><img
          data-v-75667c7f=""
          src="https://resources.laihua.com/2020-7-24/7f447d13-64f2-4114-bec9-09430c426711.png"
          class="scene-img animate img-1" /><img
          data-v-75667c7f=""
          src="https://resources.laihua.com/2020-7-24/e9a430a3-2bb9-4879-bf54-4f65c35a95c3.png"
          class="scene-img animate img-2" /><img
          data-v-75667c7f=""
          src="https://resources.laihua.com/2020-7-24/e5369fae-5f35-49ac-9690-4571790df0d4.png"
          class="scene-img animate img-3" />
        <img
          data-v-75667c7f=""
          src="https://cdn2.laihua.com/tmp-dist/static/img/16.854ce49.png"
          class="scene-img6 img-6 animate"
      /></section>
    </div>
  </div>
</template>

<script lang="ts">
  import * as Core from '@/core';
  const { VueAPI } = Core;
  export default VueAPI.defineComponent({
    methods: {
      navToUrl() {},
      navTo() {},
    },
    setup() {},
  });
</script>

<style lang="less">
  .index-scene {
    height: 928px;
    background-color: #fff;

    .header {
      &::after {
        position: absolute;
        top: 277px;
        right: 0;
        width: 22px;
        height: 2px;
        background-color: #2f58fe;
        content: '';
      }
    }

    .title {
      position: absolute;
      top: 203px;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      h2 {
        font-size: 36px;
        font-weight: bold;
        color: #333;
      }

      p {
        margin-top: 60px;
        font-size: 16px;
        color: #7d808b;
      }

      .btn {
        width: 180px;
        height: 50px;
        margin-top: 35px;
        font-size: 14px;
        line-height: 50px;
        color: #fff;
        text-align: center;
        cursor: pointer;
        background: #2f58fe;
        border-radius: 25px;

        &:hover {
          background-color: rgba(#2f58fe, 0.8);
        }
      }
    }

    .content {
      width: 892px;
      height: 610px;
      margin-top: 126px;
      margin-left: 30px;
      background-image: url('/images/home/17.png');
      background-size: 100%;

      .scene-img {
        position: absolute;
        width: 250px;
        height: 200px;
        cursor: pointer;
        opacity: 0;

        &:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
      }

      .img-0 {
        top: 258px;
        left: -2px;
      }

      .img-1 {
        top: 415px;
        left: 413px;
      }

      .img-2 {
        top: 180px;
        left: 280px;
      }

      .img-3 {
        top: 480px;
        left: 714px;
      }

      .img-4 {
        top: 657px;
        left: 413px;
      }

      .img-6 {
        position: absolute;
        top: 446px;
        left: -38px;
        width: 368px;
        height: 323px;
      }

      .img-0.animate {
        animation: flash3 0.5s linear 0.6s;
        animation-fill-mode: forwards;

        @keyframes flash3 {
          0% {
            opacity: 0;
          }

          50% {
            opacity: 0.25;
            transform: translateY(-20px);
          }

          75% {
            opacity: 0.5;
            transform: translateY(-40px);
          }

          100% {
            opacity: 1;
            transform: translateY(-60px);
          }
        }
      }

      .img-1.animate {
        animation: flash3 0.5s linear 0.7s;
        animation-fill-mode: forwards;
        @keyframes flash3 {
          0% {
            opacity: 0;
          }

          50% {
            opacity: 0.25;
            transform: translateY(-20px);
          }

          75% {
            opacity: 0.5;
            transform: translateY(-40px);
          }

          100% {
            opacity: 1;
            transform: translateY(-60px);
          }
        }
      }

      .img-2.animate {
        animation: flash3 0.5s linear 0.5s;
        animation-fill-mode: forwards;
        @keyframes flash3 {
          0% {
            opacity: 0;
          }

          50% {
            opacity: 0.25;
            transform: translateY(-20px);
          }

          75% {
            opacity: 0.5;
            transform: translateY(-40px);
          }

          100% {
            opacity: 1;
            transform: translateY(-60px);
          }
        }
      }

      .img-3.animate {
        animation: flash3 0.5s linear 0.8s;
        animation-fill-mode: forwards;
        @keyframes flash3 {
          0% {
            opacity: 0;
          }

          50% {
            opacity: 0.25;
            transform: translateY(-20px);
          }

          75% {
            opacity: 0.5;
            transform: translateY(-40px);
          }

          100% {
            opacity: 1;
            transform: translateY(-60px);
          }
        }
      }

      .img-4.animate {
        animation: flash3 0.5s linear 0.9s;
        animation-fill-mode: forwards;
        @keyframes flash3 {
          0% {
            opacity: 0;
          }

          50% {
            opacity: 0.25;
            transform: translateY(-20px);
          }

          75% {
            opacity: 0.5;
            transform: translateY(-40px);
          }

          100% {
            opacity: 1;
            transform: translateY(-60px);
          }
        }
      }
    }
  }
</style>
