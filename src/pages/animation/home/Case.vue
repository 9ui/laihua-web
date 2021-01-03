<template>
  <div class="work-cases"> 案例 </div>
</template>

<script lang="ts">
  import * as Core from '@/core';
  const { VueAPI } = Core;
  export default VueAPI.defineComponent({});
</script>

<style lang="less">
  .work-cases {
    height: 800px;
    padding-top: 89px;
    background: linear-gradient(0deg, rgba(244, 244, 252, 1) 0%, rgba(255, 255, 255, 1) 100%);

    .header {
      position: relative;
      display: flex;
      margin-top: 36px;
      justify-content: space-between;
      align-items: center;

      &::after {
        position: absolute;
        top: 121px;
        left: 0;
        width: 22px;
        height: 2px;
        background: #2f58fe;
        content: '';
      }

      .title {
        text-align: left;

        > h2 {
          font-size: 36px;
          color: #333;
        }

        > p {
          margin-top: 17px;
        }
      }

      > ul {
        display: flex;

        li {
          width: 120px;
          height: 50px;
          margin-left: 8px;
          font-weight: bold;
          line-height: 50px;
          color: #7d808b;
          cursor: pointer;

          &.active {
            color: #2f58fe;
            background: rgba(242, 244, 255, 1);
            border-radius: 25px;
          }
        }
      }
    }

    .content {
      display: flex;
      margin-top: 76px;
      justify-content: space-between;

      .works-card {
        position: relative;
        cursor: pointer;
        background-color: #fff;
        box-shadow: 0 2px 49px 0 rgba(105, 100, 186, 0.11);

        &.animate.card-fr {
          animation: flash3 0.3s linear 0.3s;
          animation-fill-mode: forwards;
          @keyframes flash3 {
            0% {
              opacity: 0;
            }

            50% {
              opacity: 0.15;
              transform: translateY(-20px);
            }

            75% {
              opacity: 0.3;
              transform: translateY(-40px);
            }

            100% {
              opacity: 1;
              transform: translateY(-60px);
            }
          }
        }

        &.animate.other {
          animation: flash4 0.3s linear 0.3s;
          animation-fill-mode: forwards;
          @keyframes flash4 {
            0% {
              opacity: 0;
            }

            50% {
              opacity: 0.15;
              transform: translateY(-8px);
            }

            75% {
              opacity: 0.3;
              transform: translateY(-16px);
            }

            100% {
              opacity: 1;
              transform: translateY(-24px);
            }
          }
        }
      }

      .card-fr {
        position: relative;
        top: 40px;
        height: 454px;
        padding-top: 7px;
        opacity: 0;
        box-sizing: border-box;
        flex-basis: 580px;

        > img {
          width: 566px;
          height: 318px;
        }

        .content-ft {
          padding: 44px 26px 55px;
          text-align: left;
          box-sizing: border-box;

          h4 {
            font-size: 20px;
            font-weight: bold;
            color: #333;
          }

          p {
            margin-top: 15px;
            font-size: 14px;
            color: #a0a4b0;
          }
        }

        .item-play {
          position: absolute;
          top: 131px;
          left: 262px;
          width: 57px;
          height: 57px;
          // background: url("../assets/img/index/play2.png");
          cursor: pointer;
        }
      }

      .card-other {
        display: flex;
        height: 454px;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-end;
        // flex-basis: 605px;
        flex: 1;

        .other {
          position: relative;
          top: 24px;
          width: 280px;
          height: 211px;
          padding-top: 7px;
          opacity: 0;
          box-sizing: border-box;

          > img {
            width: 267px;
            height: 150px;
          }

          .content-ft {
            padding: 12px 16px;
            text-align: left;
            box-sizing: border-box;

            h4 {
              font-size: 12px;
              font-weight: bold;
              color: #333;
            }

            p {
              margin-top: 9px;
              font-size: 12px;
              color: #a0a4b0;
            }
          }

          .item-play {
            position: absolute;
            top: 50px;
            left: 112px;
            width: 57px;
            height: 57px;
            // background: url("../assets/img/index/play2.png");
            cursor: pointer;
          }
        }
      }
    }
  }

  .index-container {
    position: relative;
    display: flex;
    width: 1200px;
    margin: 0 auto;
    flex-direction: column;
  }
</style>
