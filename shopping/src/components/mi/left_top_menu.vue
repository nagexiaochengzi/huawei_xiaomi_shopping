<template>
  <div style="background: white;">
    <div class="top-banner clearfix">
      <div class="site-category" @mouseleave="evtSideLeave">
        <div class="top-side-left">
          <ul class="side-left">
            <li
              class="side-item"
              @mouseenter="evtSideEnter(item.type)"
              v-for="(item, index) in sideItems"
              :key="index"
            >
              {{ item.content }}
              <div style="float:right;padding-right:25px">
                <i class="el-icon-arrow-right"></i>
              </div>
            </li>
          </ul>
        </div>
        <div class="site-category-detail" v-show="goodsStatus">
          <ul
            class="category-items"
            v-for="(goods, index) in filterCurrGoods"
            :key="index"
          >
            <li class="category-goods" v-for="item in goods" :key="item">
              <a class="goods-link" :href="item.sourceUrl">
                <img :src="item.imgUrl" style="width:40px;height:40px" />
                <div class="text-name">
                  {{ item.name }}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Slide></Slide>
    </div>
  </div>
</template>

<script>
import Slide from './Slide.vue'
export default {
  nsme: 'left_top_menu',
  data() {
    return {
      currGoods: [],
      goodsStatus: false,
      sideItems: [
        { type: 'phones', content: '手机 电话卡' },
        { type: 'tv', content: '电视 盒子' },
        { type: 'computer', content: '笔记本 显示器' },
        { type: 'jiadian', content: '家电 插线板' },
        { type: 'go', content: '出行 穿戴' },
        { type: 'router', content: '智能 路由器' },
        { type: 'peijian', content: '电源 配件' },
        { type: 'child', content: '健康 儿童' },
        { type: 'erji', content: '耳机 音箱' },
        { type: 'life', content: '生活 箱包' }
      ],
      banners: [
        {
          sourceUrl: '//item.mi.com/buyphone/mi5',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a53a285c8c341dd27dd60db89c8f063e.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
        },
        {
          sourceUrl: '//item.mi.com/buyphone/hongmi3s',
          imgUrl: 'http://i3.mifile.cn/a4/ba4939c9-fc0a-4916-bddc-726fa00f7e9b'
        },
        {
          sourceUrl: '//item.mi.com/buyphone/mimax',
          imgUrl: 'http://i3.mifile.cn/a4/9ced2c9e-f685-4918-9b2a-402af2d2039f'
        },
        {
          sourceUrl: '//item.mi.com/buyphone/note3',
          imgUrl: 'http://i3.mifile.cn/a4/f4bee59d-85a5-498f-ae57-a2cabe6aeb5b'
        },
        {
          sourceUrl: '//item.mi.com/buymitv/48',
          imgUrl: 'http://i3.mifile.cn/a4/98fc8a58-c35c-475e-89cb-b8fe1659817f'
        }
      ],
      phones: [
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/a/h/15804.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4d8753c35974699754af66388fc03a16.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: '中国电信'
        }
      ],
      tv: [
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/a/h/15804.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4d8753c35974699754af66388fc03a16.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: '中国电信'
        },
        {
          sourceUrl: 'https://www.mi.com/a/h/15804.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4d8753c35974699754af66388fc03a16.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: '中国电信'
        }
      ],
      computer: [
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/a/h/15804.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4d8753c35974699754af66388fc03a16.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: '中国电信'
        },
        {
          sourceUrl: 'https://www.mi.com/a/h/15804.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4d8753c35974699754af66388fc03a16.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: '中国电信'
        }
      ],
      jiadian: [
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/a/h/15804.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4d8753c35974699754af66388fc03a16.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: '中国电信'
        },
        {
          sourceUrl: 'https://www.mi.com/a/h/15804.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4d8753c35974699754af66388fc03a16.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: '中国电信'
        }
      ],
      go: [
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        }
      ],
      router: [
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        }
      ],
      peijian: [
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        }
      ],
      child: [
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        }
      ],
      erji: [
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        }
      ],
      life: [
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 5G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=50&h=50&f=webp&q=90',
          name: '小米10 青春版'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi K30 Pro'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg',
          name: 'Redmi 9A'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
          name: 'Redmi 10X 4G'
        },
        {
          sourceUrl: 'https://www.mi.com/p/1915.html/',

          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png',
          name: 'Redmi 9'
        }
      ]
    }
  },
  ready() {},
  computed: {
    filterCurrGoods: function() {
      let filterGoods = [[], [], [], [], []]
      this.currGoods.forEach(function(item, index) {
        let goodsIndex = Math.floor(index / 6)
        filterGoods[goodsIndex].push(item)
      })
      return filterGoods
    }
  },
  methods: {
    evtSideEnter(currType) {
      this.currGoods = this[currType]
      this.goodsStatus = true
    },
    evtSideLeave() {
      this.goodsStatus = false
    }
  },
  components: {
    Slide
  }
}
</script>

<style scoped>
.top-banner {
  position: relative;
  width: 1226px;
  height: auto;
  margin: 0 auto;
  background: white;
}
.site-category {
  position: absolute;
  left: 0;
  top: 0;
  width: 235px;
  height: auto;
  padding: 20px 0;
  background: rgb(161, 153, 153);
  z-index: 10;
}

.side-left {
  margin: 0;
  padding: 0;
  width: 235px;
  height: 420px;
  list-style: none;
}
.side-left .side-item {
  width: 100%;
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  color: #fff;
  text-align: left;
  cursor: pointer;
  padding-left: 30px;
}
.side-left .side-item:hover {
  background: #ff6700;
}
.site-category-detail .category-items {
  width: auto;
  height: 460px;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fff;
}
.site-category-detail .category-goods {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 265px;
  height: 76.6px;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
  background: #fff;
  cursor: pointer;
}
.site-category-detail .goods-link {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 170px;
}
.text-name {
  padding-left: 10px;
  font-size: 14px;
}
.goods-buy-link {
  display: block;
  width: 58px;
  height: 22px;
  line-height: 24px;
  font-size: 12px;
  text-align: center;
  color: #ff6700;
  border: 1px solid #ff6700;
}
.goods-buy-link:hover {
  color: #fff;
  background: #ff6700;
}

.site-category-detail {
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  left: 235px;
  top: 0;
  z-index: 10;
  border: 1px solid #e0e0e0;
  box-shadow: 3px 8px 16px rgba(0, 0, 0, 0.18);
}
.text-name:hover {
  color: #ff6700;
}
</style>
