<template>
  <div class="index-bottom-carousel">
    <div class="module-tit">
      <h2 class="title">与创作者一起，让视频更有趣</h2>
      <span>关于来画，他们想说...</span>
    </div>
    <div class="carousel-box">
      <div class="carousel-item">
        <img class="head-img" :src="list[0].img" alt />
        <div class="item-content">
          <p class="item-text">{{ list[0].saying }}</p>
          <div class="person-msg">
            <span class="name">{{ list[0].name }}</span>
            <span class="dividing"></span>
            <span>{{ list[0].position }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { userSayings } from './data';
  export default {
    data() {
      return {
        list: userSayings,
        currentIdx: 0,
      };
    },
    methods: {
      //   changeCarousel(index) {
      //     this.currentIdx = index;
      //   },
      //   clickArroPpoint(index) {
      //     this.$refs.carousel.setActiveItem(index);
      //   },
    },
  };
</script>

<style lang="less">
  .index-bottom-carousel {
    display: flex;
    width: 100%;
    height: 682px;
    color: #fff;
    background: #1e45eb;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .module-tit {
      margin: 115px 0 105px;
      font-size: 18px;

      .title {
        margin-bottom: 12px;
        font-size: 40px;
      }
    }

    .carousel-box {
      width: 990px;
      height: 182px;
    }

    .carousel-item {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      .head-img {
        width: 182px;
        height: 182px;
        border-radius: 50%;
      }

      .item-content {
        width: 711px;
        font-size: 22px;
        font-style: italic;
        text-align: left;

        .item-text {
          line-height: 37px;
        }

        .person-msg {
          margin-top: 50px;
          font-size: 16px;

          .name {
            font-weight: 700;
          }

          .dividing {
            margin: 0 20px;
          }
        }
      }
    }

    // .arrow-row {
    //   display: flex;
    //   width: 96px;
    //   height: 30px;
    //   margin: 75px auto 0;
    //   align-items: center;
    //   justify-content: space-between;

    //   .arrow-point {
    //     display: block;
    //     width: 16px;
    //     height: 16px;
    //     cursor: pointer;
    //     border: 1px solid #fff;
    //     border-radius: 50%;
    //     box-sizing: border-box;

    //     &.active {
    //       background: #fff;
    //       border: 0;
    //     }
    //   }
    // }
  }
</style>
