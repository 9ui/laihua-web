<template>
  <div class="product-introduction">
    <h2 class="title">产品介绍</h2>
    <div
      v-for="(d, index) in descList"
      :key="index"
      class="rowpt animate"
      :class="[index % 2 === 0 ? '' : 'reverse-row', `rowpt-${index}`]"
    >
      <div class="colpt">
        <div class="product-txt">
          <div class="product-txt-title">{{ d.title }}</div>
          <p v-for="tag in d.tags" :key="tag">{{ tag }}</p>
        </div>
      </div>
      <div class="colpt">
        <div class="product-img" :class="[index % 2 === 0 ? 'img2' : 'img1']">
          <img :src="d.img" alt :class="`img-${index}`" />
        </div>
      </div>
    </div>
    <div class="create-btn">
      <div class="btn" @click="navTo">制作视频</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { descList } from '@/mock/home/data';
  export default {
    data() {
      return {
        descList, // 产品介绍
      };
    },
    methods: {
      navTo() {
        window.open('/templates');
      },
    },
  };
</script>

<style lang="less">
  .product-introduction {
    position: relative;
    width: 100%;
    max-width: 1100px;
    padding: 0 15px;
    margin: 132px auto 0;

    > h2 {
      font-size: 36px;
      color: #333;
    }

    .rowpt {
      display: flex;
      justify-content: space-around;
      align-items: center;

      &-0,
      &-3 {
        margin-top: 153px;
      }

      &-1 {
        margin-top: 240px;
      }

      &-2 {
        margin-top: 201px;
      }

      &:first-child {
        margin-top: 0;
      }

      .product-txt {
        color: #333;
        text-align: left;

        &::before {
          position: absolute;
          top: 68px;
          left: 0;
          width: 22px;
          height: 2px;
          background-color: #2f58fe;
          content: '';
        }

        &-title {
          margin-bottom: 58px;
          font-size: 30px;
        }

        p {
          font-size: 16px;
          line-height: 26px;
          color: #7d808b;
        }
      }

      .colpt {
        position: relative;
      }

      .product-img {
        position: relative;

        img {
          opacity: 0;
        }

        &.img1 {
          left: -350px;
        }

        &.img2 {
          right: -350px;
        }
      }

      &.animate {
        .product-img {
          &.img1 {
            img {
              animation: flash1 0.7s linear 0.7s;
              animation-fill-mode: forwards;
            }
          }

          &.img2 {
            img {
              animation: flash2 0.7s linear 0.7s;
              animation-fill-mode: forwards;
            }
          }
        }
        @keyframes flash1 {
          0% {
            opacity: 0;
          }

          50% {
            opacity: 0.5;
            transform: translateX(175px);
          }

          100% {
            opacity: 1;
            transform: translateX(350px);
          }
        }
        @keyframes flash2 {
          0% {
            opacity: 0;
          }

          50% {
            opacity: 0.5;
            transform: translateX(-175px);
          }

          100% {
            opacity: 1;
            transform: translateX(-350px);
          }
        }
      }
    }

    .reverse-row {
      flex-direction: row-reverse;
    }

    .img-0 {
      width: 457px;
      height: 293px;
    }

    .img-1 {
      width: 388px;
      height: 322px;
    }

    .img-2 {
      width: 343px;
      height: 379px;
    }

    .img-3 {
      width: 387px;
      height: 430px;
    }

    .create-btn {
      display: flex;
      padding-bottom: 112px;
      justify-content: center;

      .btn {
        width: 180px;
        height: 50px;
        margin-top: 138px;
        font-size: 14px;
        line-height: 50px;
        color: #fff;
        text-align: center;
        cursor: pointer;
        background-color: #2f58fe;
        border-radius: 25px;
        align-self: center;

        &:hover {
          background-color: rgba(#2f58fe, 0.8);
        }
      }
    }
  }
</style>
