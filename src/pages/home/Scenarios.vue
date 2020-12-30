<template>
  <div class="application-scenarios">
    <div class="index-container">
      <div class="header">
        <section class="title">
          <h2>应用场景</h2>
          <p>丰富的应用场景 满足各行业的视频制作需求</p>
        </section>
      </div>
      <div class="content">
        <div v-for="(s, index) in sceneList" :key="index" class="card">
          <img :src="s.img" alt :class="`img-${index}`" class="yingyong-img animate" />
          <h3 class="yingyong-title animate" :class="`yingyong-title-${index}`">
            {{ s.title }}
          </h3>
          <p class="yingyong-desc animate">{{ s.desc }}</p>
        </div>
      </div>
      <div class="btn" @click="navTo">制作视频</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { sceneList } from './data';
  export default {
    data() {
      return {
        sceneList, // 引用场景列表
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
  .application-scenarios {
    width: 100%;
    height: 992px;
    padding-top: 92px;
    background-image: url('/images/home/4.png');

    .header {
      &::after {
        position: absolute;
        top: 120px;
        left: 0;
        width: 22px;
        height: 2px;
        background: #fff;
        content: '';
      }

      .title {
        text-align: left;

        > h2 {
          font-size: 36px;
          color: #fff;
        }

        > p {
          margin-top: 17px;
          color: #fff;
        }
      }
    }

    .content {
      display: flex;
      margin-top: 76px;
      justify-content: space-between;

      .card {
        display: flex;
        width: 346px;
        height: 520px;
        padding: 47px;
        background-color: #fff;
        box-shadow: 0 2px 49px 0 rgba(105, 100, 186, 0.11);
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .yingyong-img.animate {
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

        .yingyong-title.animate {
          animation: flash3 0.5s linear 0.6s;
          animation-fill-mode: forwards;
          @keyframes flash3 {
            0% {
              opacity: 0;
            }

            50% {
              opacity: 0.25;
              transform: translateY(-13px);
            }

            75% {
              opacity: 0.5;
              transform: translateY(-26px);
            }

            100% {
              opacity: 1;
              transform: translateY(-40px);
            }
          }
        }

        .yingyong-desc.animate {
          animation: flash3 0.5s linear 0.7s;
          animation-fill-mode: forwards;
          @keyframes flash3 {
            0% {
              opacity: 0;
            }

            50% {
              opacity: 0.25;
              transform: translateY(-13px);
            }

            75% {
              opacity: 0.5;
              transform: translateY(-26px);
            }

            100% {
              opacity: 1;
              transform: translateY(-40px);
            }
          }
        }

        .yingyong-img {
          position: relative;
          top: 40px;
          opacity: 0;
        }

        .img-0 {
          width: 163px;
          height: 263px;
        }

        .img-1 {
          width: 203px;
          height: 231px;
        }

        .img-2 {
          width: 206px;
          height: 227px;
        }

        .yingyong-title {
          position: relative;
          top: 40px;
          font-size: 20px;
          color: #666;
          opacity: 0;

          &-0 {
            margin-top: 31px;
          }

          &-1 {
            margin-top: 47px;
          }

          &-2 {
            margin-top: 51px;
          }
        }

        .yingyong-desc {
          position: relative;
          top: 40px;
          margin-top: 29px;
          font-size: 14px;
          line-height: 20px;
          color: #7d808b;
          text-align: justify;
          opacity: 0;
        }
      }
    }

    .btn {
      width: 180px;
      height: 50px;
      margin-top: 82px;
      font-size: 14px;
      line-height: 50px;
      color: #3844e5;
      text-align: center;
      cursor: pointer;
      background-color: #fff;
      border-radius: 25px;
      align-self: center;

      &:hover {
        background-color: rgba(255, 255, 255, 0.8);
      }
    }
  }
</style>
