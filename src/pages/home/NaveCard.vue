<template>
  <div class="index-three-nav-module">
    <div
      v-for="(item, index) in threeNavData"
      :key="index"
      class="nav-item"
      :class="`nav${index}`"
      @mouseenter="mouseEnter(index)"
      @mouseleave="mouseLeave(index)"
      @click="navTo(item.url)"
    >
      <div class="shadow">
        <div class="top-tit">
          <p class="tit"
            ><span class="big">{{ item.bigTit }}</span
            >{{ item.smallTit }}</p
          >
          <p class="text">{{ item.text }}</p>
          <span class="icon"></span>
        </div>
      </div>
      <div class="video-box">
        <img v-if="index === 2" class="nav-2-img" :src="item.src" alt="" />
        <video
          v-else
          :id="`video${index}`"
          class="nav-video"
          :src="item.src"
          muted
          loop="loop"
        ></video>
      </div>
    </div>
  </div>
</template>

<script>
  import { threeNavData } from './data';
  export default {
    data() {
      return {
        threeNavData,
      };
    },
    methods: {
      mouseEnter(index) {
        if (index > 1) return;
        const v = document.getElementById(`video${index}`);
        v.play();
      },
      mouseLeave(index) {
        if (index > 1) return;
        const v = document.getElementById(`video${index}`);
        v.currentTime = 0;
        v.pause();
      },
      navTo(url) {
        window.open(window.location.origin + url);
      },
    },
  };
</script>

<style lang="less">
  .index-three-nav-module {
    position: absolute;
    top: 553px;
    z-index: 1;
    display: flex;
    width: 1200px;
    // height: 318px;
    justify-content: space-between;
    align-items: center;

    .nav-item {
      position: relative;
      width: 380px;
      height: 100%;
      cursor: pointer;

      .shadow {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
        width: 100%;
        height: 100%;

        .top-tit {
          position: relative;
          display: inline-block;
          width: 100%;
          height: 104px;
          padding-left: 31px;
          color: #fff;
          text-align: left;
          border-radius: 4px 4px 0 0;
          box-sizing: border-box;

          .tit {
            width: 324px;
            margin: 20px 0 5px;
            font-size: 24px;
            font-weight: 700;

            .big {
              margin-right: 10px;
              font-size: 30px;
            }
          }

          .text {
            width: 324px;
            font-size: 16px;
          }
        }
      }

      .icon {
        position: absolute;
        top: 30px;
        right: 28px;
        opacity: 0;
      }

      .video-box {
        position: relative;
        z-index: 10;
        width: 100%;
        height: 214px;
        margin-top: 104px;

        .nav-video {
          width: 100%;
          height: 100%;
          border-radius: 0 0 4px 4px;
        }

        .nav-2-img {
          position: absolute;
          top: 0;
          left: 10px;
          width: 771px;
          height: 234px;
        }
      }

      &:hover {
        .icon {
          opacity: 1;
        }
      }
    }

    .nav0 {
      .shadow {
        background: linear-gradient(rgba(51, 87, 237, 1), rgba(51, 87, 237, 0));
      }

      .top-tit {
        background: #3357ed;
      }
    }

    .nav1 {
      .shadow {
        background: linear-gradient(rgba(209, 26, 233, 1), rgba(209, 26, 233, 0));
      }

      .top-tit {
        background: #d11ae9;
      }
    }

    .nav2 {
      overflow: hidden;
      background: #00c6c5;

      .shadow {
        background: linear-gradient(rgba(0, 198, 197, 1), rgba(0, 198, 197, 0));
      }

      &:hover {
        .nav-2-img {
          animation: rolling 4s linear;
        }
      }
    }
    @keyframes rolling {
      0% {
        left: 10px;
      }

      100% {
        left: -391px;
      }
    }
  }
</style>
