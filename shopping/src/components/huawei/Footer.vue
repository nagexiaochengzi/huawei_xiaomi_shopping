<template>
  <div>
    <div class="footer">
      <div class="slogan-container">
        <div class="slogan">
          <ul>
            <li
              v-for="(item, index) in baiqiang"
              :key="index"
              :class="item.title_class"
            >
              <a href="#">
                <i></i>
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="service-container">
        <div class="service">
          <div class="service-l fl">
            <dl
              :class="item1.title_class"
              v-for="(item1, index) in bottom_text"
              :key="index"
            >
              <dt>
                <p class="title">{{ item1.title }}</p>
              </dt>
              <dd>
                <ol>
                  <li v-for="item2 in item1.text" :key="item2">
                    <a href="">{{ item2.textname }}</a>
                  </li>
                </ol>
              </dd>
            </dl>
          </div>
          <div class="service-r fl">
            <dl class="s7">
              <dt>
                <p class="title">950805</p>
              </dt>
              <dd>
                <ol>
                  <li><a>7x24小时客服热线（仅收市话费）</a></li>
                </ol>
              </dd>
              <dd>
                <a
                  href="#"
                  class="service-btn btn-line-primary"
                  style="display: block;"
                >
                  <i></i>
                  在线客服
                </a>
              </dd>
            </dl>
            <div class="service-code clearfix">
              <h2>关注Vmall：</h2>
              <ul>
                <li class="iconfont">
                  <a href=""></a>
                  <div class="service-code-img">
                    <img
                      src="https://res.vmallres.com/pimages//pages/cdnImages/O3KMTpn7HHJrc3oZjphy.png"
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
                <li class="iconfont">
                  <a href=""></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footetr',
  data() {
    return {
      baiqiang: [
        { title: '百强企业 品质保证', title_class: 's1' },
        { title: ' 7天退货 15天换货', title_class: 's2' },
        { title: ' 48元起免运费', title_class: 's3' },
        { title: '2000家服务店 全国联保', title_class: 's4' }
      ],
      bottom_text: [
        {
          title: '购物相关',
          text: [
            { textname: '购物指南' },
            { textname: '配送方式' },
            { textname: '支付方式' },
            { textname: '常见问题' }
          ],
          title_class: 's1'
        },
        {
          title: '保修与退换货',
          text: [
            { textname: '保修政策' },
            { textname: '退换货政策' },
            { textname: '退换货流程' },
            { textname: '保修状态查询' },
            { textname: '配件防伪查询' }
          ],
          title_class: 's2'
        },
        {
          title: '维修与技术支持',
          text: [
            { textname: '服务店' },
            { textname: '预约维修' },
            { textname: '手机寄修' },
            { textname: '备件价格查询' },
            { textname: '上门服务' }
          ],
          title_class: 's3'
        },
        {
          title: '特色服务',
          text: [
            { textname: '防伪查询' },
            { textname: '补购保障' },
            { textname: '以旧换新' },
            { textname: '礼品包装' }
          ],
          title_class: 's4'
        },
        {
          title: '关于我们',
          text: [
            { textname: '公司介绍' },
            { textname: ' 华为商城简介' },
            { textname: '华为零售店' },
            { textname: '荣耀零售店' },
            { textname: '意见反馈' }
          ],
          title_class: 's5'
        },
        {
          title: '友情链接',
          text: [
            { textname: '华为集团' },
            { textname: '华为CBG官网' },
            { textname: '荣耀官网' },
            { textname: '花粉俱乐部' },
            { textname: '华为云' }
          ],
          title_class: 's6'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style scoped></style>
