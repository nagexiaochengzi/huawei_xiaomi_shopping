<template>
  <div class="top-header">
    <div class="container">
      <div class="logo">
        <a href="#"></a>
      </div>
      <div class="header-navs">
        <ul class="navs">
          <li v-for="(item, index) in navs" :key="index" class="nav">
            <template v-if="item.type">
              <a
                href="javascript: void(0);"
                class="nav-item"
                @mouseenter="evtHeaderEnter(item.type)"
                @mouseleave="evtHeaderLeave()"
                >{{ item.name }}</a
              >
            </template>
            <template v-else>
              <a :href="item.sourceUrl" target="_blank" class="nav-item">{{
                item.name
              }}</a>
            </template>
          </li>
        </ul>
      </div>
      <div class="header-search">
        <ul class="hot-word" transition="fadeOut" v-show="hotStatus"></ul>
        <input
          @focus="evtIptFocus"
          @blur="evtIptBlur"
          class="search-ipt"
          type="search"
          name="search"
          value="空调"
        />
        <label class="search-btn" for="search">
          <i class="icon-search"></i>
        </label>
        <ul class="search-result clearfix">
          <li v-for="(item, index) in results" :key="index">
            <span class="item-name">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="header-menu"
      @mouseenter="evtHeaderEnter()"
      @mouseleave="evtHeaderLeave()"
      v-show="headerStatus"
      transition="fadein"
    >
      <ul class="menus clearfix">
        <li class="product" v-for="item in currentPhones" :key="item">
          <a :href="item.sourcePath">
            <img :src="item.imgUrl" alt="" class="product-img" />
          </a>
          <div class="product-name">{{ item.name }}</div>
          <div class="product-price">
            {{ item.price }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      hotStatus: true,
      headerStatus: false,
      tids: '',
      currentPhones: this.xiaomi,

      xiaomi: [
        {
          name: '小米10青春版5G',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/mi10youth',
          price: '1899元起'
        },
        {
          name: '小米10Pro',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=10000213',
          price: '4999元起'
        },
        {
          name: '小米10',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=10000214',
          price: '3799元'
        },
        {
          name: '小米MIX Alpha',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/mixalpha',
          price: '19999元'
        }
      ],
      red: [
        {
          name: 'Redmi 9',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ddc8849eaf164aac333bfd10627867f.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=10000239',
          price: '799元起'
        },
        {
          name: 'Redmi 10X 4G',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfbedb76699240a6c9a3f875b930983c.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=10000229',
          price: '999元起'
        },
        {
          name: 'Redmi 10X',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a6548361871303764d6c66142074524.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=12076',
          price: '1599元起'
        },
        {
          name: 'Redmi K30 Pro',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0203f4e7dafcc0c9016a1b48556abf30.jpg?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=10000223',
          price: '2499元起'
        },
        {
          name: 'Redmi K30 Pro 变焦版',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e95616fd1620e469386f007eeab1c763.jpg?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=10000220',
          price: '3399元'
        },
        {
          name: 'Redmi K30',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=10000220',
          price: '1399元'
        }
      ],
      computer: [
        {
          name: 'RedmiBook 16',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3e6c9a677acbb3b0c75d4d0d83e8a695.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=10000242',
          price: '4999元'
        },
        {
          name: 'RedmiBook 14 Ⅱ',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e27b3211230c2b8c21c0ef4efcbc17bc.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=10000241',
          price: '4699元'
        },
        {
          name: 'Pro 15.6" 2020款',
          imgUrl:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d712f71b3c4a3b562601c2b956a660ad.png?thumb=1&w=200&h=138',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=10000237',
          price: '5999元'
        },
        {
          name: '小米笔记本Air 13.3"',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4878fe85208eb0f5edb043717f13766a.png',
          sourcePath: 'http://www.mi.com/mibook/air13-2019',
          price: '5699元'
        },
        {
          name: '小米游戏本2019款',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/33c6a31aaee90164ce963801bec48e64.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/milaptop/gaming-2019',
          price: '6499元'
        },
        {
          name: '显示器',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f0f2175b9a6d4fdb0f0eeb843398044.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/monitor34',
          price: '2399元'
        }
      ],
      tv: [
        {
          name: '小米电视 大师 65英寸OLED',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=12049',
          price: '12999元'
        },
        {
          name: 'Redmi 智能电视 MAX 98"',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/redmitv/98',
          price: '19999元'
        },
        {
          name: '小米电视4A 60英寸',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f0f2d1079c767a834f098dd824bb6fee.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=11843',
          price: '1999元起'
        },
        {
          name: 'Redmi 智能电视 X55',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/70f6c0c28c61e8585805565e5e16da84.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=12158',
          price: '2189元'
        },
        {
          name: 'Redmi 红米电视 70英寸',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/redmitv/70',
          price: '2999元'
        },
        {
          name: '小米壁画电视 65英寸',
          imgUrl:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg?thumb=1&w=200&h=138',
          sourcePath: 'https://www.mi.com/arttv',
          price: '6999元'
        }
      ],
      jiadian: [
        {
          name: '米家互联网空调C1（一级能效）',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03dc85cd792904ddc8027b2d781beed8.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/airconditionc1/v1c1',
          price: '1999元'
        },
        {
          name: '米家互联网空调（一级能效）',
          imgUrl:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e06b219c5bced9256467b17738a943c6.png',
          sourcePath: 'https://www.mi.com/airenergy',
          price: '1999元'
        },
        {
          name: 'Redmi全自动波轮洗衣机1A 8kg',
          imgUrl:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c5d772b7c2a159c3ed7d4e31bd293f18.jpg?thumb=1&w=200&h=138',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=9509',
          price: '799元'
        },
        {
          name: '米家互联网洗烘一体机',
          imgUrl:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11b8bca444aba2994fe852993eac9203.png?thumb=1&w=200&h=138',
          sourcePath: 'https://www.mi.com/washer-dryer-10',
          price: '2199元'
        },
        {
          name: '米家风冷对开门冰箱 483L',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7a4e3ff7919ca2407ad970b78abd09a.jpg?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=10952',
          price: '2288元'
        },
        {
          name: '米家两门冰箱 160L',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/40ad6e8398095e97309a5538b516a2de.jpg?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=10949',
          price: '929元'
        }
      ],
      router: [
        {
          name: 'Redmi路由器 AX5',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/681a92d3e5f03a109558396c99f6a4df.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=12258',
          price: '249元起'
        },
        {
          name: '小米路由器 AX1800',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27da43294889d049a111e5ff2cdfafe7.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/buy/detail?product_id=12027',
          price: '329元'
        },
        {
          name: 'https://www.mi.com/r3600',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/359d3c63cc159949d8fe147a11b4bc40.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: '小米AIoT路由器 AX3600',
          price: '599元'
        },
        {
          name: 'Redmi路由器AC2100',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa1e0a4860cf40d34e1192d86691c82c.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/rm2100',
          price: '169元'
        },
        {
          name: '小米路由器AC2100',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dd23c09b7eb6471968537fdce629194.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/miwifiac',
          price: '229元'
        },
        {
          name: '小米路由器 Mesh（两只装）',
          imgUrl:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ec5be5f93ac0118aeec27b8df4337fc9.jpg?thumb=1&w=200&h=138',
          sourcePath: 'https://www.mi.com/mesh',
          price: '999元'
        }
      ],
      yingjian: [
        {
          name: '小米智能摄像机 云台版',
          imgUrl:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2a500be4264c692899b25d86c16403f7.jpg?thumb=1&w=200&h=138',
          sourcePath: 'https://www.mi.com/camera-360',
          price: '189'
        },
        {
          name: '小米小爱老师',
          imgUrl:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e3fb0886fdb13e5ae784b9713b9a0038.jpg?thumb=1&w=200&h=138',
          sourcePath: 'https://www.mi.com/aiteacher-wifi',
          price: '399元起'
        },
        {
          name: '小米米家智能门锁',
          imgUrl:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5630aa997c82409ee33b2814c7eb2244.jpg?thumb=1&w=200&h=138',
          sourcePath:
            'https://www.mi.com/buy/detail?product_id=10000155&selected=10000155&pClass=p',
          price: '1299元'
        },
        {
          name: 'Redmi小爱触屏音箱 8英寸',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dccc32d8e36685485fa89e0f2a580975.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'https://www.mi.com/redmi-xai',
          price: '349元'
        },
        {
          name: '小爱触屏音箱',
          imgUrl:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6e585a4bf5c0f744ca60f19ecd6fadf.jpg?thumb=1&w=200&h=138',
          sourcePath: 'https://www.mi.com/aispeaker-touch',
          price: '199元起'
        },
        {
          name: 'https://www.mi.com/redmiaispeaker-play',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/17c0c91317ec0def3ecc072fa9480192.png?thumb=1&w=200&h=138&f=webp&q=90',
          sourcePath: 'http://list.mi.com/accessories/tag?id=shexiangji',
          price: '79元起'
        }
      ],
      navs: [
        { name: '小米手机', type: 'xiaomi' },
        { name: 'Redmi红米', type: 'red' },
        { name: '电视', type: 'tv' },
        { name: '笔记本', type: 'computer' },
        { name: '家电', type: 'jiadian' },
        { name: '路由器', type: 'router' },
        { name: '智能硬件', type: 'yingjian' },
        { name: '服务', sourceUrl: '//www.mi.com/service/' },
        { name: '社区', sourceUrl: 'http://www.xiaomi.cn' }
      ],
      results: [
        { name: 'Redmi 9 五星高品质' },
        { name: 'Redmi 10X' },
        { name: '空调' },
        { name: '小米10' },
        { name: '冰箱' },
        { name: '全部商品' },
        { name: '米家插线板 快充版 27W' },
        { name: 'Redmi 手环' }
      ]
    }
  },
  ready() {},
  methods: {
    evtIptFocus() {
      $('.header-search').addClass('search-active')
      $('.search-result').show()
      this.hotStatus = false
    },
    evtIptBlur() {
      $('.header-search').removeClass('search-active')
      $('.search-result').hide()
      this.hotStatus = true
    },
    evtHeaderEnter(menuType) {
      if (menuType) {
        this.currentPhones = this[menuType]
      }
      this.headerStatus = true
      clearTimeout(this.tids)
    },
    evtHeaderLeave() {
      let self = this
      this.tids = setTimeout(function() {
        self.headerStatus = false
      }, 300)
    }
  },
  components: {}
}
</script>

