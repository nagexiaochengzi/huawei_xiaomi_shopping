<template>
  <header class="top-container">
    <div class="top-bar clearfix">
      <div class="topbar-nav">
        <ul class="nav-wrap">
          <li v-for="(item, index) in navs" :key="index" class="nav clearfix">
            <template v-if="item.name === '小米商城'">
              <a :href="item.sourceUrl" class="nav-name">{{ item.name }}</a>
            </template>
            <template v-else>
              <a :href="item.sourceUrl" class="nav-name" target="_blank">{{
                item.name
              }}</a>
            </template>
            <span class="nav-separate" v-show="index !== 8">|</span>
          </li>
        </ul>
      </div>
      <div class="topbar-info">
        <a
          href="http://order.mi.com/site/login?redirectUrl=http://www.mi.com/index.html"
          >登陆</a
        >
        <span class="nav-separate" v-show="index !== 8">&nbsp;|&nbsp;</span>
        <a href="https://account.xiaomi.com/pass/register">注册</a>
        <span class="nav-separate" v-show="index !== 8">&nbsp;|&nbsp;</span>
        <a href="https://account.xiaomi.com/pass/register">消息通知</a>
      </div>
      <div
        class="topbar-cart fa cart-arrow-down"
        @mouseenter="evtCartEnter"
        @mouseleave="evtCartOut"
      >
        <div class="cart" :class="{ active: cartStatus }">
          <a href="http://static.mi.com/cart/">
            <i class="el-icon-shopping-cart-2"></i>
            购物车(<span>0</span>)
          </a>
        </div>
        <div class="cart-list" transition="fadein" v-show="cartStatus">
          购物车中还没有商品，赶快选购吧！
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'topmenu',
  data() {
    return {
      navs: [
        { name: '小米商城', sourceUrl: 'http://www.mi.com/index.html' },
        { name: 'MIUI', sourceUrl: 'http://www.miui.com/' },
        { name: 'IoT', sourceUrl: 'https://iot.mi.com/new/index.html' },
        { name: '云服务', sourceUrl: 'https://i.mi.com/' },
        { name: '金融', sourceUrl: 'https://jr.mi.com/?from=micom' },
        { name: '有品', sourceUrl: 'https://www.xiaomiyoupin.com/' },
        { name: '小爱开放平台', sourceUrl: 'https://xiaoai.mi.com/' },
        { name: '企业团购', sourceUrl: 'https://qiye.mi.com/' },
        {
          name: '资质证照',
          sourceUrl: 'https://www.mi.com/aptitude/list?id=41'
        },
        {
          name: '协议规则',
          sourceUrl: 'https://www.mi.com/aptitude/list?id=7'
        },
        { name: '下载app', sourceUrl: 'https://www.mi.com/appdownload' },
        { name: 'Select Location', sourceUrl: 'http://www.mi.com/index.html' }
      ],
      timer: '',
      cartStatus: false
    }
  },
  ready() {},
  methods: {
    evtCartEnter: function() {
      this.cartStatus = true
      clearInterval(this.timer)
    },
    evtCartOut: function() {
      let self = this
      this.timer = setTimeout(function() {
        self.cartStatus = false
      }, 300)
    }
  },
  components: {}
}
</script>

<style scoped>
.top-container {
  width: 100%;
  height: 40px;
  background: #333;
}
.cart {
  text-align: center;
}
.top-bar {
  position: relative;
  width: 1226px;
  margin: 0 auto;
  font-size: 12px;
  z-index: 11;
}

.topbar-nav {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
}

.nav-wrap {
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-wrap .nav {
  display: inline-block;
  text-decoration: none;
  height: 40px;
  line-height: 40px;
  padding-left: 5px;
}

.nav-wrap .nav a:hover {
  color: #fff;
}
.nav-wrap .nav .nav-name {
  display: inline-block;
  font-size: 12px;
  color: #b0b0b0;
  text-decoration: none;
}
.nav-wrap .nav .nav-separate {
  display: inline-block;
  color: #b0b0b0;
  margin-left: 5px;
}
.topbar-info {
  position: absolute;
  top: 0;
  right: 140px;
  height: 40px;
  line-height: 40px;
}
.topbar-info a {
  color: #b0b0b0;
  text-decoration: none;
}
.topbar-info a:hover {
  color: #fff;
}
.topbar-info span {
  color: #b0b0b0;
}
.topbar-cart :hover {
  background: #fff;
}
.topbar-cart :hover a,
.icon-cart,
span {
  color: #ff6700;
}
.topbar-cart .active {
  background: #fff;
}
.topbar-cart .active a {
  color: #ff6700;
}
.topbar-cart .active span {
  color: #ff6700;
}
.topbar-cart a {
  display: block;
  width: 100%;
  height: 100%;

  color: #b0b0b0;
  text-decoration: none;
  box-sizing: border-box;
}
.topbar-cart span {
  color: #b0b0b0;
}
.topbar-cart .icon-cart {
  position: absolute;
  left: 15px;
  top: 10px;
  color: #b0b0b0;
  font-size: 20px;
}
.topbar-cart {
  position: relative;
  float: right;
  width: 120px;
  background: #424242;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}

.cart-list {
  position: absolute;
  right: 0;
  top: 39px;
  width: 316px;
  height: 96px;
  line-height: 96px;
  text-align: center;
  color: #b0b0b0;
  background: #fff;
  box-shadow: 0 0 5px #ccc;
  z-index: 10;
  overflow: hidden;
}

.fadein-transition {
  transition: all 0.5s ease;
  height: 96px;
}

.fadein-enter,
.fadein-leave {
  height: 0;
}
</style>
