<template>
  <div class="big_div">
    <div class="top">
      <div class="box"><h2 class="title">小米闪购</h2></div>
    </div>
    <div class="miaosha">
      <div class="left">
        <p style="color:red;font-size:20px;padding-top:52px">10:00场</p>
        <img
          src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA1CAYAAAAklDnhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ%0AbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp%0Abj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6%0AeD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1%0AMTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo%0AdHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw%0AdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv%0AIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS%0AZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD%0AcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5j%0AZUlEPSJ4bXAuaWlkOjY4Q0ZFMkY5MTJFNzExRThCMkM4OEM1RTNBNjczQUVBIiB4bXBNTTpEb2N1%0AbWVudElEPSJ4bXAuZGlkOjY4Q0ZFMkZBMTJFNzExRThCMkM4OEM1RTNBNjczQUVBIj4gPHhtcE1N%0AOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhDRkUyRjcxMkU3MTFFOEIy%0AQzg4QzVFM0E2NzNBRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhDRkUyRjgxMkU3MTFF%0AOEIyQzg4QzVFM0E2NzNBRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht%0AcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oEyacAAACoklEQVR42sSYv0tbURTHX0LqD6T4g4pE%0AcHDoUOloBxVd/QFFEcQqWtrSKlKFmmAslopohzgIbv4FwUEE0clFujiIi+BSIbRQ0ooKRReRULHf%0AS48Qgu++c3/FAx+iyU3eJzf3nnPuC/1qavQ04zVY8szjCHRGNN9cBD6DSkOJKzAGzsOaH/AW1FuY%0AjRg4EH/oiJSCTxYk1sDK7T86Iu9BraHED/Au9wlVkYdg2lAiC/rBhYnIB/DIUOQj2M9/UkWkCsQN%0AJbbA8l0vqIhMgXIDiZ/gFbgxEakBEwYSf8Eg+OM3gCsyA8oMRETy25UN4IjUgVEDiW2wGDSIIzIL%0AijUljsFLv3WhIvKYFphOXNO6OOUMDhKZA7qFcQF85Q6WXeQpeKEpcULlvY8xthp8iwR8I93qLLb7%0AKnOsSPWNfhd6Bro99yHqTi9IhyWzEXIsIXbSG7Djt1jbQHsBZkMkyZRs13wpgIRoiJKy7dsBWh1L%0AbN5Vt3JFQrQ2XMYeGKBk5yvSI7aRQ4k0eA4uZZlVPM47lDgTZxd6lKb4AcqkLuKSZiIdVGsiVFNc%0AxDV9yT1Orekjoe+MDw4pHqwmaJewit66Ql0QaX+DOTaZe4DitAFZxQaaEynKnJ6KCDeaQAtj3A7V%0AkBtXIpwT3iFV06zqquaKPKEtKIsM6Mo/StoWiQeMvSCJjO4+54hEwTCjuTk0STgckUm6QxTY3LgU%0AKc+/jyFrblyKCIkKbnPjSkT8HDGV5saVyBAtVHZz40Ik7HNTRtrcuBARF2tQbW5ciCR0mhvbIs2E%0AcnNjWySh29zYFGnIK25KzY1Nkdziptzc2BKJUu7Qbm5sicQom2o3NzZEKqiu/DZpbmyIjIAHNBMZ%0A7x4iTALjhcgVQSIl3v87w5vePcY/AQYAFYR6skFSqBUAAAAASUVORK5CYII="
          style="margin-top:30px"
        />
        <p style="color: rgba(0,0,0,.54);font-size: 15px;margin-top:30px">
          距离结束还有
        </p>
        <br />
        <div class="time">
          {{ countDownList }}
        </div>
      </div>

      <div class="right">
        <div class="recommend-container">
          <div class="recommend-header">
            <div class="control-part">
              <span
                @click="slidePre"
                class="control control-left"
                :class="{ disable: this.currPage === 0 }"
              >
                <i class="el-icon-arrow-left icon-arrow"></i>
              </span>
              <span
                @click="slideNext"
                class="control control-right"
                :class="{
                  disable:
                    this.currPage ===
                    Math.floor((this.recomends.length - 1) / 4)
                }"
              >
                <i class="el-icon-arrow-right icon-arrow"></i>
              </span>
            </div>
          </div>
          <div class="recommend-wrap">
            <ul class="recommend-content clearfix">
              <li
                class="recomend-item"
                v-for="(item, index) in recomends"
                :key="index"
              >
                <a :href="item.sourceUrl" target="_blank">
                  <img class="item-image" :src="item.imgUrl" alt="" />
                  <h3 class="item-name">{{ item.name }}</h3>
                  <p class="item-xinghao">{{ item.xinghao }}</p>
                  <div style="margin:0 auto;width:110px">
                    <div style="float:left;margin-right:8px">
                      <p class="item-price">{{ item.price }}元</p>
                    </div>

                    <div style="float:left">
                      <p class="item-price2">{{ item.yuanjia }}元</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <a href="https://www.mi.com/buy/detail?product_id=10000239"
        ><img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/17ae6ffbdd4156119e41dec7d85ebced.jpeg?thumb=1&w=1533&h=150&f=webp&q=90"
      /></a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      countDownList: '00时00分00秒',
      actEndTime: '2020-07-29 22:00:00',
      disprArr: [],
      currPage: 0,
      evtNextStatus: true,
      evtPreStatus: true,
      recomends: [
        {
          sourceUrl: 'https://www.mi.com/buy/seckill',
          imgUrl:
            '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/770f1eb635c33e2dcd286ff79b303a20.jpg?thumb=1&w=250&h=250',
          name: '13.3"小米笔记本Air 四核i7 8...',
          price: '1',
          xinghao: '四核i7处理器 高性能独显',
          yuanjia: '5999'
        },
        {
          sourceUrl: 'https://www.mi.com/buy/seckill',
          imgUrl:
            '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1514387870.88251945.jpg?thumb=1&w=250&h=250',
          name: '小米笔记本Air 12.5" 4G 128...',
          price: '1',
          xinghao: '轻薄长续航 超窄边框',
          yuanjia: '3500'
        },
        {
          sourceUrl: 'https://www.mi.com/buy/seckill',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b48160e1c150044808c9c8787c140750.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          name: '日常元素抽纸 青春版 24包/箱',
          price: '27.9',
          yuanjia: '32',
          xinghao: '精选原生竹浆，健康环保'
        },
        {
          sourceUrl: 'https://www.mi.com/buy/seckill',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/648c4899d76ed5730d5eceadbd180382.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          name: '小米净水器1A（厨下式） 白色',
          price: '999',
          yuanjia: '1400',
          xinghao: '小身材节省空间，大流量直出纯净水'
        },
        {
          sourceUrl: 'https://www.mi.com/buy/seckill',
          imgUrl:
            '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569238836.72564587.jpg?thumb=1&w=250&h=250',
          name: '小米真无线蓝牙耳机 Air 2 白色',
          price: '299',
          yuanjia: '399',
          xinghao: '智能真无线，轻松舒适戴'
        },
        {
          sourceUrl: 'https://www.mi.com/buy/seckill',
          imgUrl:
            '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1565262481.3597559.jpg?thumb=1&w=250&h=250',
          name: '米家变频滚筒洗衣机1A 8kg 白色',
          price: '1299',
          yuanjia: '1400',
          xinghao: '小身材大容量，洗得净'
        },
        {
          sourceUrl: 'https://www.mi.com/buy/seckill',
          imgUrl:
            '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590376140.15942354.jpg?thumb=1&w=250&h=250',
          name: ' 14 Ⅱ R5 8G 512G 银色',
          price: '3599',
          yuanjia: '3700',
          xinghao: '全面屏高性能轻薄本'
        },
        {
          sourceUrl: 'https://www.mi.com/buy/seckill',
          imgUrl:
            '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560238127.40319869.png?thumb=1&w=250&h=250',
          name: '小米手环4 NFC版 黑色',
          price: '179',
          yuanjia: '220',
          xinghao: '大屏彩显，可刷公交、门禁'
        }
      ]
    }
  },
  created() {
    this.countDown()
  },
  methods: {
    timeFormat(param) {
      return param < 10 ? '0' + param : param
    },
    countDown(it) {
      var interval = setInterval(() => {
        let newTime = new Date().getTime()
        let endTime = new Date(this.actEndTime).getTime()
        let obj = null // 如果活动未结束，对时间进行处理
        if (endTime - newTime > 0) {
          let time = (endTime - newTime) / 1000
          let day = parseInt(time / (60 * 60 * 24))
          let hou = parseInt((time % (60 * 60 * 24)) / 3600)
          let min = parseInt(((time % (60 * 60 * 24)) % 3600) / 60)
          let sec = parseInt(((time % (60 * 60 * 24)) % 3600) % 60)
          obj = {
            day: this.timeFormat(day),
            hou: this.timeFormat(hou),
            min: this.timeFormat(min),
            sec: this.timeFormat(sec)
          }
        } else {
          // 活动已结束，全部设置为'00'
          obj = {
            day: '00',
            hou: '00',
            min: '00',
            sec: '00'
          }
          clearInterval(interval)
        }
        this.countDownList = obj.hou + '时' + obj.min + '分' + obj.sec + '秒'
      }, 1000)
    },
    slideNext() {
      if (this.currPage < Math.floor((this.recomends.length - 1) / 4)) {
        this.currPage++
        $('.recommend-content').css('margin-left', this.currPage * -970 + 'px')
      }
    },
    slidePre() {
      if (this.currPage !== 0) {
        this.currPage--
        $('.recommend-content').css('margin-left', this.currPage * -970 + 'px')
      }
    }
  }
}
</script>

