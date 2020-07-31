<template>
  <div>
    <!--新品-->
    <div class="recommended">
      <div class="center">
        <div class="new">
          <ul>
            <li v-for="(news, index) in newgoods" :key="index">
              <a href=""><img :src="news.imgurl"/></a>
            </li>
          </ul>
        </div>
        <div class="hotsell">
          <h2>热销单品</h2>
        </div>
        <div class="product">
          <div class="product-recommended">
            <a href=""
              ><img
                src="https://res0.vmallres.com/pimages//frontLocation/content/39394917149511949393.png"
                alt=""
            /></a>
          </div>
          <div class="product-list">
            <ul>
              <li v-for="(good, index) in hotgoods" :key="index">
                <a class="thumb" href="">
                  <p class="grid-img">
                    <img :src="good.imgurl" alt="" />
                  </p>

                  <div class="grid-title">{{ good.phonename }}</div>
                  <p class="grid-desc">{{ good.youhui }}&nbsp;</p>
                  <p class="grid-price">{{ good.jiage }}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--精品推荐-->
    <div class="tuijian">
      <div class="center">
        <div class="hotsell">
          <h2>精品推荐</h2>
        </div>
        <div class="lunbo2"><slider3></slider3></div>
        <div class="lunbo3"><slider2></slider2></div>
      </div>
    </div>
  </div>
</template>
<script>
import slider2 from '@/components/huawei/slider2.vue'
import slider3 from '@/components/huawei/slider3.vue'

export default {
  name: 'Hot',
  components: {
    slider2,
    slider3
  },
  data() {
    return {
      newgoods: [
        {
          imgurl:
            'https://res.vmallres.com/pimages//pages/picImages/73730068049516003737.jpg'
        },
        {
          imgurl:
            'https://res.vmallres.com/pimages//pages/picImages/GcsYv6B9jO5jZvHBjHm2.jpg'
        },
        {
          imgurl:
            'https://res.vmallres.com/pimages//pages/picImages/lDqUUsQx34EgGqd4ao9G.jpg'
        },
        {
          imgurl:
            'https://res.vmallres.com/pimages//pages/picImages/29897817149511879892.png'
        }
      ],
      hotgoods: [
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443398027/428_428_C5B3EEB31BA081CF605FE04A1118DEF332F4C3003CC60ECEmp.png',
          phonename: 'HUAWEI P40 Pro+',
          youhui: '享12期免息',
          jiage: '￥7988'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443391967/428_428_3F15B3F159FCB2929091EAD02F81B3E9156F0B2FE71F8433mp.png',
          phonename: '荣耀30',
          youhui: '最高省310元|部分赠配件|免息',
          jiage: '￥2999'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443353361/428_428_6381399AD1BADEB91EBD63AF4EAE62016C58317DDEB7C5C4mp.png',
          phonename: 'HUAWEI Mater30 5G',
          youhui: '12期免息|赠多重好礼',
          jiage: '¥4499'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6972453165220/428_428_11B9905C1BEED75A300A7A6B70612208DAA32DE91D8F7372mp.png',
          phonename: '荣耀Play4',
          youhui: '6期免息',
          jiage: '¥1899'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443353279/428_428_F23055642D59B61C0038B9B6015570AC05A35A7E3838809Emp.png',
          phonename: 'HUAWEI Mater30 PRO 5G',
          youhui: '领券减100|12期免息',
          jiage: '¥2199'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6972453164773/428_428_3350888FD6EA6D30D5F0E99DA3C0D0B15A3BD92523AF0F0Cmp.png',
          phonename: '荣耀X10 Max',
          youhui: '12期免息+赠品',
          jiage: '¥2099'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6972453164971/428_428_AEEDD8A45E7E18EA7F10E0386C1104EEB994C561C391C803mp.png',
          phonename: '华为畅享Z 5G',
          youhui: '领券减100',
          jiage: '¥2199'
        },
        {
          imgurl:
            'https://res0.vmallres.com/pimages//product/6901443386451/428_428_E008716749454F878551D09785164FA1DD1742C36857F752mp.png',
          phonename: '荣耀Play4T Pro',
          youhui: '全系优惠110元',
          jiage: '¥1399'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style scoped></style>
