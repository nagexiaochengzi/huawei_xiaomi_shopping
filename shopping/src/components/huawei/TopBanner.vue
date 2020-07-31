<template>
  <div class="top-banner clearfix">
    <div class="site-category" @mouseleave="evtSideLeave">
      <div class="top-side-left">
        <ul class="side-left">
          <li
            class="side-item"
            @mouseenter="evtSideEnter(item.type)"
            v-for="(item, index) in sideItems"
            :key="index"
          >
            {{ item.content }}
            <div style="float:right;padding-right:25px">
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
        </ul>
      </div>
      <div class="site-category-detail" v-show="goodsStatus">
        <ul
          class="category-items"
          v-for="(goods, index) in filterCurrGoods"
          :key="index"
        >
          <li
            class="category-goods"
            v-for="(item, index) in goods"
            :key="index"
          >
            <a class="goods-link" :href="item.sourceUrl">
              <img
                :src="item.imgUrl"
                alt=""
                style="margin-left:15px;width:48px;height:48px"
              />
              <div class="text-name">
                {{ item.name }}
              </div>
            </a>
          </li>
        </ul>
        <a href="https://www.vmall.com/list-36"
          ><div class="dd1">
            <img
              src="../../assets/HUAWEI_CSS_js_img/images/all.png"
              width="100%"
            /></div
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currGoods: [],
      goodsStatus: false,
      sideItems: [
        { type: 'phones', content: '手机' },
        { type: 'computer', content: '笔记本' },
        { type: 'pingban', content: '平板' },
        { type: 'VR', content: '智能穿戴&VR' },
        { type: 'jiaju', content: '智能家居' },
        { type: 'ping', content: '智慧屏' },
        { type: 'erji', content: '耳机音箱' },
        { type: 'peijian', content: '配件' },
        { type: 'product', content: '生态产品' },
        { type: 'others', content: '增值服务&其他' }
      ],

      phones: [
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Dfv6Z1jNUpkSdQEfjU40.png',
          name: 'HUAWEI P系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/emEoURCoAws3bwrIgjI8.png',
          name: 'HUAWEI Mate系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/JtWD6wvaxu0qmHbN2tbO.png',
          name: 'HUAWEI nova系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-275',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/wJHIfRVWj3kjLp9RoTBN.png',
          name: '华为畅享系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-36',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Ij4d8D0psfX5qo36dANk.png',
          name: 'HUAWEI 麦芒系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/J0jm7RuLopoqLL6j9nWc.png',
          name: '荣耀V系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/BcIFunByzSBaydhI8X8T.png',
          name: '荣耀HONOR系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/1NS2TBQr6a8EXKAJ8L4y.png',
          name: '荣耀X系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-77',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/RekgcFmB36D9LlwLKmtt.png',
          name: '荣耀Play系列'
        }
      ],
      computer: [
        {
          sourceUrl: 'https://www.vmall.com/list-676',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/RfnzRjvwIx1VTVm8xHfk.png',
          name: '华为 MateBook X系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-676',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/plqBwqiWNT7w3S1oHify.png',
          name: '华为 MateBook系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-676',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/tDI1s1C6u0UNK3kpjX35.png',
          name: '华为 MateBook D系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-676',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/w1o5IBLA7nNHhuMb2wTl.png',
          name: '荣耀MagicBook系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-676',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/hTG8axcpAcm4rlc953p1.png',
          name: '荣耀MagicBook PRO系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-36',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Ij4d8D0psfX5qo36dANk.png',
          name: 'HUAWEI 麦芒系列'
        }
      ],
      pingban: [
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Dfv6Z1jNUpkSdQEfjU40.png',
          name: 'HUAWEI P系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/emEoURCoAws3bwrIgjI8.png',
          name: 'HUAWEI Mate系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/JtWD6wvaxu0qmHbN2tbO.png',
          name: 'HUAWEI nova系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-275',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/wJHIfRVWj3kjLp9RoTBN.png',
          name: '华为畅享系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-36',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Ij4d8D0psfX5qo36dANk.png',
          name: 'HUAWEI 麦芒系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/J0jm7RuLopoqLL6j9nWc.png',
          name: '荣耀V系列'
        }
      ],
      VR: [
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Dfv6Z1jNUpkSdQEfjU40.png',
          name: 'HUAWEI P系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/emEoURCoAws3bwrIgjI8.png',
          name: 'HUAWEI Mate系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/JtWD6wvaxu0qmHbN2tbO.png',
          name: 'HUAWEI nova系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-275',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/wJHIfRVWj3kjLp9RoTBN.png',
          name: '华为畅享系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-36',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Ij4d8D0psfX5qo36dANk.png',
          name: 'HUAWEI 麦芒系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/J0jm7RuLopoqLL6j9nWc.png',
          name: '荣耀V系列'
        }
      ],
      jiaju: [
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Dfv6Z1jNUpkSdQEfjU40.png',
          name: 'HUAWEI P系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/emEoURCoAws3bwrIgjI8.png',
          name: 'HUAWEI Mate系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/JtWD6wvaxu0qmHbN2tbO.png',
          name: 'HUAWEI nova系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-275',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/wJHIfRVWj3kjLp9RoTBN.png',
          name: '华为畅享系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-36',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Ij4d8D0psfX5qo36dANk.png',
          name: 'HUAWEI 麦芒系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/J0jm7RuLopoqLL6j9nWc.png',
          name: '荣耀V系列'
        }
      ],
      ping: [
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Dfv6Z1jNUpkSdQEfjU40.png',
          name: 'HUAWEI P系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/emEoURCoAws3bwrIgjI8.png',
          name: 'HUAWEI Mate系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/JtWD6wvaxu0qmHbN2tbO.png',
          name: 'HUAWEI nova系列'
        }
      ],
      erji: [
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Dfv6Z1jNUpkSdQEfjU40.png',
          name: 'HUAWEI P系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/emEoURCoAws3bwrIgjI8.png',
          name: 'HUAWEI Mate系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/JtWD6wvaxu0qmHbN2tbO.png',
          name: 'HUAWEI nova系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-275',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/wJHIfRVWj3kjLp9RoTBN.png',
          name: '华为畅享系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-36',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Ij4d8D0psfX5qo36dANk.png',
          name: 'HUAWEI 麦芒系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/J0jm7RuLopoqLL6j9nWc.png',
          name: '荣耀V系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/BcIFunByzSBaydhI8X8T.png',
          name: '荣耀HONOR系列'
        }
      ],
      peijian: [
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Dfv6Z1jNUpkSdQEfjU40.png',
          name: 'HUAWEI P系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/emEoURCoAws3bwrIgjI8.png',
          name: 'HUAWEI Mate系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/JtWD6wvaxu0qmHbN2tbO.png',
          name: 'HUAWEI nova系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-275',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/wJHIfRVWj3kjLp9RoTBN.png',
          name: '华为畅享系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-36',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Ij4d8D0psfX5qo36dANk.png',
          name: 'HUAWEI 麦芒系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/J0jm7RuLopoqLL6j9nWc.png',
          name: '荣耀V系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/BcIFunByzSBaydhI8X8T.png',
          name: '荣耀HONOR系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/1NS2TBQr6a8EXKAJ8L4y.png',
          name: '荣耀X系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/BcIFunByzSBaydhI8X8T.png',
          name: '荣耀HONOR系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/1NS2TBQr6a8EXKAJ8L4y.png',
          name: '荣耀X系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/BcIFunByzSBaydhI8X8T.png',
          name: '荣耀HONOR系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/1NS2TBQr6a8EXKAJ8L4y.png',
          name: '荣耀X系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/BcIFunByzSBaydhI8X8T.png',
          name: '荣耀HONOR系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/1NS2TBQr6a8EXKAJ8L4y.png',
          name: '荣耀X系列'
        }
      ],
      product: [
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Dfv6Z1jNUpkSdQEfjU40.png',
          name: 'HUAWEI P系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/emEoURCoAws3bwrIgjI8.png',
          name: 'HUAWEI Mate系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/JtWD6wvaxu0qmHbN2tbO.png',
          name: 'HUAWEI nova系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-275',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/wJHIfRVWj3kjLp9RoTBN.png',
          name: '华为畅享系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-36',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Ij4d8D0psfX5qo36dANk.png',
          name: 'HUAWEI 麦芒系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/J0jm7RuLopoqLL6j9nWc.png',
          name: '荣耀V系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/BcIFunByzSBaydhI8X8T.png',
          name: '荣耀HONOR系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/1NS2TBQr6a8EXKAJ8L4y.png',
          name: '荣耀X系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/BcIFunByzSBaydhI8X8T.png',
          name: '荣耀HONOR系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/1NS2TBQr6a8EXKAJ8L4y.png',
          name: '荣耀X系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/BcIFunByzSBaydhI8X8T.png',
          name: '荣耀HONOR系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/1NS2TBQr6a8EXKAJ8L4y.png',
          name: '荣耀X系列'
        }
      ],
      others: [
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Dfv6Z1jNUpkSdQEfjU40.png',
          name: 'HUAWEI P系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/emEoURCoAws3bwrIgjI8.png',
          name: 'HUAWEI Mate系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/JtWD6wvaxu0qmHbN2tbO.png',
          name: 'HUAWEI nova系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-275',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/wJHIfRVWj3kjLp9RoTBN.png',
          name: '华为畅享系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-36',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/Ij4d8D0psfX5qo36dANk.png',
          name: 'HUAWEI 麦芒系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-285',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/J0jm7RuLopoqLL6j9nWc.png',
          name: '荣耀V系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-76',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/BcIFunByzSBaydhI8X8T.png',
          name: '荣耀HONOR系列'
        },
        {
          sourceUrl: 'https://www.vmall.com/list-277',

          imgUrl:
            'https://res.vmallres.com/pimages//pages/frontCategory/1NS2TBQr6a8EXKAJ8L4y.png',
          name: '荣耀X系列'
        }
      ]
    }
  },
  ready() {},
  computed: {
    filterCurrGoods: function() {
      let filterGoods = [[], [], [], [], []]
      this.currGoods.forEach(function(item, index) {
        let goodsIndex = Math.floor(index / 5)
        filterGoods[goodsIndex].push(item)
      })
      return filterGoods
    }
  },
  methods: {
    evtSideEnter(currType) {
      this.currGoods = this[currType]
      this.goodsStatus = true
    },
    evtSideLeave() {
      this.goodsStatus = false
    }
  }
}
</script>

