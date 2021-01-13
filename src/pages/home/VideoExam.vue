<template>
  <div class="index-video-exam">
    <div class="content-wrapper">
      <h2 class="title">他们用来画创作视频</h2>
      <div class="switch-box">
        <span
          class="switch-btn btn1"
          :class="{ active: select === 'animation' }"
          @click="switchTab('animation')"
        >
          来画动画
        </span>
        <span
          class="switch-btn btn2"
          :class="{ active: select === 'video' }"
          @click="switchTab('video')"
        >
          来画视频
        </span>
      </div>
      <!-- <switch-btn
                class="vip-switch"
                active-text="来画动画"
                inactive-text="来画视频"
                :active="isVideo"
                custom-class="switch-btn"
                @change="changeSwitch"></switch-btn> -->
      <div class="video-list">
        <!-- <single-video :templates="dataList" extra-class="big"></single-video> -->
      </div>
      <div class="view-more-btn" @click="viewMore">查看更多案例</div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      //   SingleVideo: () => import('~/components/solution/common/SingleVideo'),
      // switchBtn: () => import("~/components/common/lh-switch-button/lh-switch-animation")
    },
    data() {
      return {
        select: 'animation',
        dataList: [],
        animationList: [],
        videoList: [],
        categorys: [],
      };
    },
    mounted() {
      this.getCategory();
      this.getVideoDatas();
    },
    methods: {
      switchTab(flag) {
        this.select = flag;
        this.dataList = flag === 'animation' ? this.animationList : this.videoList;
      },
      getVideoDatas() {
        // this.$axios.get('/webapi/common/findVideo?fileType=49&pIndex=1&fPage=6').then((res) => {
        //   if (res.data.code == 200) {
        //     const arr = res.data.data,
        //       newArr = [],
        //       len = arr.length;
        //     for (let i = 0; i < len; i++) {
        //       newArr.push({
        //         url: this.$.handleAssetsUrl(arr[i].url),
        //         imgSrc: this.$.handleAssetsUrl(
        //           this.getScreen(arr[i]) || this.getThumbnailUrl(arr[i])
        //         ),
        //         title: arr[i].title,
        //       });
        //     }
        //     this.videoList = newArr;
        //   }
        // });
      },

      getAnimationDatas() {
        // this.$axios
        //   .get('/webapi/common/material', {
        //     params: { type: 20, category: this.categorys[0].id },
        //   })
        //   .then((res) => {
        //     if (res.data.code == 200) {
        //       const arr = res.data.data,
        //         newArr = [],
        //         len = arr.length;
        //       for (let i = 0; i < len; i++) {
        //         newArr.push({
        //           url: this.$.handleAssetsUrl(arr[i].urlcn),
        //           imgSrc: this.$.handleAssetsUrl(arr[i].img),
        //           title: arr[i].titcn,
        //         });
        //       }
        //       this.animationList = newArr;
        //       // 默认进来展示动画
        //       this.dataList = newArr;
        //     }
        //   });
      },
      getCategory() {
        // this.$axios.$get('/webapi/home/category?type=20').then((res) => {
        //   if (res.code == 200) {
        //     const arr = Object.values(res.data);
        //     for (const item of arr) {
        //       const obj = {
        //         id: item.id + '',
        //         name: item.name,
        //       };
        //       this.categorys.push(obj);
        //     }
        //     this.getAnimationDatas();
        //   }
        // });
      },
      viewMore() {
        const url = this.select === 'animation' ? '/workbench/discover' : '/video/discover';
        window.open(location.origin + url);
      },
      getThumbnailUrl(item) {
        if (item.thumbnailUrl) {
          const thumbnailUrlList = item.thumbnailUrl.split(',');
          return thumbnailUrlList[0];
        }
        return '';
      },
      getScreen(item) {
        if (item.screen) {
          const screenList = item.screen.split(',');
          return screenList[0];
        }
        return '';
      },
    },
  };
</script>

<style lang="less">
  .index-video-exam {
    display: flex;
    width: 100%;
    height: 1080px;
    font-size: 16px;
    background: #f0f2f5;
    flex-direction: column;
    align-items: center;

    .content-wrapper {
      width: 1200px;
      margin: 140px auto 115px;

      .title {
        margin: 0 auto 55px;
        font-size: 40px;
        color: #000;
      }

      .switch-box {
        position: relative;
        width: 224px;
        height: 38px;
        margin-bottom: 40px;
        text-align: left;
        border: 2px solid #0062ff;
        border-radius: 19px;
        box-sizing: border-box;

        .switch-btn {
          position: absolute;
          top: 0;
          width: 124px;
          height: 34px;
          line-height: 34px;
          color: #0062ff;
          text-align: center;
          cursor: pointer;
          background: #f0f2f5;
          border-radius: 19px;

          &.btn1 {
            left: 0;
          }

          &.btn2 {
            left: 95px;
          }

          &.active {
            top: -2px;
            z-index: 5;
            width: 110px;
            height: 38px;
            line-height: 38px;
            color: #fff;
            background: #0062ff;

            &.btn2 {
              left: 111px;
            }
          }
        }
      }

      .video-list {
        width: 100%;
        height: 570px;
        margin-bottom: 26px;
      }

      .view-more-btn {
        width: 180px;
        height: 40px;
        margin: 0 auto;
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
  }
</style>
