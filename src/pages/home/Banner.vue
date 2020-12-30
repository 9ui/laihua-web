<template>
  <section class="index-banner">
    <div class="mainpt__text">
      <h1>像做PPT一样做视频</h1>
      <p>支持PPT一键导入秒变视频</p>
      <p>简单快速上手的在线视频办公创作平台</p>
      <button>制作视频</button>
    </div>
    <div class="banner-animation">
      <img src="/images/home/2.png" class="f__img animate" />
      <img src="/images/home/1.png" class="s__img" />
      <img src="/images/home/25.png" alt class="img-25" />
      <img src="/images/home/3.png" class="bg__img" />
      <img src="/images/home/26.png" alt class="img-26" />
      <img src="/images/home/29.png" alt class="img-29" />
      <img src="/images/home/30.png" alt class="img-30" />
      <img src="/images/home/31.png" alt class="img-31" />
      <img src="/images/home/32.png" alt class="img-32" />
      <img src="/images/home/33.png" alt class="img-33" />
      <video
        ref="indexVideo"
        class="banner-video"
        src="https://resources.laihua.com/web4/homeindexvideo.mp4"
        muted
        loop="loop"
        controls
        autoplay
      ></video>
    </div>

    <div class="used-by">
      <span>USED BY:</span>
      <img
        v-for="(u, index) in usedByList"
        :key="index"
        :src="u.img"
        :style="{ width: u.width, height: u.height }"
        class="used-img animate"
        :class="`img-${index}`"
      />
    </div>
  </section>
</template>
<script lang="ts">
  import * as Core from '@/core';
  import { usedByList } from '@/mock/home/data';
  const { VueAPI } = Core;
  export default VueAPI.defineComponent({
    data() {
      return {
        usedByList,
      };
    },
    methods: {
      navTo() {
        window.open('/templates');
      },
    },
  });
</script>
<style lang="less">
  .index-banner {
    position: relative;
    display: flex;
    width: 1200px;
    height: 670px;
    margin: 0 auto;

    .mainpt__text {
      width: 485px;
      margin-top: 197px;
      text-align: left;

      > h1 {
        margin-bottom: 37px;
        font-size: 50px;
        font-weight: bolder;
        color: #333;
      }

      > p {
        font-size: 16px;
        color: #666;
      }

      > p + p {
        margin-top: 8px;
      }

      button {
        width: 180px;
        height: 50px;
        margin-top: 37px;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        background-color: #2f58fe;
        border-radius: 25px;

        &:hover {
          background-color: rgba(#304ffd, 0.8);
        }
      }
    }

    .banner-video {
      position: absolute;
      top: 79px;
      left: 72px;
      z-index: 2;
      width: 481px;
      height: 296px;
    }

    .banner-animation {
      position: relative;
      top: 68px;
      width: 715px;
      height: 459px;
    }

    .f__img {
      position: absolute;
      top: 186px;
      left: 842px;
      z-index: 3;
      width: 248px;
      height: 246px;
      opacity: 0;

      &.animate {
        animation: flash12 0.7s linear 0.7s;
        animation-fill-mode: forwards;

        @keyframes flash12 {
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

    .s__img {
      position: absolute;
      top: 12px;
      left: 0;
      z-index: 2;
      width: 632px;
    }

    .bg__img {
      position: absolute;
      top: 0;
      left: 139px;
      width: 506px;
      height: 459px;
    }

    .img-25 {
      position: absolute;
      top: 291px;
      left: -43px;
      width: 65px;
      height: 41px;
    }

    .img-26 {
      position: absolute;
      top: 8px;
      left: 412px;
      width: 65px;
      height: 47px;
    }

    .img-29 {
      position: absolute;
      top: 0;
      left: 321px;
      width: 14px;
      height: 14px;
      animation: imgAnimation 3.5s infinite;
    }

    .img-30 {
      position: absolute;
      top: 180px;
      left: 714px;
      width: 10px;
      height: 10px;
      animation: imgAnimation 3.3s infinite;
    }

    .img-31 {
      position: absolute;
      top: 223px;
      left: 44px;
      width: 24px;
      height: 14px;
    }

    .img-32 {
      position: absolute;
      top: 48px;
      left: 426px;
      width: 8px;
      height: 8px;
      animation: imgAnimation 7s infinite;
    }

    .img-33 {
      position: absolute;
      bottom: 23px;
      left: 448px;
      z-index: 2;
      width: 3px;
      height: 3px;
      animation: imgAnimation 3.1s infinite;
    }

    @keyframes imgAnimation {
      0% {
        transform: translate(0, -5px);
      }

      50% {
        transform: translate(0, 10px);
      }

      100% {
        transform: translate(0, -5px);
      }
    }

    .used-by {
      position: absolute;
      bottom: 20px;
      display: flex;
      width: 1000px;
      height: 40px;
      margin-left: 65px;
      justify-content: space-around;
      align-items: center;

      > span {
        font-size: 14px;
        color: #7d808b;
      }

      .used-img {
        position: relative;
        top: 30px;
        opacity: 0;
      }

      .img-0.animate {
        animation: flash11 0.3s linear 0.2s;
        animation-fill-mode: forwards;
      }

      .img-1.animate {
        animation: flash11 0.3s linear 0.3s;
        animation-fill-mode: forwards;
      }

      .img-2.animate {
        animation: flash11 0.3s linear 0.4s;
        animation-fill-mode: forwards;
      }

      .img-3.animate {
        animation: flash11 0.3s linear 0.5s;
        animation-fill-mode: forwards;
      }

      .img-4.animate {
        animation: flash11 0.3s linear 0.6s;
        animation-fill-mode: forwards;
      }

      .img-5.animate {
        animation: flash11 0.3s linear 0.7s;
        animation-fill-mode: forwards;
      }

      .img-6.animate {
        animation: flash11 0.3s linear 0.8s;
        animation-fill-mode: forwards;
      }

      @keyframes flash11 {
        0% {
          opacity: 0;
        }

        50% {
          opacity: 0.5;
          transform: translateY(-10px);
        }

        75% {
          opacity: 0.75;
          transform: translateY(-20px);
        }

        100% {
          opacity: 1;
          transform: translateY(-30px);
        }
      }
    }
  }
</style>