<style scoped>
.dd1 {
  width: 220px;
  height: 55px;
  position: absolute;
  right: 40px;
  bottom: 30px;
}
.top-banner {
  position: relative;
  width: 1226px;
  height: auto;
  margin: 0 auto;
}
.site-category {
  position: absolute;
  left: 13px;
  width: 200px;
  height: auto;
  background: rgb(248, 246, 248);
  z-index: 110;
  border-radius: 10px;
}

.side-left {
  margin: 0;
  padding: 0;
  width: 200px;
  height: 460px;
  list-style: none;
  box-shadow: 3px 8px 16px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
}
.side-left .side-item {
  width: 100%;
  height: 46px;
  line-height: 46px;
  font-size: 14px;
  color: rgb(70, 66, 66);
  text-align: left;
  padding-left: 15px;
  cursor: pointer;
}
.side-left .side-item:hover {
  background: #ffffff;
}

.site-category-detail {
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  left: 200px;
  top: 0;
  z-index: 10;
  box-shadow: 3px 8px 16px rgba(0, 0, 0, 0.18);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.category-items {
  width: auto;
  height: 460px;
  margin: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0;
  list-style: none;
  background: #fff;
}
.category-goods {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 265px;
  height: 92px;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
  background: #fff;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.category-goods :hover {
  background: #f1f1f0;
  border-radius: 10px;
}
.goods-link {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 220px;
  height: 60px;
}
.text-name {
  padding-left: 10px;
  font-size: 14px;
}
</style>