<style scoped>
.top-header {
  width: 100%;
  height: 100px;
  background: white;
}

.container {
  position: relative;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 1226px;
  height: 100%;
  margin: 0 auto;
}

.icon-mi {
  width: 55px;
  height: 55px;
  background: url('../../assets/Mi_css_js_img/img/icon-mi.png') no-repeat;
  background-size: 100% 100%;
}

.logo {
  width: 55px;
  height: 55px;
  line-height: 0;
  background-color: #ff6600;
}
.logo a {
  display: inline-block;
  width: 110px;
  height: 55px;
}
.logo a:before {
  display: inline-block;
  width: 55px;
  height: 55px;
  content: '';
  background: url('https://s02.mifile.cn/assets/static/image/mi-logo.png')
    no-repeat center;
  background-size: 55px;
  transition: margin 0.2s;
}
.logo a:after {
  content: '';
  display: inline-block;
  width: 55px;
  height: 55px;
  background: url('https://s02.mifile.cn/assets/static/image/mi-home.png')
    no-repeat center;
  background-size: 55px;
  transition: margin 0.2s;
}

.logo a:hover:before {
  content: '';
  margin-left: -55px;
  transition: margin 0.2s;
}

.header-navs {
  position: relative;
}

.navs {
  height: 88px;
  line-height: 88px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.navs .nav {
  display: inline-block;
}
.navs .nav .nav-item {
  display: block;
  height: 88px;
  line-height: 88px;
  font-size: 16px;
  padding: 0 10px;
  text-decoration: none;
  color: #333;
}
.navs .nav .nav-item:hover {
  color: #ff6700;
}
.header-search .hot-word {
  position: absolute;
  top: 14px;
  right: 62px;
  z-index: 2;
  text-align: right;
}
.header-search .hot-word .hot-item {
  float: left;
  width: auto;
  height: 18px;
  line-height: 18px;
  padding: 0 5px;
  font-size: 12px;
  background: #eee;
  color: #757575;
  margin-right: 5px;
  cursor: pointer;
}
.header-search .hot-word .hot-item:hover {
  color: #fff;
  background: #ff6300;
}
.header-search .fadeOut-transition {
  transition: all 0.3s ease;
  opacity: 1;
}
.header-search .fadeOut-enter,
.fadeOut-leave {
  opacity: 0;
}
.header-search .search-ipt {
  float: left;
  width: 240px;
  height: 100%;
  border: 0;
  padding-left: 10px;
  outline: none;
}
.header-search .search-btn .icon-search {
  display: block;
  width: 20px;
  height: 20px;
  margin-top: 15px;
  margin-left: 15px;
  background: url('../../assets/Mi_css_js_img/img/icon-search.png') center
    center no-repeat;
  background-size: 100% 100%;
}

.header-search .search-btn:hover {
  background: #ff6700;
}
.header-search .search-btn:hover .icon-search {
  background: url('../../assets/Mi_css_js_img/img/icon-search-white.png') center
    center no-repeat;
  background-size: 100% 100%;
}
.header-search .search-btn {
  display: block;
  float: right;
  width: 50px;
  height: 100%;
  border-left: 1px solid #e0e0e0;
  cursor: pointer;
}
.header-search {
  position: absolute;
  top: 23px;
  right: 0;
  width: 295px;
  height: 50px;
  border: 1px solid #e0e0e0;
}

.search-active {
  border: 1px solid #ff6700;
}
.search-active .search-btn {
  border-left: 1px solid #ff6700;
}
.search-result li {
  padding: 7px 13px;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.search-result li .item-name {
  float: left;
  font-size: 12px;
}
.search-result li .item-num {
  float: right;
  font-size: 10px;
  color: #b0b0b0;
}
.search-result {
  display: none;
  position: absolute;
  left: -1px;
  top: 50px;
  width: 244px;
  height: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ff6700;
  z-index: 11;
  background: #fff;
}

.header-menu {
  position: absolute;
  left: 0;
  top: 140px;
  width: 100%;
  height: 230px;
  background: #fff;
  box-shadow: 0 1px 5px #ccc;
  z-index: 11;
}
.header-menu .menus {
  list-style: none;
  margin: 0;
  padding: 30px 0 0 150px;
  min-width: 1500px;
}
.header-menu .menus .product a {
  display: block;
  padding: 0 30px;
  border-right: 1px solid #ccc;
}

.header-menu .menus .product :nth-last-child(1) a {
  border-right: 0;
}
.header-menu .menus .product .product-img {
  width: 100%;
  width: 160px;
  height: 110px;
}
.header-menu .menus .product .product-name {
  width: 100%;
  height: 16px;
  margin-top: 16px;
  font-size: 12px;
  text-align: center;
}
.header-menu .menus .product .product-price {
  width: 100%;
  height: 14px;
  margin-top: 10px;
  font-size: 10px;
  text-align: center;
  color: #ff6700;
}
.header-menu .menus .product {
  float: left;
}
.fadein-transition {
  transition: all 0.3s ease-in;
  height: 230px;
  opacity: 1;
  overflow: hidden;
}

.fadein-enter,
.fadein-leave {
  height: 0;
  opacity: 0;
}
</style>
