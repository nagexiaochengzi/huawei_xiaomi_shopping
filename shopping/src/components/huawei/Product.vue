<template>
  <div>
    <!--产品列表-->
    <div id="a1">
      <div class="recommended3">
        <div class="center">
          <div class="hotsell">
            <h2>手机</h2>
          </div>
          <div class="hotsel2">
            <ul>
              <li v-for="(item, index) in phone_titles" :key="index">
                <div id="d_a">
                  <a href="#">{{ item.title }}</a>
                </div>
              </li>

              <li>
                <div id="d_a">
                  <a href="https://www.vmall.com/list-36" id="d_a2"
                    >查看更多 ></a
                  >
                </div>
              </li>
            </ul>
          </div>
          <div class=" product">
            <div class="product-list1">
              <ul>
                <li>
                  <a class="thumb" href="">
                    <img
                      src="https://res0.vmallres.com/pimages//frontLocation/content/29131318249511313192.jpg"
                      alt=""
                      width="230px"
                      height="285px"
                      style="border-radius: 15px;"
                    />
                  </a>
                </li>
                <li v-for="(item2, index) in phones" :key="index">
                  <a class="thumb" href="">
                    <p class="grid-img">
                      <img :src="item2.imgurl" alt="" />
                    </p>
                    <div class="grid-title">{{ item2.name }}</div>
                    <p class="grid-desc">{{ item2.youhui }}&nbsp;</p>
                    <p class="grid-price">{{ item2.jiage }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="a2">
      <div class="recommended4">
        <div class="center">
          <div class="hotsell">
            <h2>笔记本电脑</h2>
          </div>
          <div class="hotsel2">
            <ul>
              <li v-for="(item, index) in pc_titles" :key="index">
                <div id="d_a3">
                  <a href="#">{{ item.title }}</a>
                </div>
              </li>

              <li>
                <div id="d_a" style="float: right;">
                  <a href="https://www.vmall.com/list-676" id="d_a2"
                    >查看更多 ></a
                  >
                </div>
              </li>
            </ul>
          </div>
          <div class=" product">
            <div class="product-list1">
              <ul>
                <li>
                  <a class="thumb" href="">
                    <img
                      src="https://res0.vmallres.com/pimages//frontLocation/content/wD8UzeqLUh39fWLhPTXU.png"
                      alt=""
                      width="230px"
                      height="285px"
                      style="border-radius: 15px;"
                    />
                  </a>
                </li>

                <li v-for="(item2, index) in pcs" :key="index">
                  <a class="thumb" href="">
                    <p class="grid-img">
                      <img :src="item2.imgurl" alt="" />
                    </p>
                    <div class="grid-title">{{ item2.name }}</div>
                    <p class="grid-desc">{{ item2.youhui }}&nbsp;</p>
                    <p class="grid-price">{{ item2.jiage }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="a3">
      <div class="recommended4">
        <div class="center">
          <div class="hotsell">
            <h2>精品平板</h2>
          </div>
          <div class="hotsel2">
            <ul>
              <li v-for="(item, index) in pingban_titles" :key="index">
                <div id="d_a">
                  <a href="#">{{ item.title }}</a>
                </div>
              </li>

              <li>
                <div id="d_a" style="float: right;">
                  <a href="https://www.vmall.com/list-678" id="d_a2"
                    >查看更多 ></a
                  >
                </div>
              </li>
            </ul>
          </div>
          <div class=" product">
            <div class="product-list1">
              <ul>
                <li>
                  <a class="thumb" href="">
                    <img
                      src="https://res0.vmallres.com/pimages//frontLocation/content/52501550249515510525.png"
                      alt=""
                      width="230px"
                      height="285px"
                      style="border-radius: 15px;"
                    />
                  </a>
                </li>
                <li v-for="(item2, index) in pingbans" :key="index">
                  <a class="thumb" href="">
                    <p class="grid-img">
                      <img :src="item2.imgurl" alt="" />
                    </p>
                    <div class="grid-title">{{ item2.name }}</div>
                    <p class="grid-desc">{{ item2.youhui }}&nbsp;</p>
                    <p class="grid-price">{{ item2.jiage }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="a4">
      <div class="recommended5">
        <div class="center">
          <div class="hotsell">
            <h2>智能穿戴</h2>
          </div>
          <div class="hotsel2">
            <ul>
              <li v-for="(item, index) in chuandai_titles" :key="index">
                <div id="d_a3">
                  <a href="#">{{ item.title }}</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="float: right;">
                  <a href="https://www.vmall.com/list-59" id="d_a2"
                    >查看更多 ></a
                  >
                </div>
              </li>
            </ul>
          </div>
          <div class=" product">
            <div class="product-list1">
              <ul>
                <li style="width: 470px;">
                  <a class="thumb" href="">
                    <img
                      src="https://res0.vmallres.com/pimages//frontLocation/content/89657100169510175698.jpg"
                      alt=""
                      width="470px"
                      height="285px"
                      style="border-radius: 15px;"
                    />
                  </a>
                </li>
                <li v-for="(item2, index) in chuandais" :key="index">
                  <a class="thumb" href="">
                    <p class="grid-img">
                      <img :src="item2.imgurl" alt="" />
                    </p>
                    <div class="grid-title">{{ item2.name }}</div>
                    <p class="grid-desc">{{ item2.youhui }}&nbsp;</p>
                    <p class="grid-price">{{ item2.jiage }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div id="a5">
      <div class="recommended5">
        <div class="center">
          <div class="hotsell">
            <h2>智慧屏</h2>
          </div>
          <div class="hotsel2">
            <ul>
              <li v-for="(item, index) in ping_titles" :key="index">
                <div id="d_a3">
                  <a href="#">{{ item.title }}</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="float: right;">
                  <a href="https://www.vmall.com/list-646" id="d_a2"
                    >查看更多 ></a
                  >
                </div>
              </li>
            </ul>
          </div>
          <div class=" product">
            <div class="product-list1">
              <ul>
                <li style="width: 470px;">
                  <a class="thumb" href="">
                    <img
                      src="https://res0.vmallres.com/pimages//frontLocation/content/53869498149519496835.jpg"
                      alt=""
                      width="470px"
                      height="285px"
                      style="border-radius: 15px;"
                    />
                  </a>
                </li>
                <li v-for="(item2, index) in pings" :key="index">
                  <a class="thumb" href="">
                    <p class="grid-img">
                      <img :src="item2.imgurl" alt="" />
                    </p>
                    <div class="grid-title">{{ item2.name }}</div>
                    <p class="grid-desc">{{ item2.youhui }}&nbsp;</p>
                    <p class="grid-price">{{ item2.jiage }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="a6">
      <div class="recommended5">
        <div class="center">
          <div class="hotsell">
            <h2>智能家居</h2>
          </div>
          <div class="hotsel2">
            <ul>
              <li v-for="(item, index) in jiaju_titles" :key="index">
                <div id="d_a3">
                  <a href="#">{{ item.title }}</a>
                </div>
              </li>

              <li>
                <div id="d_a" style="float: right;">
                  <a href="https://www.vmall.com/list-714" id="d_a2"
                    >查看更多 ></a
                  >
                </div>
              </li>
            </ul>
          </div>
          <div class=" product">
            <div class="product-list1">
              <ul>
                <li style="width: 470px;">
                  <a class="thumb" href="">
                    <img
                      src="https://res0.vmallres.com/pimages//frontLocation/content/06382469149516428360.jpg"
                      alt=""
                      width="470px"
                      height="285px"
                      style="border-radius: 15px;"
                    />
                  </a>
                </li>
                <li v-for="(item2, index) in jiajus" :key="index">
                  <a class="thumb" href="">
                    <p class="grid-img">
                      <img :src="item2.imgurl" alt="" />
                    </p>
                    <div class="grid-title">{{ item2.name }}</div>
                    <p class="grid-desc">{{ item2.youhui }}&nbsp;</p>
                    <p class="grid-price">{{ item2.jiage }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div id="a7">
      <div class="recommended5">
        <div class="center">
          <div class="hotsell">
            <h2>热销配件</h2>
          </div>
          <div class="hotsel2">
            <ul>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -50px;">
                  <a href="#" style="font-size: 13px;">移动电源</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">充电器/线材</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">自拍杆/支架</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">摄像机/镜头</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">智能硬件</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">生活周边</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">其他</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">保护壳</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">保护套</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">贴膜</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">个人电脑配件</a>
                </div>
              </li>

              <li>
                <div id="d_a" style="float: right;">
                  <a href="https://www.vmall.com/list-54" id="d_a2"
                    >查看更多 ></a
                  >
                </div>
              </li>
            </ul>
          </div>
          <div class=" product">
            <div class="product-list1">
              <ul>
                <li style="width: 470px;">
                  <a class="thumb" href="">
                    <img
                      src="https://res0.vmallres.com/pimages//frontLocation/content/06382469149516428360.jpg"
                      alt=""
                      width="470px"
                      height="285px"
                      style="border-radius: 15px;"
                    />
                  </a>
                </li>

                <li v-for="(item2, index) in hotpeijians" :key="index">
                  <a class="thumb" href="">
                    <p class="grid-img">
                      <img :src="item2.imgurl" alt="" />
                    </p>
                    <div class="grid-title">{{ item2.name }}</div>
                    <p class="grid-desc">{{ item2.youhui }}&nbsp;</p>
                    <p class="grid-price">{{ item2.jiage }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
      </div>
      <div style="margin-top: 180px;margin-bottom: 20px;">
        <a href="https://sale.vmall.com/vmallsmarthome.html">
          <div
            style="background: url(https://res.vmallres.com/pimages//pages/picImages/m5eC5Aa47SGYLxHweJeY.jpg);width: 1200px;height: 120px;margin: 0 auto;border-radius: 10px;"
          ></div>
        </a>
      </div>
    </div>
    <br /><br /><br /><br /><br />
    <div id="a8">
      <div class="recommended5">
        <div class="center">
          <div class="hotsell">
            <h2>生态精品</h2>
          </div>
          <div class="hotsel2">
            <ul>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -50px;">
                  <a href="#" style="font-size: 13px;">生活电器</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">影音娱乐</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">厨电卫浴</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">智能灯光</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">安防门锁</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">数码周边</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">环境卫士</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">健康保健</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">运动健身</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">户外出行</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">个护美妆</a>
                </div>
              </li>

              <li>
                <div id="d_a" style="float: right;">
                  <a href="https://www.vmall.com/list-43" id="d_a2"
                    >查看更多 ></a
                  >
                </div>
              </li>
            </ul>
          </div>
          <div class=" product">
            <div class="product-list1">
              <ul>
                <li style="width: 470px;">
                  <a class="thumb" href="">
                    <img
                      src="https://res0.vmallres.com/pimages//frontLocation/content/98535237349513253589.jpg"
                      alt=""
                      width="470px"
                      height="285px"
                      style="border-radius: 15px;"
                    />
                  </a>
                </li>
                <li v-for="(item2, index) in shenghuos" :key="index">
                  <a class="thumb" href="">
                    <p class="grid-img">
                      <img :src="item2.imgurl" alt="" />
                    </p>
                    <div class="grid-title">{{ item2.name }}</div>
                    <p class="grid-desc">{{ item2.youhui }}&nbsp;</p>
                    <p class="grid-price">{{ item2.jiage }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="a9">
      <div class="recommended5">
        <div class="center">
          <div class="hotsell">
            <h2>精选配件</h2>
          </div>
          <div class="hotsel2">
            <ul>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -50px;">
                  <a href="#" style="font-size: 13px;">移动电源</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">充电器/线材</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">自拍杆/支架</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">摄像机/镜头</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">智能硬件</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -10px;">
                  <a href="#" style="font-size: 13px;">生活周边</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">其他</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">保护壳</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">保护套</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">贴膜</a>
                </div>
              </li>
              <li>
                <div id="d_a" style="width: 100px;margin-left: -20px;">
                  <a href="#" style="font-size: 13px;">个人电脑配件</a>
                </div>
              </li>

              <li>
                <div id="d_a" style="float: right;">
                  <a href="https://www.vmall.com/list-54" id="d_a2"
                    >查看更多 ></a
                  >
                </div>
              </li>
            </ul>
          </div>
          <div class=" product">
            <div class="product-list1">
              <ul>
                <li style="width: 470px;">
                  <a class="thumb" href="">
                    <img
                      src="https://res0.vmallres.com/pimages//frontLocation/content/72742239959513224727.png"
                      alt=""
                      width="470px"
                      height="285px"
                      style="border-radius: 15px;"
                    />
                  </a>
                </li>
                <li v-for="(item2, index) in jingpinpeijians" :key="index">
                  <a class="thumb" href="">
                    <p class="grid-img">
                      <img :src="item2.imgurl" alt="" />
                    </p>
                    <div class="grid-title">{{ item2.name }}</div>
                    <p class="grid-desc">{{ item2.youhui }}&nbsp;</p>
                    <p class="grid-price">{{ item2.jiage }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div style="margin-bottom: 30px;">
        <a href="https://sale.vmall.com/welcome.html">
          <div
            style="background: url(https://res.vmallres.com/pimages//sale/2019-01/awBg2nLycya1sSIX1juQ.jpg);width: 1200px;height: 200px;margin: 0 auto;border-radius: 10px;"
          ></div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Product',
  data() {
    return {
      phone_titles: [
        { title: 'HUAWEI Mate系列' },
        { title: 'HUAWEI P系列' },
        { title: 'HUAWEI nova系列' },
        { title: 'HUAWEI畅享系列' },
        { title: 'HUAWEI V系列' },
        { title: 'HUAWEI HONOR系列' },
        { title: 'HUAWEI X系列' },
        { title: 'HUAWEI Play系列' }
      ],
      phones: [
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443387731/428_428_1DB7D2A4E023F52DC64AE021E52A83F43BC0524BE4E0387Fmp.png',
          name: '荣耀Play 4T',
          youhui: '整点购机赠耳机',
          jiage: '￥1199'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6972453165077/428_428_C089F3BE3BD266BAC2B777E1190F59241E0CE65223CA694Bmp.png',
          name: '华为畅享20 Pro',
          youhui: '12期免息|赠多重好礼',
          jiage: '¥1999'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443388141/428_428_AE2A1F00B7D98D94AAB55AD59800475D6ADFA000C71CA40Fmp.png',
          name: 'HUAWEI Mater30 PRO 5G',
          youhui: '领券减100|12期免息',
          jiage: '¥6399'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443356126/428_428_21A7667FA769CBD35B1B4977DF61F62E011DB64E3FDCA71Bmp.png',
          name: '荣耀X10 Max',
          youhui: '12期免息+赠品',
          jiage: '¥2099'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6972453162526/428_428_7E78427DAD528145F81C899480925B4A833C3793651A5B90mp.png',
          name: '华为畅享Z 5G',
          youhui: '领券减100',
          jiage: '¥2199'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443393039/428_428_7484AB32CD916B697FED5DE343A4384247FC1B9D7159B022mp.png',
          name: 'HUAWEI P40 Pro+',
          youhui: '享12期免息',
          jiage: '¥7988'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443321339/428_428_1563503515663mp.png',
          name: '荣耀30',
          youhui: '最高省310元|部分赠配件|免息',
          jiage: '¥2999'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443393251/428_428_7843929F829F1DAC9EFC6A50B6BD0CA9999BA351D2526117mp.png',
          name: 'HUAWEI Mater30 PRO 5G',
          youhui: '领券减100|12期免息',
          jiage: '¥6399'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443360734/428_428_3FBC077CC886A1DF10E7F063D8F8C6B9083B641CE06CD0FEmp.png',
          name: '荣耀X10 Max',
          youhui: '12期免息+赠品',
          jiage: '¥2099'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443376506/428_428_5A4871DB483B6E0D92CA527C3D367A6A32E2B433F5870412mp.png',
          name: '华为畅享Z 5G',
          youhui: '领券减100',
          jiage: '¥2199'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443356874/428_428_23726B2102572FFB2141D62293E8780F18D9861161FA67DCmp.png',
          name: 'HUAWEI P40 Pro+',
          youhui: '享12期免息',
          jiage: '¥7988'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443352531/428_428_37C267F23F1D9D8B7DBF9202529F8CFBB5AEACA87BCFF900mp.png',
          name: '荣耀30',
          youhui: '最高省310元|部分赠配件|免息',
          jiage: '¥2999'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443327690/428_428_50BAC6E20ED77CBBE6D44BD831603E6F0FB45173DB1EE8B2mp.png',
          name: 'HUAWEI Mater30 PRO 5G',
          youhui: '领券减100|12期免息',
          jiage: '¥6399'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443330089/428_428_40B400F6978F30299BAEAD3FB31C97EF8694128D28B041A2mp.png',
          name: '荣耀X10 Max',
          youhui: '12期免息+赠品',
          jiage: '¥2099'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443354962/428_428_83E26E25EA9423FB41DCC2769579FBA747AD844EF9D08041mp.png',
          name: '华为畅享Z 5G',
          youhui: '领券减100',
          jiage: '¥2199'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6972453160638/428_428_2F3A76D14CB25E4101278087C51487F4691E72674C684788mp.png',
          name: 'HUAWEI P40 Pro+',
          youhui: '享12期免息',
          jiage: '¥7988'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443363124/428_428_42B09549789695A42D621CF87DC53B5EBE9385772DC61FB9mp.png',
          name: '荣耀30',
          youhui: '最高省310元|部分赠配件|免息',
          jiage: '¥2999'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6972453160508/428_428_C6960C20C53050E90CF1FA84EB7ADD6CA668F6987837B5E6mp.png',
          name: 'HUAWEI Mater30 PRO 5G',
          youhui: '领券减100|12期免息',
          jiage: '¥6399'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443352661/428_428_BFB5D94FEF9ED6AFC6B7711D3D39958E338D2ED97E93D79Emp.png',
          name: '荣耀X10 Max',
          youhui: '12期免息+赠品',
          jiage: '¥2099'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443315352/428_428_1559307034391mp.png',
          name: '华为畅享Z 5G',
          youhui: '领券减100',
          jiage: '¥2199'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443353347/428_428_484D42DB83550E7CF59813E6BE3E2A9A4CF07CF0E75E32A3mp.png',
          name: 'HUAWEI P40 Pro+',
          youhui: '享12期免息',
          jiage: '¥7988'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443320394/428_428_1563504284133mp.png',
          name: '荣耀30',
          youhui: '最高省310元|部分赠配件|免息',
          jiage: '¥2999'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443304332/428_428_1558244819612mp.png',
          name: 'HUAWEI Mater30 PRO 5G',
          youhui: '领券减100|12期免息',
          jiage: '¥6399'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443329243/428_428_FADB1B48C9C92E3C47B8518FC93F9747F2D6549ACC4B1FD7mp.png',
          name: '荣耀X10 Max',
          youhui: '12期免息+赠品',
          jiage: '¥2099'
        }
      ],
      pc_titles: [
        { title: '华为Matebook X系列' },
        { title: '华为Matebook系列' },
        { title: '华为Matebook D系列' },
        { title: '华为Matebook E系列' },
        { title: '荣耀MagicBook系列' },
        { title: '荣耀MagicBook Pro系列' }
      ],
      pcs: [
        {
          imgurl:
            'https://res1.vmallres.com/pimages//product/6901443367511/428_428_D7965415D130ACFEAFB27199DAD0B1295A101BC3FBBC50E4mp.png',
          name: '荣耀Play 4T',
          youhui: '整点购机赠耳机',
          jiage: '￥1199'
        },
        {
          imgurl:
            'https://res1.vmallres.com/pimages//product/6901443390243/428_428_CB59BC49A4E1F60D2A1F4C6C349E591D1B3F546807A34180mp.png',
          name: 'HUAWEI Mater30 5G',
          youhui: '12期免息|赠多重好礼',
          jiage: '¥2999'
        },
        {
          imgurl:
            'https://res1.vmallres.com/pimages//product/6901443395675/428_428_CF22C9F22E661EC3B9CD33B7AB0C87746BD13E3E4F2D07E6mp.png',
          name: '荣耀Play4',
          youhui: '6期免息',
          jiage: '¥1999'
        },
        {
          imgurl:
            'https://res1.vmallres.com/pimages//product/6901443364794/428_428_A9AEEFF0772BAB57B50C81170E109BE5271E46B62A782D0Dmp.png',
          name: 'HUAWEI Mater30 PRO 5G',
          youhui: '领券减100|12期免息',
          jiage: '￥6399'
        },
        {
          imgurl:
            'https://res1.vmallres.com/pimages//product/6901443367665/428_428_E91F34FC39C42C1D025AC10DC90F76CF6A08043F5B026264mp.png',
          name: '华为畅享Z 5G',
          youhui: '领券减100',
          jiage: '￥2199'
        },
        {
          imgurl:
            'https://res1.vmallres.com/pimages//product/6901443330720/428_428_09F234E37A3F711772ACD5FD0155CB0905423FDA9D230BA8mp.png',
          name: '荣耀Play4T Pro',
          youhui: '全系优惠110元',
          jiage: '￥1399'
        },
        {
          imgurl:
            'https://res1.vmallres.com/pimages//product/6901443389308/428_428_0668B79B1E3EC63B6D01AC512599BC4B9F6D23E3F8B72A02mp.png',
          name: 'HUAWEI P40 Pro+',
          youhui: '享12期免息',
          jiage: '￥7988'
        },
        {
          imgurl:
            'https://res1.vmallres.com/pimages//product/6901443297931/428_428_1556004260028mp.png',
          name: '荣耀30',
          youhui: '最高省310元|部分赠配件|免息',
          jiage: '￥2999'
        },
        {
          imgurl:
            'https://res1.vmallres.com/pimages//product/6901443367184/428_428_F9F4EE995E57451AF213E2C51B6C1E181BBFBD19D1C6A57Bmp.png',
          name: '荣耀X10 Max',
          youhui: '12期免息+赠品',
          jiage: '￥2099'
        }
      ],
      pingban_titles: [
        { title: '华为MatePad 系列' },
        { title: '荣耀 V系列' },
        { title: '华为畅享 系列' },
        { title: '荣耀数字系列' },
        { title: '荣耀畅玩系列' },
        { title: '荣耀平板 V系列' }
      ],
      pingbans: [
        {
          imgurl:
            'https://res2.vmallres.com/pimages//product/6972453166197/428_428_8E96DD5F0FF94CE421F73E4E39052841862E75CECD7F463Emp.png',
          name: '荣耀Play 4T',
          youhui: '整点购机赠耳机',
          jiage: '￥1199'
        },
        {
          imgurl:
            'https://res2.vmallres.com/pimages//product/6972453166210/428_428_67DF9B4F421F8FDE6E1098A389E2CA7CD23F631E366B2AE1mp.png',
          name: 'HUAWEI Mater30 5G',
          youhui: '12期免息|赠多重好礼',
          jiage: '¥2999'
        },
        {
          imgurl:
            'https://res2.vmallres.com/pimages//product/6901443362165/428_428_43FF8D6E14324A16BAA680D242AB29BF72BACAE425DD5943mp.png',
          name: '荣耀Play4',
          youhui: '6期免息',
          jiage: '¥1999'
        },
        {
          imgurl:
            'https://res2.vmallres.com/pimages//product/6972453166197/428_428_773CF2EFF820F5FFFD55B8D170BA4DBC13D61822DC0A4D0Dmp.png',
          name: 'HUAWEI Mater30 PRO 5G',
          youhui: '领券减100|12期免息',
          jiage: '￥6399'
        },
        {
          imgurl:
            'https://res2.vmallres.com/pimages//product/6901443378876/428_428_1E5208A341082F0B17029EE12C6B80CE3F4D2383DC1913CAmp.png',
          name: '华为畅享Z 5G',
          youhui: '领券减100',
          jiage: '￥2199'
        },
        {
          imgurl:
            'https://res2.vmallres.com/pimages//product/6901443315819/428_428_CC6D09EC69753C356A4369E19A3036800E5F3BAA40E88AFDmp.png',
          name: '荣耀Play4T Pro',
          youhui: '全系优惠110元',
          jiage: '￥1399'
        },
        {
          imgurl:
            'https://res2.vmallres.com/pimages//product/6901443329588/428_428_BBE972757C37ECDE5CE7F6BDCB2FA925C23D435D94D8DAEEmp.png',
          name: 'HUAWEI P40 Pro+',
          youhui: '享12期免息',
          jiage: '￥7988'
        },
        {
          imgurl:
            'https://res2.vmallres.com/pimages//product/6901443265206/428_428_1539243364035mp.png',
          name: '荣耀30',
          youhui: '最高省310元|部分赠配件|免息',
          jiage: '￥2999'
        },
        {
          imgurl:
            'https://res2.vmallres.com/pimages//product/6901443294763/428_428_340B4B4D53EA60F86FDDFF06F1608016E22F51A4E3FB3211mp.png',
          name: '荣耀X10 Max',
          youhui: '12期免息+赠品',
          jiage: '￥2099'
        }
      ],
      chuandai_titles: [
        { title: '智能手表' },
        { title: '儿童手表' },
        { title: '智能手环' },
        { title: '智能健康配件' },
        { title: 'VR' }
      ],
      chuandais: [
        {
          imgurl:
            'https://res3.vmallres.com/pimages//product/6901443357949/428_428_909881D6BCBF027F47EEF3EF6AA5D8407613AA8228980DF8mp.png',
          name: 'HUAWEI Mater30 5G',
          youhui: '12期免息|赠多重好礼',
          jiage: '¥2999'
        },
        {
          imgurl:
            'https://res3.vmallres.com/pimages//product/6972453165985/428_428_93BCD651C90D2B5EFD779DB353F1A2E36DFAE529FA49026Emp.png',
          name: '荣耀Play4',
          youhui: '6期免息',
          jiage: '¥1999'
        },
        {
          imgurl:
            'https://res3.vmallres.com/pimages//product/6901443360277/428_428_EC4E2F03BF69EFDF92BDB185547A4C733BA8AE3781105B39mp.png',
          name: 'HUAWEI Mater30 PRO 5G',
          youhui: '领券减100|12期免息',
          jiage: '￥6399'
        },
        {
          imgurl:
            'https://res3.vmallres.com/pimages//product/6901443280322/428_428_1545443202730mp.png',
          name: '华为畅享Z 5G',
          youhui: '领券减100',
          jiage: '￥2199'
        },
        {
          imgurl:
            'https://res3.vmallres.com/pimages//product/6901443312320/428_428_A770D51DE182394A7777EF3F6D29F70A4DD0E6B3F2E8D252mp.png',
          name: '荣耀Play4T Pro',
          youhui: '全系优惠110元',
          jiage: '￥1399'
        },
        {
          imgurl:
            'https://res3.vmallres.com/pimages//product/6901443310593/428_428_1562750353603mp.png',
          name: 'HUAWEI P40 Pro+',
          youhui: '享12期免息',
          jiage: '￥7988'
        },
        {
          imgurl:
            'https://res3.vmallres.com/pimages//product/6901443278381/428_428_B82D67C119283942BCC92625B03EAAEB4BC6A7C7065DEBCBmp.png',
          name: '荣耀30',
          youhui: '最高省310元|部分赠配件|免息',
          jiage: '￥2999'
        },
        {
          imgurl:
            'https://res3.vmallres.com/pimages//product/6901443275656/428_428_1545200844844mp.png',
          name: '荣耀X10 Max',
          youhui: '12期免息+赠品',
          jiage: '￥2099'
        }
      ],
      ping_titles: [{ title: '华为智慧屏' }, { title: '荣耀智慧屏' }],
      pings: [
        {
          imgurl:
            'https://res4.vmallres.com/pimages//product/6901443401710/428_428_ED25171C4C0B9F13A7A71A08EC9CF6725DE9A173423463BAmp.png',
          name: 'HUAWEI Mater30 5G',
          youhui: '12期免息|赠多重好礼',
          jiage: '¥2999'
        },
        {
          imgurl:
            'https://res4.vmallres.com/pimages//product/6901443387588/428_428_1293C2C791F87BE0948D95135021BC202D4B20A735051BDFmp.png',
          name: '荣耀Play4',
          youhui: '6期免息',
          jiage: '¥1999'
        },
        {
          imgurl:
            'https://res4.vmallres.com/pimages//product/6901443401703/428_428_C87EFEE1636151629AB635316B00DEF08ACF73EEB8864EAFmp.png',
          name: 'HUAWEI Mater30 PRO 5G',
          youhui: '领券减100|12期免息',
          jiage: '￥6399'
        },
        {
          imgurl:
            'https://res4.vmallres.com/pimages//product/6901443361557/428_428_9CA7B99629C486B82A64D8EBCCB6BF5BDB211AA893F42F55mp.png',
          name: '华为畅享Z 5G',
          youhui: '领券减100',
          jiage: '￥2199'
        },
        {
          imgurl:
            'https://res4.vmallres.com/pimages//product/6901443401956/428_428_9A49CD2E2A487CA47DC30109246CD63A185CE6C743E762B7mp.png',
          name: '荣耀Play4T Pro',
          youhui: '全系优惠110元',
          jiage: '￥1399'
        },
        {
          imgurl:
            'https://res4.vmallres.com/pimages//product/6901443363834/428_428_F5914787EADD22E44AE873EB26A9DEE719BA467ACED12261mp.png',
          name: 'HUAWEI P40 Pro+',
          youhui: '享12期免息',
          jiage: '￥7988'
        },
        {
          imgurl:
            'https://res4.vmallres.com/pimages//product/6901443293209/428_428_B8DB4FC62435E45B1298B4FE526708215AD7B75925C52421mp.png',
          name: '荣耀30',
          youhui: '最高省310元|部分赠配件|免息',
          jiage: '￥2999'
        },
        {
          imgurl:
            'https://res4.vmallres.com/pimages//product/6901443390496/428_428_36F72EB747591D900CAC22B69D6537E1C04D5C485EB66BE0mp.png',
          name: '荣耀X10 Max',
          youhui: '12期免息+赠品',
          jiage: '￥2099'
        }
      ],
      jiaju_titles: [
        { title: '智能路由' },
        { title: '移动路由' },
        { title: 'WIFI放大器' },
        { title: '智能存储' },
        { title: '电视盒子' },
        { title: 'HiLink生态' }
      ],
      jiajus: [
        {
          imgurl:
            'https://res5.vmallres.com/pimages//product/6972453162335/428_428_FBCC35D17566177FEC42ED54A91E101DC7C02925B31CC9E5mp.png',
          name: 'HUAWEI Mater30 5G',
          youhui: '12期免息|赠多重好礼',
          jiage: '¥2999'
        },
        {
          imgurl:
            'https://res5.vmallres.com/pimages//product/6972453163554/428_428_15928846F729B31F231C77A61B3032066414DAD54CFF8594mp.png',
          name: '荣耀Play4',
          youhui: '6期免息',
          jiage: '¥1999'
        },
        {
          imgurl:
            'https://res5.vmallres.com/pimages//product/6901443303915/428_428_D29ACF7E820F6A5ADAEEFE6DB5E1560AF4754BF9FC8CC60Amp.png',
          name: 'HUAWEI Mater30 PRO 5G',
          youhui: '领券减100|12期免息',
          jiage: '￥6399'
        },
        {
          imgurl:
            'https://res5.vmallres.com/pimages//frontLocation/content/ak2xtB4QeKIOkeLlKair.png',
          name: '华为畅享Z 5G',
          youhui: '领券减100',
          jiage: '￥2199'
        },
        {
          imgurl:
            'https://res5.vmallres.com/pimages//product/6972453160010/428_428_D5ACA4991480C8666D7BE76EF34F5D1A2E44F1918ED1B407mp.png',
          name: '荣耀Play4T Pro',
          youhui: '全系优惠110元',
          jiage: '￥1399'
        },
        {
          imgurl:
            'https://res5.vmallres.com/pimages//product/6901443273324/428_428_1554109398579mp.png',
          name: 'HUAWEI P40 Pro+',
          youhui: '享12期免息',
          jiage: '￥7988'
        },
        {
          imgurl:
            'https://res5.vmallres.com/pimages//product/6972453164292/428_428_1A334CC2B4B76E61A4F0F94D2FECED74E0BFD55112E81BA1mp.png',
          name: '荣耀30',
          youhui: '最高省310元|部分赠配件|免息',
          jiage: '￥2999'
        },
        {
          imgurl:
            'https://res5.vmallres.com/pimages//product/6901443399741/428_428_450B61F7623074BD6E7521E55EFB021CE31930F0DB1E81B2mp.png',
          name: '荣耀X10 Max',
          youhui: '12期免息+赠品',
          jiage: '￥2099'
        }
      ],
      hotpeijian_titles: [
        { title: '移动电源' },
        { title: '充电器/线材' },
        { title: '自拍杆/支架' },
        { title: '摄像机/镜头' },
        { title: '智能硬件' },
        { title: '生活周边' },
        { title: '其他' },
        { title: '保护壳' },
        { title: '保护套' },
        { title: '贴膜' },
        { title: '个人电脑配件' }
      ],
      hotpeijians: [
        {
          imgurl:
            'https://res6.vmallres.com/pimages//product/6901443364848/428_428_FD4FCDA05CD9734500C1F30C2224781613DD08967CC7194Emp.png',
          name: 'HUAWEI Mater30 5G',
          youhui: '12期免息|赠多重好礼',
          jiage: '¥2999'
        },
        {
          imgurl:
            'https://res6.vmallres.com/pimages//product/6901443295951/428_428_1554964968160mp.png',
          name: '荣耀Play4',
          youhui: '6期免息',
          jiage: '¥1999'
        },
        {
          imgurl:
            'https://res6.vmallres.com/pimages//product/6901443327287/428_428_8092D4EBB3229C23B0E0ABC71A4B9F79E118EA98C2B6E5DFmp.png',
          name: 'HUAWEI Mater30 PRO 5G',
          youhui: '领券减100|12期免息',
          jiage: '￥6399'
        },
        {
          imgurl:
            'https://res6.vmallres.com/pimages//product/6901443289301/428_428_1558520115474mp.png',
          name: '华为畅享Z 5G',
          youhui: '领券减100',
          jiage: '￥2199'
        },
        {
          imgurl:
            'https://res6.vmallres.com/pimages//product/6901443380114/428_428_0DAFD82FD5CBE359EADDB5FC4B64CD33415699164FFD0132mp.png',
          name: '荣耀Play4T Pro',
          youhui: '全系优惠110元',
          jiage: '￥1399'
        },
        {
          imgurl:
            'https://res6.vmallres.com/pimages//product/6901443357635/428_428_83BA614312243B4CAA8D4551A1B2F512D347C38C00EE82A4mp.png',
          name: '荣耀30',
          youhui: '最高省310元|部分赠配件|免息',
          jiage: '￥2999'
        },
        {
          imgurl:
            'https://res6.vmallres.com/pimages//product/6901443369614/428_428_100700F1A17202378058B2EA2459E89F4EE6F17C06A133CCmp.png',
          name: 'HUAWEI P40 Pro+',
          youhui: '享12期免息',
          jiage: '￥7988'
        },

        {
          imgurl:
            'https://res6.vmallres.com/pimages//product/6901443325214/428_428_B4B231BE557D9DC5AA9627749F0846ECD3DCE76D2A7F881Fmp.png',
          name: '荣耀X10 Max',
          youhui: '12期免息+赠品',
          jiage: '￥2099'
        }
      ],
      shenghuo_titles: [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' }
      ],
      shenghuos: [
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/6971061404110/428_428_2C17AC2B6E0B93FAA96496CD0BB69A4535D6D93F53143ECBmp.png',
          name: 'HUAWEI Mater30 5G',
          youhui: '12期免息|赠多重好礼',
          jiage: '¥2999'
        },
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/6970770281449/428_428_7D01E820A6E8D22137D923F478CDB7A890AFEFE9D22D8168mp.png',
          name: '荣耀Play4',
          youhui: '6期免息',
          jiage: '¥1999'
        },
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/6971943680182/428_428_37632068BCB47CF1FA6F36B227362740DB1662DD75EB31D4mp.png',
          name: 'HUAWEI Mater30 PRO 5G',
          youhui: '领券减100|12期免息',
          jiage: '￥6399'
        },
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/6972664630050/428_428_9C6472C3C716AD3E8B44C9F978DD754224726627A458ED5Bmp.png',
          name: '华为畅享Z 5G',
          youhui: '领券减100',
          jiage: '￥2199'
        },
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/6926511400310/428_428_8C2A22EE8805F43A0BCBC369EBEF7BBC86B364AFD3370949mp.png',
          name: '荣耀Play4T Pro',
          youhui: '全系优惠110元',
          jiage: '￥1399'
        },
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/6931056703406/428_428_02AF33935E2DBCD8B5B9EDBDDEA7BDA6C5CEB4834E13B74Dmp.png',
          name: 'HUAWEI P40 Pro+',
          youhui: '享12期免息',
          jiage: '￥7988'
        },
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/6972805220010/428_428_DF636FB119F8EA794739D70BC8A7ED6D399F6B849BACFFA0mp.png',
          name: '荣耀30',
          youhui: '最高省310元|部分赠配件|免息',
          jiage: '￥2999'
        },
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/6971543741399/428_428_EAE6E7ED0C051D5C75519AA3269D9B9E149D2DE4CC3C45B3mp.png',
          name: '荣耀X10 Max',
          youhui: '12期免息+赠品',
          jiage: '￥2099'
        }
      ],
      jingpinpeijian_titles: [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' }
      ],
      jingpinpeijians: [
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/6970285525038/428_428_447AA75A670BA96BC919F963FE37CC0E24DCE0F6FA676954mp.png',
          name: 'HUAWEI Mater30 5G',
          youhui: '12期免息|赠多重好礼',
          jiage: '¥2999'
        },
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/GB3102150092901/428_428_86954E72517A9CB42A5A09826F95906F7A61A12B6B02992Amp.png',
          name: '荣耀Play4',
          youhui: '6期免息',
          jiage: '¥1999'
        },
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/GB3102150092701/428_428_6C68A44478A09027B0CBCB34ACFF3044A8EE40A808D075EEmp.png',
          name: 'HUAWEI Mater30 PRO 5G',
          youhui: '领券减100|12期免息',
          jiage: '￥6399'
        },
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/GB3102150087901/428_428_1563349439570mp.png',
          name: '华为畅享Z 5G',
          youhui: '领券减100',
          jiage: '￥2199'
        },
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/GB3102160016001/428_428_1540367360482mp.png',
          name: '荣耀Play4T Pro',
          youhui: '全系优惠110元',
          jiage: '￥1399'
        },
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/4894222059948/428_428_D95E5325FC4D37CCE7B67AC6E1865301018B10CB5A8B2346mp.png',
          name: 'HUAWEI P40 Pro+',
          youhui: '享12期免息',
          jiage: '￥7988'
        },
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/6957303831555/428_428_21F481485EA83F4FDF9691AC909ED6F98CCEDE3113B03A2Amp.png',
          name: '荣耀30',
          youhui: '最高省310元|部分赠配件|免息',
          jiage: '￥2999'
        },
        {
          imgurl:
            'https://res7.vmallres.com/pimages//product/6972480870005/428_428_2FC1A6065CCE039142D6A71DF621401716C41ED6559108D1mp.png',
          name: '荣耀X10 Max',
          youhui: '12期免息+赠品',
          jiage: '￥2099'
        }
      ],
      superurl: [
        {
          url: '',
          t: '享12期免息 晒单送好礼',
          jiage: '¥699',
          banben: 'HUAWEI FreeBuds 3 无线耳机',
          img:
            'https://res3.vmallres.com/pimages//product/6901443383214/428_428_22F2E26803F9236D8943B1FF5F06B1B553D0CCFD83A1A49Dmp.png'
        },
        {
          url: '',
          t: '最高直降700+3期免息',
          jiage: '¥1099',
          banben: '荣耀手表2',
          img:
            'https://res3.vmallres.com/pimages//product/6901443309177/428_428_8CFE34C8B9A759E75D855553576F28162679C6C85C4BD2E1mp.png'
        },
        {
          url: '',
          t: '限时特惠110享3期免息',
          jiage: '¥2499',
          banben: '荣耀平板V6 Wifi6+',
          img:
            'https://res3.vmallres.com/pimages//product/6901443254330/428_428_BADA46563239499321B9228CC3577CBDF158AC209C165AF0mp.png'
        },
        {
          url: '',
          t: '享12期免息',
          jiage: '¥5599',
          banben: '荣耀笔记本MagicBook Pro 2020款',
          img:
            'https://res3.vmallres.com/pimages//product/2901020005801/428_428_1564128651216mp.png'
        },
        {
          url: '',
          t: '直降100+3期免息',
          jiage: '¥349',
          banben: 'HUAWEI FreeBuds 悦享版',
          img:
            'https://res3.vmallres.com/pimages//product/6901443290079/428_428_EB664899135693CE140BBE44B1F1732DFEB894BFD77B3848mp.png'
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
.back_add {
  position: absolute;
  margin-top: 780px;
}
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
  width: 3600px;
  position: absolute;
  left: 0px;
  cursor: pointer;
  height: 100%;
}

.threeImg .Containt ul li {
  width: 190px;
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
  width: 190px;
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
  width: 190px;
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
  position: absolute;
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