<style scoped>
.time {
  width: 200px;
  height: 50px;

  background: #605751;
  color: white;
  margin: auto;
  font-size: 24px;
  padding-top: 8px;
}
.big_div {
  width: 1226px;
  margin: auto;
}
.top {
  width: 100%;
  height: 57.6px;
  margin: auto;
}
.box {
  height: 100%;
}
.title {
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}
.miaosha {
  height: 340px;
  width: 100%;
}
.left {
  width: 234px;
  height: 100%;
  border-top: 1px solid brown;
  background: #f1eded;
  text-align: center;
  float: left;
}
.right {
  width: 990px;
  float: left;
}

.recommend-container {
  width: 990px;
  height: auto;
  margin: 0 auto;
  margin-left: 15px;
}
.recommend-header .title {
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}
.recommend-header .control-part .control:hover .icon-arrow {
  color: #5c5956;
}
.recommend-header .control-part .control .disable:hover .icon-arrow {
  color: #e0e0e0;
}
.recommend-header .control-part .control .disable .icon-arrow {
  color: #e0e0e0;
}
.recommend-header .control-part .control .icon-arrow {
  color: #b0b0b0;
  font-size: 18px;
  font-weight: 700;
}
.recommend-header .control-part .control {
  display: block;
  float: left;
  width: 34px;
  height: 23px;
  line-height: 23px;
  text-align: center;
  border: 1px solid #e0e0e0;
  cursor: pointer;
}

