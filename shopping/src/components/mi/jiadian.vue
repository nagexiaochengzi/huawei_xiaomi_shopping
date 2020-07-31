<template>
  <div class="around-container">
    <div class="goods-top clearfix">
      <h3 class="top-title">{{ topTitle }}</h3>
      <ul class="top-sub">
        <li
          v-for="(sub, index) in subs"
          :key="index"
          :class="{ active: topSubStatus === sub.key }"
          @mouseenter="topSubEnter(sub.key)"
        >
          {{ sub.name }}
        </li>
      </ul>
    </div>
    <div class="goods-content clearfix">
      <goods-left :left-goods="leftGoods"></goods-left>
      <goods-right :curr-goods="currGoods"></goods-right>
    </div>
    <div class="bottom">
      <a href="https://www.mi.com/buy/detail?product_id=10025"
        ><img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e8fc8ba9718c266882719fb4bbcedd.jpg?thumb=1&w=1533&h=150&f=webp&q=90"
      /></a>
    </div>
  </div>
</template>

<script>
import left from '../public/left'
import right from '../public/right'

export default {
  data() {
    return {
      topTitle: '家电',
      subs: [
        { name: '热门', key: 'hot' },
        { name: '电视影音', key: 'tv' }
      ],
      currGoods: [],
      topSubStatus: 'hot',
      leftGoods: [
        {
          sourceUrl: 'https://www.mi.com/buy/detail?product_id=12159',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f256b81e4233333692eece77ed06ebc2.jpg?thumb=1&w=293&h=375&f=webp&q=90'
        },
        {
          sourceUrl: 'https://www.mi.com/buy/detail?product_id=11843',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e22cf675726deb5eb728f2ccd4cbeafd.jpg?thumb=1&w=293&h=375&f=webp&q=90'
        }
      ],
      hot: [
        {
          sourceUrl: 'https://www.mi.com/redmitv/70',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: 'Redmi 红米电视 70英寸',
          price: '2999元',
          oldPrice: '3799元',
          discountType: 'discount',
          xinghao: '70英寸震撼巨屏，4K画质，细腻如真'
        },
        {
          sourceUrl: 'https://www.mi.com/mitvall-screen/e32c/',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '小米全面屏电视E32C',
          price: '699元',
          oldPrice: '899元',
          discountType: 'discount',
          xinghao: '全面屏设计，人工智能系统'
        },
        {
          sourceUrl: 'https://www.mi.com/mitvall-screen/e55a/',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '小米全面屏电视E55A',
          price: '1799元',
          discountType: 'discount',
          oldPrice: '1999元',
          xinghao: '全面屏设计，人工智能语音'
        },
        {
          sourceUrl: 'https://www.mi.com/aircondition/f3w1/',
          imgUrl:
            '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
          title: '米家空调',
          price: '1499元',
          discountType: 'discount',
          oldPrice: '1799元',
          xinghao: '出众静音，快速制冷热'
        },
        {
          sourceUrl: 'https://www.mi.com/buy?product_id=9963',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '米家互联网洗烘一体机 Pro 10kg',
          price: '2999元',
          discountType: 'discount',
          oldPrice: '',
          xinghao: '智能洗烘，省心省力'
        },
        {
          sourceUrl: 'https://www.mi.com/buy?product_id=9509',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: 'Redmi全自动波轮洗衣机1A 8kg',
          price: '799元',
          discountType: 'discount',
          oldPrice: '899元',
          xinghao: '一键操作，父母都爱用'
        },
        {
          sourceUrl: 'https://www.mi.com/buy?product_id=10253',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd2aa2dcad6440b469c22e27db9b6236.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '15.6" 四核i7 16G 独显 512G',
          price: '4699元',
          discountType: 'discount',
          oldPrice: '4899元',
          xinghao: '全面均衡的国民轻薄本'
        },
        {
          moreUrl: 'https://www.mi.com/p/3469.html',
          sourceUrl: 'http://www.mi.com/mibook/air13-2019',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg?thumb=1&w=125&h=125&f=webp&q=90',
          title: 'Air 13.3" 2019款 ',
          price: '5699元起'
        }
      ],

      tv: [
        {
          sourceUrl: 'https://www.mi.com/redmitv/70',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3483b4ec83f3d085c567633f2edef1c1.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: 'Redmi 红米电视 70英寸',
          price: '2999元',
          oldPrice: '3799元',
          discountType: 'discount',
          xinghao: '70英寸震撼巨屏，4K画质，细腻如真'
        },
        {
          sourceUrl: 'https://www.mi.com/mitvall-screen/e32c/',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f193daba3989eadac5e13ae102b91582.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '小米全面屏电视E32C',
          price: '699元',
          oldPrice: '899元',
          discountType: 'discount',
          xinghao: '全面屏设计，人工智能系统'
        },
        {
          sourceUrl: 'https://www.mi.com/mitvall-screen/e55a/',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '小米全面屏电视E55A',
          price: '1799元',
          discountType: 'discount',
          oldPrice: '1999元',
          xinghao: '全面屏设计，人工智能语音'
        },
        {
          sourceUrl: 'https://www.mi.com/aircondition/f3w1/',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8156dec11073b1f98db8e4b7598262a4.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '米家空调',
          price: '1499元',
          discountType: 'discount',
          oldPrice: '1799元',
          xinghao: '出众静音，快速制冷热'
        },
        {
          sourceUrl: 'https://www.mi.com/buy?product_id=9963',
          imgUrl:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e2127506fd2209f3115828404269d45.jpg?thumb=1&w=250&h=250',
          title: '米家互联网洗烘一体机 Pro 10kg',
          price: '2999元',
          discountType: 'discount',
          oldPrice: '',
          xinghao: '智能洗烘，省心省力'
        },
        {
          sourceUrl: 'https://www.mi.com/buy?product_id=9509',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a3d09cb5b895f8c3706f513552cd53d.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: 'Redmi全自动波轮洗衣机1A 8kg',
          price: '799元',
          discountType: 'discount',
          oldPrice: '899元',
          xinghao: '一键操作，父母都爱用'
        },
        {
          sourceUrl: 'https://www.mi.com/buy?product_id=10253',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '15.6" 四核i7 16G 独显 512G',
          price: '4699元',
          discountType: 'discount',
          oldPrice: '4899元',
          xinghao: '全面均衡的国民轻薄本'
        },
        {
          moreUrl: 'https://www.mi.com/p/3469.html',
          sourceUrl: 'http://www.mi.com/mibook/air13-2019',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7eee530e4a103f2f5a0937a14bed53.jpg?thumb=1&w=125&h=125&f=webp&q=90',
          title: 'Air 13.3" 2019款 ',
          price: '5699元起'
        }
      ]
    }
  },
  ready() {
    this.currGoods = this.hot
  },
  methods: {
    topSubEnter(key) {
      this.topSubStatus = key
      this.currGoods = this[key]
    }
  },
  components: {
    'goods-left': left,
    'goods-right': right
  }
}
</script>

<style>
.around-container {
  width: 1226px;
  height: auto;
  margin: 0 auto;
}
.goods-content {
  width: 1226px;
  height: auto;
  margin: 0 auto;
}
.goods-top {
  width: 100%;
  height: 58px;
}
.goods-top .top-title {
  float: left;
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}
.goods-top .top-sub {
  float: right;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  margin-top: 16px;
  color: #424242;
}
.goods-top .top-sub li {
  width: auto;
  height: 24px;
  line-height: 24px;
  margin-left: 30px;
  cursor: pointer;
  border-bottom: 2px solid #f5f5f5;
}
.goods-top .top-sub li:hover {
  color: #ff6700;
  border-bottom: 2px solid #ff6700;
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
