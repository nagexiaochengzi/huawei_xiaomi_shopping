<template>
  <div>
    <div class="back_add">
      <div class="threeImg">
        <div class="Containt">
          <div class="iconleft" @click="zuohua">
            <i class="el-icon-arrow-left"></i>
          </div>
          <ul
            :style="{ left: calleft + 'px' }"
            v-on:mouseover="stopmove()"
            v-on:mouseout="move()"
          >
            <li v-for="(item, index) in superurl" :key="index">
              <img :src="item.img" />
              <div class="div_bottom">
                {{ item.t }}
              </div>
              <div class="div_bottomplus">
                <p style=" font-size:13px; ">{{ item.banben }}</p>
                <p style="color:red;font-size:13px;font-weight:700">
                  {{ item.jiage }}
                </p>
              </div>
            </li>
          </ul>
          <div class="iconright" @click="youhua">
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'slider3',
  data() {
    return {
      superurl: [
        {
          url: '',
          t: '享12期免息 晒单送好礼',
          jiage: '¥699',
          banben: 'HUAWEI FreeBuds 3 无线耳机',
          img:
            'https://res0.vmallres.com/pimages//product/6901443399048/428_428_870B6FE27F5BF4867AEAF26DA9389FDBDECC5DB85D23154Fmp.png'
        },
        {
          url: '',
          t: '最高直降700+3期免息',
          jiage: '¥1099',
          banben: '荣耀手表2',
          img:
            'https://res0.vmallres.com/pimages//product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png'
        },
        {
          url: '',
          t: '限时特惠110享3期免息',
          jiage: '¥2499',
          banben: '荣耀平板V6 Wifi6+',
          img:
            'https://res0.vmallres.com/pimages//product/6972453164537/428_428_0E83D2ABCDCF47972657D45BE58218C5A316A6AF4B47CB1Amp.png'
        },
        {
          url: '',
          t: '享12期免息',
          jiage: '¥5599',
          banben: '荣耀笔记本MagicBook Pro 2020款',
          img:
            'https://res0.vmallres.com/pimages//product/6901443395675/428_428_CF22C9F22E661EC3B9CD33B7AB0C87746BD13E3E4F2D07E6mp.png'
        },
        {
          url: '',
          t: '直降100+3期免息',
          jiage: '¥349',
          banben: 'HUAWEI FreeBuds 悦享版',
          img:
            'https://res0.vmallres.com/pimages//product/6901443289301/428_428_1558520115474mp.png'
        },
        {
          url: '',
          t: '最高直降600',
          jiage: '¥2499',
          banben: 'HUAWEI GM 眼镜新品',
          img:
            'https://res0.vmallres.com/pimages//product/6901443380114/428_428_0DAFD82FD5CBE359EADDB5FC4B64CD33415699164FFD0132mp.png'
        },
        {
          url: '',
          t: '享12期免息 晒单送好礼',
          jiage: '¥699',
          banben: 'HUAWEI FreeBuds 3 无线耳机',
          img:
            'https://res0.vmallres.com/pimages//product/6901443399048/428_428_870B6FE27F5BF4867AEAF26DA9389FDBDECC5DB85D23154Fmp.png'
        },
        {
          url: '',
          t: '最高直降700+3期免息',
          jiage: '¥1099',
          banben: '荣耀手表2',
          img:
            'https://res0.vmallres.com/pimages//product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png'
        },
        {
          url: '',
          t: '限时特惠110享3期免息',
          jiage: '¥2499',
          banben: '荣耀平板V6 Wifi6+',
          img:
            'https://res0.vmallres.com/pimages//product/6972453164537/428_428_0E83D2ABCDCF47972657D45BE58218C5A316A6AF4B47CB1Amp.png'
        },
        {
          url: '',
          t: '享12期免息',
          jiage: '¥5599',
          banben: '荣耀笔记本MagicBook Pro 2020款',
          img:
            'https://res0.vmallres.com/pimages//product/6901443395675/428_428_CF22C9F22E661EC3B9CD33B7AB0C87746BD13E3E4F2D07E6mp.png'
        }
      ],

      calleft: 0
    }
  },
  created() {
    this.move()
  },
  methods: {
    //移动
    move() {
      this.timer = setInterval(this.starmove, 15000)
    },
    //开始移动
    starmove() {
      this.calleft -= 1200
      if (this.calleft < -1200) {
        this.calleft = 0
      }
    },
    //鼠标悬停时停止移动
    stopmove() {
      clearInterval(this.timer)
    },
    //点击按钮左移
    zuohua() {
      this.calleft -= 1200
      if (this.calleft < -1200) {
        this.calleft = 0
      }
    },
    //点击按钮右移
    youhua() {
      this.calleft += 1200
      if (this.calleft > 0) {
        this.calleft = -1200
      }
    }
  }
}
</script>

<style scoped>
#divAdd {
  width: 1200px;
  margin: 0px auto;
}

.divAdd-con {
  margin: 0px auto;
  width: 1200px;
  overflow: auto;
}

.divAdd-con img {
  float: left;
}

.indexrt {
  margin: 0px 40px;
}

.divAddleft img {
  float: left;
  margin-bottom: 7px;
}

.divAddleft {
  display: inline;
}

.divAddrt {
  display: inline;
}

.divAdd-con img {
  border: none;
}

.threeImg {
  height: 280px;
  background: #fdfdfd;

  min-width: 1200px;
}

.threeImg .Containt ul {
  margin: 0 auto;
  width: 2400px;
  position: absolute;
  left: 0px;
  cursor: pointer;
  height: 100%;
}

.threeImg .Containt ul li {
  width: 230px;
  height: 240px;
  margin-right: 10px;
  margin-top: 10px;
  float: left;
  box-shadow: 3px 8px 16px rgba(194, 189, 189, 0.18);
  text-align: center;
  border-radius: 10px;
  padding-top: 25px;
}
.div_bottom {
  width: 230px;
  height: 40px;
  background: rgb(233, 230, 230);
  margin: auto;
  margin-top: 29px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-top: 7px;
  color: rgb(143, 134, 134);
}
.div_bottomplus {
  width: 230px;
  height: 60px;

  margin: auto;
  margin-top: 3px;
  padding-top: 7px;
  color: rgb(46, 42, 42);
}
.threeImg .Containt ul li img {
  height: 150px;
  width: 150px;
}

.Containt {
  position: relative;
  width: 1200px;
  height: 360px;
  overflow: hidden;
  margin: 0 auto;
}

.iconleft {
  position: absolute;
  width: 35px;
  height: 80px;
  top: 100px;
  z-index: 99999;
  padding-top: 28px;
  background-color: #ddd;
  vertical-align: middle;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
}

.iconright {
  position: relative;
  left: 1165px;
  top: 100px;
  background-color: #ddd;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 35px;
  height: 80px;

  z-index: 99999;
  padding-top: 28px;
  vertical-align: middle;
  text-align: center;
}
.iconleft:hover {
  background-color: rgb(201, 195, 195);
}

.iconright:hover {
  position: relative;

  background-color: rgb(201, 195, 195);
}
</style>
