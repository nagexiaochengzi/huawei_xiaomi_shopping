<template>
  <div>
    <div class="right">
      <ul>
        <li v-for="(rightnav, index) in right" :key="index">
          <a :href="rightnav.sourceUrl"
            ><div class="right_child">
              <i :class="rightnav.icons"></i><br />
              {{ rightnav.title }}
            </div>
            <div class="right_left" v-if="rightnav.show">
              <img :src="rightnav.weixin" />
              <div style="width:80px;margin:auto ">
                <p>{{ rightnav.weixin_text }}</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <a href="#top"
      ><div class="right_bottom" v-if="top" @click="tops()">
        一<br />
        <i class="el-icon-top"></i><br />
        回到顶部
      </div></a
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      right: [
        {
          sourceUrl:
            'https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fservice.order.mi.com%2Flogin%2Fcallback%3Ffollowup%3D%252F%252Fservice.order.mi.com%252Fapply%252Ffront%26sign%3DNjRkMTk5NGZkMjBkM2MzZWZjMDBmNTRlNjgwNmYyNmU4ZDViZDZhZg%2C%2C&sid=mi_eshop&_bannerBiz=mistore&_qrsize=180',
          icons: 'el-icon-mobile',
          weixin:
            'https://i8.mifile.cn/b2c-mimall-media/93650133310ec1c385487417a472a26c.png',
          weixin_text: '扫码领取新人百元礼包',
          title: '手机app',
          show: true
        },
        {
          sourceUrl:
            'https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fservice.order.mi.com%2Flogin%2Fcallback%3Ffollowup%3D%252F%252Fservice.order.mi.com%252Fapply%252Ffront%26sign%3DNjRkMTk5NGZkMjBkM2MzZWZjMDBmNTRlNjgwNmYyNmU4ZDViZDZhZg%2C%2C&sid=mi_eshop&_bannerBiz=mistore&_qrsize=180',
          icons: 'el-icon-user',

          title: '个人中心'
        },
        {
          sourceUrl:
            'https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fservice.order.mi.com%2Flogin%2Fcallback%3Ffollowup%3D%252F%252Fservice.order.mi.com%252Fapply%252Ffront%26sign%3DNjRkMTk5NGZkMjBkM2MzZWZjMDBmNTRlNjgwNmYyNmU4ZDViZDZhZg%2C%2C&sid=mi_eshop&_bannerBiz=mistore&_qrsize=180',
          icons: 'el-icon-setting',
          title: '售后服务'
        },
        {
          sourceUrl:
            'https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fservice.order.mi.com%2Flogin%2Fcallback%3Ffollowup%3D%252F%252Fservice.order.mi.com%252Fapply%252Ffront%26sign%3DNjRkMTk5NGZkMjBkM2MzZWZjMDBmNTRlNjgwNmYyNmU4ZDViZDZhZg%2C%2C&sid=mi_eshop&_bannerBiz=mistore&_qrsize=180',
          icons: 'el-icon-service',
          title: '人工客服'
        },
        {
          sourceUrl:
            'https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fservice.order.mi.com%2Flogin%2Fcallback%3Ffollowup%3D%252F%252Fservice.order.mi.com%252Fapply%252Ffront%26sign%3DNjRkMTk5NGZkMjBkM2MzZWZjMDBmNTRlNjgwNmYyNmU4ZDViZDZhZg%2C%2C&sid=mi_eshop&_bannerBiz=mistore&_qrsize=180',
          icons: 'el-icon-shopping-cart-1',
          title: '购物车'
        }
      ],
      top: false
    }
  },
  methods: {
    tops() {
      var timer = setInterval(
        () =>
          document.documentElement.scrollTop <= 0
            ? clearInterval(timer)
            : window.scrollTo(0, document.documentElement.scrollTop - 10),
        17
      )
    }
  },
  mounted() {
    var THIS = this
    window.addEventListener('scroll', function() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop

      if (scrollTop >= 680) {
        THIS.top = true
      } else {
        THIS.top = false
      }
    })
  }
}
</script>
<style scoped>
.right {
  float: right;
  width: 84px;
  height: 450px;
  position: fixed;
  margin-top: 90px;
  right: 0px;
  z-index: 333;
  background: white;
}
.right_child {
  padding-top: 20px;
  color: #757575;
  width: 82px;
  height: 90px;
  text-align: center;
  border: 1px solid #f5f5f5;
  font-size: 14px;
}
.right_child i {
  font-size: 30px;
  padding-bottom: 6px;
}
.right_child:hover {
  transition: opacity 0.3s;
  color: #ff6700;
}
.right_left {
  padding: 14px;
  background: #fff;
  border: 1px solid #f5f5f5;
  position: fixed;
  margin-top: -85px;
  right: 105px;
  z-index: 555;
  width: 130px;
  height: 170px;
  display: none;
}
.right_left img {
  width: 100px;
  height: 100px;
  margin: auto;
}
.right_left p {
  color: #757575;
}

.right_child:hover + div {
  display: block;
}
.right_bottom {
  float: right;
  width: 84px;
  height: 90px;
  position: fixed;
  margin-top: 590px;
  right: 0px;
  z-index: 333;
  background: white;
  padding-top: 5px;
  color: #757575;
  text-align: center;
  border: 1px solid #f5f5f5;
  font-size: 14px;
}
.right_bottom i {
  font-size: 30px;
  padding-bottom: 6px;
}
.right_bottom:hover {
  transition: opacity 0.3s;
  color: #ff6700;
}
</style>
