<template>
  <div class="boxs-container">
    <div class="boxs">
      <div class="boxs-top clearfix">
        <h3 class="top-title">手机</h3>
        <a href="https://www.mi.com/a/h/14933.html" target="_blank">
          <span class="top-sub">
            查看全部
            <div class="youjiantou">
              <i class="sub-icon el-icon-arrow-right"></i>
            </div>
          </span>
        </a>
      </div>
      <div class="boxs-content clearfix">
        <div class="box-left">
          <a href="https://www.mi.com/mixalpha" target="_blank">
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg"
              alt=""
            />
          </a>
        </div>
        <div class="box-right">
          <ul class="box-list">
            <li class="box-item" v-for="(good, index) in goods" :key="index">
              <span class="discount-label" :class="good.discountType">{{
                good.discount
              }}</span>
              <a :href="good.sourceUrl" target="_blank">
                <img :src="good.imgUrl" alt="" />
                <h3 class="box-title">{{ good.title }}</h3>
              </a>
              <p class="box-desc">
                {{ good.desc }}
              </p>
              <p class="box-price">
                {{ good.price }}
                <template>
                  <span class="old-price"> {{ good.oldPrice }}</span>
                </template>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom">
      <a href="https://www.mi.com/a/h/15707.html"
        ><img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c3b86ede4dd31d7c126d56fbdde4f855.jpg?thumb=1&w=1533&h=150&f=webp&q=90"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        {
          sourceUrl: 'https://www.mi.com/mi10youth',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '小米10 青春版 5G',
          desc: '50倍潜望式变焦 / 轻薄5G手机',
          price: '1899元起',
          oldPrice: '2099元'
        },
        {
          sourceUrl: 'https://www.mi.com/buy/detail?product_id=10000214',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '小米10',
          desc: '骁龙865/1亿像素相机',
          price: '3799元起',
          oldPrice: '3999元'
        },
        {
          sourceUrl: 'https://www.mi.com/buy?product_id=10000223',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1aafa589258a4d9fdf49831b457418d.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: 'Redmi K30 Pro',
          desc: '双模5G，骁龙865，弹出全面屏',
          price: '2499元起',
          oldPrice: '2699元'
        },
        {
          sourceUrl: 'https://www.mi.com/buy?product_id=11763',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: 'Redmi K30 Pro 变焦版',
          desc: '双模5G，骁龙865，弹出全面屏',
          price: '3799元',
          oldPrice: ''
        },
        {
          sourceUrl: 'https://www.mi.com/buy?product_id=10000213',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccd09671448c4cdb4a3817f68f788662.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '小米10 Pro',
          desc: '骁龙865 / 50倍变焦',
          price: '4999元起',
          oldPrice: ''
        },
        {
          sourceUrl: 'https://www.mi.com/buy/detail?product_id=10000203',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c16238f786e4f93bdb175d7bf21aa47.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: 'Redmi K30',
          desc: '120Hz流速屏，全速热爱',
          price: '1399元起',
          oldPrice: '1699元'
        },
        {
          sourceUrl: 'https://www.mi.com/buy/detail?product_id=10000204',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/53641901fbc28cbcdb495b17fdf69e46.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: 'Redmi K30 5G',
          desc: '双模5G，120Hz流速屏',
          price: '1699元起',
          oldPrice: '2299元'
        },
        {
          sourceUrl: 'https://www.mi.com/buy/detail?product_id=10000204',
          imgUrl:
            '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: 'Redmi 8',
          desc: '5000mAh超长续航',
          price: '799元',
          oldPrice: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.boxs-container {
  width: 100%;
  height: auto;
  padding-top: 60px;
  background: #f5f5f5;
}

.boxs {
  position: relative;
  width: 1226px;
  height: auto;
  margin: 0 auto;
}

.boxs-top {
  width: 100%;
  height: 58px;
}

.top-title {
  float: left;
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}

.top-sub {
  float: right;
  display: block;
  font-size: 16px;
  text-align: center;
  color: #424242;
  cursor: pointer;
  margin-top: 26px;
}
.top-sub .youjiantou {
  float: right;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: gray;
  margin-left: 8px;
  padding-left: 1px;
}
.top-sub .youjiantou .sub-icon {
  color: #fdfdfd;
  font-size: 16px;
  padding: auto;
  font-weight: 800;
}

.top-sub:hover {
  transition: all 0.3s;
  color: #ff6700;
}
.top-sub:hover .youjiantou {
  background: #ff6700;
  transition: all 0.3s;
}
.box-left {
  float: left;
  width: 234px;
  height: 614px;
  cursor: pointer;
  transition: all 0.3s;
}
.box-left img {
  width: 234px;
  height: 614px;
}
.box-left:hover {
  transform: translateY(-1px);
  box-shadow: 5px 5px 20px #ccc;
}
.box-left img:hover {
  transform: translateY(-1px);
  box-shadow: 5px 5px 20px #ccc;
}
.box-right {
  float: left;
  width: 992px;
  height: 628px;
}
.box-right .box-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.box-right .box-item {
  position: relative;
  margin: 0 0 14px 14px;
  padding: 20px 0;
  width: 234px;
  height: 300px;
  background: #fff;
  transition: all 0.3s;
}
.box-right .box-item:hover {
  transform: translateY(-1px);
  box-shadow: 5px 5px 20px #ccc;
}

.box-right .box-item .discount-label {
  position: absolute;
  top: 0;
  left: 50%;
  width: 64px;
  height: 20px;
  line-height: 20px;
  margin-left: -32px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  z-index: 4;
}
.box-right .box-item .discount-label .free {
  background-color: #ffac13;
}
.box-right .box-item .discount-label .new {
  background-color: #83c44e;
}
.box-right .box-item .discount-label .discount {
  background-color: #e53935;
}

.box-right .box-item .old-price {
  color: #b0b0b0;
  text-decoration: line-through;
}
.box-right .box-item img {
  display: block;
  width: 160px;
  height: 160px;
  margin: 0 auto;
}
.box-right .box-item .box-title {
  font-size: 14px;
  text-align: center;
  color: #333;
  font-weight: normal;
}
.box-right .box-item .box-desc {
  margin: 0 10px 10px;
  height: 18px;
  font-size: 12px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #b0b0b0;
}
.box-right .box-item .box-price {
  color: #ff6700;
  font-size: 14px;
  text-align: center;
}
.bottom {
  width: 1226px;
  height: 145px;
  margin: 0 auto;
}
.bottom img {
  margin-top: 25px;
  width: 1226px;
  height: 120px;
}
</style>
