<template>
  <div style="background: white;">
    <br />
    <div class="top-sub">
      <div class="sub-1">
        <ul class="channels">
          <li class="channel">
            <a href="https://www.mi.com/buy/seckill" target="_blank">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png"
                class="sub-icon"
              />
              <p class="channel-txt">
                小米秒杀
              </p>
            </a>
          </li>
          <div class="line-vertical"></div>
          <li class="channel">
            <a href="http://qiye.mi.com/" target="_blank">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png"
                class="sub-icon"
              />
              <p class="channel-txt">
                企业团购
              </p>
            </a>
          </li>
          <div class="line-vertical"></div>
          <li class="channel">
            <a href="https://www.mi.com/order/fcode" target="_blank">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48"
                class="sub-icon"
              />
              <p class="channel-txt">
                F码通道
              </p>
            </a>
          </li>
          <div class="line-horizontal"></div>
          <div class="line-horizontal"></div>
          <div class="line-horizontal"></div>
          <li class="channel">
            <a href="https://www.mi.com/mimobile" target="_blank">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48"
                class="sub-icon"
              />
              <p class="channel-txt">米粉卡</p>
            </a>
          </li>
          <div class="line-vertical"></div>
          <li class="channel">
            <a href="https://huanxin.mi.com/" target="_blank">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48"
                class="sub-icon"
              />
              <p class="channel-txt">
                以旧换新
              </p>
            </a>
          </li>
          <div class="line-vertical"></div>
          <li class="channel">
            <a
              href="https://account.xiaomi.com/pass/serviceLogin?callback=http%3A%2F%2Frecharge.10046.mi.com%2Fsts%3Fsign%3DbC%252Bk1yrraTJbriZ0UbiV7hfzHz4%253D%26followup%3Dhttp%253A%252F%252Frecharge.10046.mi.com%252F&sid=recharge&_locale=zh_CN"
              target="_blank"
            >
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png"
                class="sub-icon"
              />
              <p class="channel-txt">
                话费充值
              </p>
            </a>
          </li>
        </ul>
      </div>
      <ul class="subs">
        <li>
          <a
            href="https://www.mi.com/buy/detail?product_id=10000223"
            class="sub-item sub-2"
            target="_blank"
          >
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c0c05274f2fbb55fbccb89622f798907.jpg?w=632&h=340"
              alt=""
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.mi.com/buy/detail?product_id=10000240"
            class="sub-item sub-3"
            target="_blank"
          >
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b746a4db2e0473cc076a3a4b9bbe0235.jpg?w=632&h=340"
              alt=""
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.mi.com/shouhuan4"
            class="sub-item sub-4"
            target="_blank"
          >
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    evtSubEnter(selector) {}
  }
}
</script>

<style scoped>
.top-sub {
  position: relative;
  width: 1226px;
  height: auto;
  margin: 0 auto;
}
.sub-1 {
  float: left;
  width: 234px;
  height: 170px;
  background: #5f5750;
}
.channels {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 3px;
}
.channels .channel:hover .channel-txt {
  color: #fff;
}
.channels .channel:hover .sub-icon {
  color: #fff;
}
.channels .channel .channel-txt {
  display: block;
  margin: 0;
  width: 75px;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
}
.channels .channel {
  width: 75px;
  height: 82px;
  cursor: pointer;
  text-align: center;
}

.channels .sub-icon {
  width: 25px;
  height: 24px;
  margin-top: 18px;
  margin-bottom: 5px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
}
.subs li {
  width: 316px;
  height: 170px;
  margin-left: 15px;
}
.subs .sub-item:hover {
  box-shadow: 0 5px 30px #ccc;
}
.subs .sub-item img {
  display: block;
  width: 316px;
  height: 170px;
}
.subs .sub-item {
  display: block;
  transition: all 0.3s;
}
.subs {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
}

.line-vertical {
  width: 1px;
  height: 60px;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.1);
}

.line-horizontal {
  width: 60px;
  height: 1px;
  margin: 0 8px;
  background: rgba(255, 255, 255, 0.1);
}
</style>
