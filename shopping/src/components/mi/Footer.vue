<template>
  <div style=" width: 100%; height: 550px;background: #fff;">
    <div class="big_div">
      <div class="top">
        <ul>
          <li v-for="(toptext, index) in top" :key="index">
            <a :href="toptext.sourceUrl">
              <div class="top_title">
                <img :src="toptext.iconUrl" />
                <p>{{ toptext.title }}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="middle">
        <ul>
          <li v-for="(middletext, index) in middle" :key="index">
            <div class="middle_left" style="width:162.5px">
              <p>{{ middletext.title }}</p>
              <a href="#">
                <div class="middle_left_child">
                  <p>{{ middletext.text1 }}</p>
                  <p>{{ middletext.text2 }}</p>
                  <p>{{ middletext.text3 }}</p>
                  <p>{{ middletext.text4 }}</p>
                  <p>{{ middletext.text5 }}</p>
                  <p>{{ middletext.text6 }}</p>
                </div>
              </a>
            </div>
          </li>
        </ul>
        <div class="middle_right">
          <p class="p1">400-100-5678</p>
          <p class="p2">8:00-18:00（仅收市话费）</p>
          <a
            href="https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fsupport.kefu.mi.com%2Fsts%3Fsign%3DQ5LV3LAHLEkHqzc4pPXRGLlgGek%253D%26followup%3Dhttp%253A%252F%252Fsupport.kefu.mi.com%252Fpage%252Findex%252Fv2%253Ftag%253Dcn%2526token%253DY24ud2ViLm1pLmh0dHBzLm1vYmlsZSNyZWZlcmVy&sid=mcc_chat_fe"
            ><div class="kefubtn">
              <i class="el-icon-chat-dot-square">人工客服</i>
            </div></a
          >
          <div class="service-code clearfix">
            <h2>关注小米：</h2>
            <ul>
              <li class="iconfont">
                <a href="javascript:void(0);"></a>
                <div class="service-code-img">
                  <img
                    src="//cnbj1.fds.api.xiaomi.com/staticsfile/global/wx-img.png"
                    alt=""
                  />
                </div>
              </li>

              <li class="iconfont">
                <a href=""></a>
              </li>
              <li class="iconfont">
                <a href=""></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li v-for="(bottomtext, index) in bottom" :key="index">
            <div style="float:left">
              <a :href="bottomtext.url"> {{ bottomtext.text }} </a>
            </div>
            <div style="float:left">
              <p>{{ bottomtext.shu }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: [
        {
          sourceUrl: 'https://www.mi.com/service/quick-repair',
          iconUrl: 'http://www.miaojz.top/%E9%A2%84%E7%BA%A6.jpg',
          title: '预约维修服务'
        },
        {
          sourceUrl: 'https://www.mi.com/service/exchange#back',
          iconUrl: 'http://www.miaojz.top/7.png',
          title: '7天无理由退货'
        },
        {
          sourceUrl: 'https://www.mi.com/service/exchange#back',
          iconUrl: 'http://www.miaojz.top/15.png',
          title: '15天免费换货'
        },
        {
          sourceUrl: 'https://www.mi.com/service/buy/Postal%20policy',
          iconUrl: 'http://www.miaojz.top/99.png',
          title: '满99元包邮'
        },
        {
          sourceUrl: 'https://www.mi.com/static/maintainlocation',
          iconUrl: 'http://www.miaojz.top/520.png',
          title: '520余家售后网点'
        }
      ],
      middle: [
        {
          title: '帮助中心',
          text1: '账户管理',
          text2: '购物指南',
          text3: '订单操作'
        },
        {
          title: '服务支持',
          text1: '售后政策',
          text2: '自助服务',
          text3: '相关下载'
        },
        {
          title: '线下门店',
          text1: '小米之家',
          text2: '服务网点',
          text3: '授权体验店'
        },
        {
          title: '关于小米',
          text1: '了解小米',
          text2: '加入小米',
          text3: '投资者关系',
          text4: '企业社会责任',
          text5: '廉洁举报'
        },
        {
          title: '关注我们',
          text1: '新浪微博',
          text2: '官方微信',
          text3: '联系我们',
          text4: '公益基金会'
        },
        {
          title: '特色服务',
          text1: 'F码通道',
          text2: '礼物码',
          text3: '防伪查询'
        }
      ],
      bottom: [
        {
          text: '小米商城',
          url: 'https://www.mi.com/index.html',
          shu: '|'
        },
        {
          text: 'MIUI',
          url: 'https://home.miui.com/',
          shu: '|'
        },
        {
          text: '米家',
          url: 'https://home.mi.com/index.html',
          shu: '|'
        },
        {
          text: '米聊',
          url: 'http://www.miliao.com/',
          shu: '|'
        },
        {
          text: '多看',
          url: 'https://www.duokan.com/',
          shu: '|'
        },
        {
          text: '游戏',
          url: 'https://game.xiaomi.com/',
          shu: '|'
        },
        {
          text: '政企服务',
          url: 'https://b.mi.com/?client_id=180100031058&masid=17409.0358',
          shu: '|'
        },
        {
          text: '小米天猫店',
          url: 'https://xiaomi.tmall.com/',
          shu: '|'
        },
        {
          text: '小米集团隐私政策',
          url: 'https://privacy.mi.com/all/zh_CN/',
          shu: '|'
        },
        {
          text: '小米公司儿童信息保护规则',
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f516fe9e2c01.html',
          shu: '|'
        },
        {
          text: '小米商城隐私政策',
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ded8d0e4a77d.html',
          shu: '|'
        },
        {
          text: '小米商城用户协议',
          url: 'https://www.mi.com/about/user-agreement/',
          shu: '|'
        },
        {
          text: '问题反馈',
          url: 'https://static.mi.com/feedback/',
          shu: '|'
        },
        {
          text: 'Select Location',
          url: 'https://www.mi.com/index.html',
          shu: ''
        }
      ]
    }
  }
}
</script>