.recommend-header .control-part {
  position: absolute;
  top: -30px;
  right: 20px;
  float: left;
  display: block;
}
.recommend-header {
  position: relative;
}
.recommend-wrap {
  width: 990px;
  height: 340px;
  overflow: hidden;
}

.recommend-content .recomend-item:nth-last-child(4n + 1) {
  margin-right: 0;
}
.recommend-content .recomend-item .item-image {
  display: block;
  width: 140px;
  height: 140px;
  margin: 40px auto 15px;
}
.recommend-content .recomend-item .item-name {
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  color: rgb(107, 98, 98);
}
.recommend-content .recomend-item .item-price {
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
  color: #ff6700;

  padding-top: 30px;
}
.recommend-content .recomend-item .item-price2 {
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
  color: #afa9a5;
  padding-top: 30px;
  text-decoration: line-through;
}
.recommend-content .recomend-item .item-xinghao {
  font-size: 13px;
  text-align: center;
  color: #aaa5a5;
}
.recommend-content .recomend-item {
  float: left;
  display: block;
  width: 234px;
  height: 340px;
  margin: 0 13px 14px 0;
  font-size: 14px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s;
  border-top: 1px solid rgb(235, 132, 132);
}
.recommend-content {
  width: auto;
  height: 340px;
  transition: all 0.3s;
}
.bottom {
  width: 1226px;
  height: 145px;
  margin: 0 auto;
}
.bottom img {
  margin-top: 25px;
  width: 1226px;
  height: 120px;
}
</style>
