<template>
  <div class="index-product-feature">
    <div
      v-for="(n, index) in featureData"
      :key="index"
      class="rowpt lazyMod"
      :class="{ 'reverse-row': index % 2 !== 0 }"
    >
      <div class="colpt">
        <div class="feature-txt">
          <h3 class="colpt-tit">{{ n.title }}</h3>
          <p class="colpt-text">{{ n.text }}</p>
          <p v-for="tag in n.tags" :key="tag" class="colpt-tag">
            <span class="point"></span>
            {{ tag }}
          </p>
          <div class="colpt-btn" @click="navTo(n.url)">进入</div>
        </div>
      </div>
      <div class="colpt">
        <div class="feature-video" :class="`video${index}`">
          <img class="bg-img" :src="n.img" alt="" />
          <video class="video" :src="n.src" muted loop="loop" autoplay></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { featureData } from './data';
  export default {
    data() {
      return {
        featureData,
      };
    },
    methods: {
      navTo(url) {
        window.open(window.location.origin + url);
      },
    },
  };
</script>

<style lang="less" scoped>
  .index-product-feature {
    width: 100%;
    height: 1682px;
    padding-top: 60px;
    box-sizing: border-box;

    .rowpt {
      display: flex;
      width: 930px;
      margin: 170px auto 0;
      justify-content: space-between;
      align-items: center;

      .feature-txt {
        width: 340px;
        font-size: 16px;
        color: #333;
        text-align: left;

        .colpt-tit {
          margin-bottom: 3px;
          font-size: 40px;
        }

        .colpt-text {
          margin-bottom: 24px;
        }

        .colpt-tag {
          display: flex;
          font-size: 16px;
          line-height: 30px;
          align-items: center;
          justify-content: flex-start;

          .point {
            display: inline-block;
            width: 6px;
            height: 6px;
            margin-right: 10px;
            background: #1e45eb;
            border-radius: 50%;
          }
        }

        .colpt-btn {
          width: 160px;
          height: 40px;
          margin-top: 20px;
          font-size: 16px;
          line-height: 40px;
          color: #fff;
          text-align: center;
          cursor: pointer;
          background: #0062ff;
          border-radius: 20px;

          &:hover {
            opacity: 0.8;
          }
        }
      }

      .feature-video {
        position: relative;
        width: 553px;
        height: 300px;

        .bg-img {
          position: absolute;
        }

        .video {
          position: absolute;
          width: 477px;
          height: 268px;
          border-radius: 4px;
        }
      }

      .video0 {
        left: 34px;

        .bg-img {
          bottom: 0;
          left: 0;
        }

        .video {
          top: 0;
          left: 25px;
        }
      }

      .video1 {
        right: 94px;

        .bg-img {
          bottom: 0;
          left: 0;
        }

        .video {
          top: 36px;
          left: 56px;
        }
      }

      .video2 {
        left: 28px;

        .bg-img {
          right: 0;
          bottom: 0;
        }

        .video {
          right: 53px;
          bottom: 29px;
        }
      }
    }

    .reverse-row {
      flex-direction: row-reverse;
    }
  }
</style>
