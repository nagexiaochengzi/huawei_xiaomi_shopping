``<template>
  <div>
    <!--可关闭图片-->
    <div class="top_close">
      <div v-show="isShow">
        <a title="华为" href="https://sale.vmall.com/honor.html"
          ><img
            src="https://res.vmallres.com/pimages//pages/picImages/55603123459512130655.jpg"
            title="华为"
        /></a>
        <button @click="showToggle" class="button-top-close">
          X
        </button>
      </div>
    </div>
    <!--顶部导航条-->
    <div class="header">
      <div class="header-top">
        <div class="layout">
          <div class="left">
            <ul>
              <li v-for="(item, index) in shortcutLeftList" :key="index">
                <a href="#">{{ item.title }}</a>
              </li>
              <li>
                <div class="s-dropdown">
                  <div class="h">
                    <a class="icon-dropdown" href="#">更多精彩</a>
                  </div>
                  <div class="b">
                    <div class="content">
                      <div class="dropdown-more w-119">
                        <dl>
                          <dt><a href="">EMUI</a></dt>
                          <dt><a href="">应用市场</a></dt>
                          <dt><a href="">华为终端云空间</a></dt>
                          <dt><a href="">开发者联盟</a></dt>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li>
                <a href="#">请登录</a>
                <a href="#">注册</a>
              </li>
              <li><a href="#">我的订单</a></li>
              <li>
                <div class="s-dropdown">
                  <div class="h">
                    <a class="icon-dropdown" href="#">客户服务</a>
                  </div>
                  <div class="b">
                    <div class="dropdown-more">
                      <dl>
                        <dt><a href="#">服务中心</a></dt>
                        <dt><a href="#">联系客服</a></dt>
                      </dl>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="s-dropdown">
                  <div class="h">
                    <a class="icon-dropdown" href="#">网站导航</a>
                  </div>
                  <div class="b">
                    <div class="dropdown-navs clearfix">
                      <div class="dropdown-navs-icon">
                        <a href="#">
                          <span>商城首页</span>
                        </a>
                      </div>
                      <div class="f1">
                        <div class="f2">
                          频道
                        </div>
                        <div class="f3">
                          <a href="#">华为专区</a>
                        </div>
                        <div class="f3">
                          <a href="#">荣耀专区</a>
                        </div>
                        <div class="f3">
                          <a href="#">企业购</a>
                        </div>
                      </div>
                      <div class="f1">
                        <div class="f2">
                          产品
                        </div>
                        <div class="f3"><a href="">手机</a></div>
                        <div class="f3"><a href="">笔记本</a></div>
                        <div class="f3"><a href="">平板</a></div>
                        <div class="f3"><a href="">智能穿戴</a></div>
                        <div class="f3"><a href="">智能家居</a></div>
                        <div class="f3"><a href="">智慧屏</a></div>
                        <div class="f3"><a href="">耳机音箱</a></div>
                        <div class="f3"><a href="">热销配件</a></div>
                        <div class="f3"><a href="">生态产品</a></div>
                        <div class="f3"><a href="">增值服务</a></div>
                      </div>
                      <div class="f1">
                        <div class="f2">
                          增值服务
                        </div>
                        <div class="f3"><a href="">以旧换新</a></div>
                        <div class="f3"><a href="">补购保障</a></div>
                        <div class="f3"><a href="">一口价换电池</a></div>
                      </div>
                      <div class="f1">
                        <div class="f2">
                          会员
                        </div>
                        <div class="f3"><a href="">会员频道</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="s-dropdown">
                  <div class="h">
                    <a class="icon-dropdown" href="#">手机版</a>
                  </div>
                  <div class="b">
                    <div class="dropdown-code">
                      <div class="clearfix dropdown-code-detail">
                        <a href="#">
                          <img
                            class="code-img"
                            src="https://res.vmallres.com/pimages//pages/cdnImages/FWETOIrFlCrX4xuB8E16.png"
                          />
                        </a>
                        <div class="code-info">
                          <h2>华为商城APP</h2>
                          <p class="red">
                            新人专享好礼
                            <br />
                            最高5000积分
                          </p>
                          <span class="icon-andrid fl mgr-5"></span>
                          <span class="icon-ios fl mgr-5"></span>
                          <span class="icon-wechat fl"></span>
                        </div>
                      </div>
                      <div class="clearfix dropdown-code-detail">
                        <a>
                          <img
                            class="code-img"
                            src="https://res.vmallres.com/pimages//sale/2018-12/6Y7SW4v4hnJ9kl9fDC9d.jpg"
                          />
                        </a>
                        <div class="code-info">
                          <h2>华为商城公众号</h2>
                          <p>微信扫一扫</p>
                          <span class="icon-wechat"></span>
                        </div>
                      </div>
                      <div class="clearfix dropdown-code-detail">
                        <a>
                          <img
                            class="code-img"
                            src="https://res.vmallres.com/pimages/sale/2018-11/20181116180507506.jpg"
                          />
                        </a>
                        <div class="code-info">
                          <h2>微信小程序</h2>
                          <span class="icon-wechat"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="s-dropdown s-dropdown-minicart">
                  <div class="h h-wide">
                    <a href="#" class="icon-minicart">
                      <span>购物车(0)</span>
                    </a>
                  </div>
                  <div class="b">
                    <div class="dropdown-minicart">
                      <div class="minicart-pro-empty">
                        <p>
                          <span class="icon-minicart"></span>
                        </p>
                        <p>您的购物车是空的，赶紧选购吧~</p>
                        <br /><br />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="layout">
          <div class="left">
            <a href="https://www.vmall.com/index.html"
              ><div class="logo"></div
            ></a>

            <div class="naver">
              <ul class="clearfix">
                <li>
                  <a href="https://www.vmall.com/huawei"
                    ><img
                      src="../../assets/HUAWEI_CSS_js_img/images/icon-1.png"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="https://sale.vmall.com/honor.html"
                    ><img
                      src="../../assets/HUAWEI_CSS_js_img/images/icon-2.png"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="#"><span>华为 P40 系列</span></a>
                </li>
                <li>
                  <a href="#"><span>荣耀30系列</span></a>
                </li>
                <li>
                  <a href="#"><span>安心居家</span></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div class="search">
              <input type="text" />
              <span class="iconfont search-icon">&#xe603;</span>
              <div class="search-key">
                <p>P40</p>
                <p>荣耀30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      isShow: true,
      shortcutLeftList: [
        {
          title: '首页'
        },
        {
          title: '华为官网'
        },
        {
          title: '荣耀官网'
        },
        {
          title: '花粉俱乐部'
        },
        {
          title: 'V码(优购码)'
        },
        {
          title: '企业购'
        },
        {
          title: 'Select Region'
        }
      ]
    }
  },
  methods: {
    showToggle() {
      this.isShow = !this.isShow
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped></style>