<style>
.big_div {
  width: 1226px;
  height: 500px;
  margin: 0 auto;
}
.top {
  width: 100%;
  height: 79px;
  border-bottom: 1px solid #e0e0e0;
}
.top ul li {
  float: left;
}
.top .top_title img {
  width: 35px;
  height: 35px;
  position: absolute;
  margin-left: -87px;
  padding-top: -5px;
}
.top_title {
  text-align: center;
  width: 245.2px;
  height: 30px;
  border-right: 1px solid #e0e0e0;
  margin-top: 23px;
}
.top_title p {
  padding-top: 5px;
  font-size: 16px;
  color: #616161;
}
.top_title p:hover {
  color: #d67d4a;
}
.middle {
  width: 1226px;
  height: 272px;
  margin: 0 auto;
  padding-top: 40px;
}
.middle_right {
  float: right;
  width: 251px;
  height: 110.2px;
  border-left: 1px solid #e0e0e0;
  text-align: center;
}
.middle_right .p1 {
  font-size: 22px;
  line-height: 1;
  color: #ff6700;
}
.middle_right .p2 {
  margin: 0 0 5px 0;
  font-size: 12px;
  color: rgb(100, 94, 94);
}
.middle_right .kefubtn {
  border-color: #ff6700;
  background: #fff;
  color: #ff6700;
  border: 1px solid #b0b0b0;
  width: 118px;
  height: 28px;
  font-size: 14px;
  line-height: 28px;
  margin: 0 auto;
}
.middle_right .kefubtn:hover {
  background: #ff6700;
  color: white;
  transition: all 0.4s;
}
.middle_left {
  font-size: 14px;
  line-height: 1.25;
  color: #424242;
}
.middle ul li {
  float: left;
}
.middle_left_child {
  margin-top: 20px;
}
.middle_left_child p {
  font-size: 12px;
  color: #757575;
  padding-top: 10px;
}
.middle_left_child p:hover {
  color: #ff6700;
}
.bottom {
  width: 1226px;
  height: 21.6px;
  margin: 0 auto;
}
.bottom ul li {
  float: left;
}
.bottom ul li a {
  font-size: 14px;
  color: #757575;
}
.bottom ul li p {
  font-size: 14px;
  color: #757575;
  padding-left: 5px;
  padding-right: 5px;
}
.bottom ul li a:hover {
  color: #ff6700;
}
</style>
