<template>
  <div class="goods-right">
    <ul class="goods-right-content">
      <ul v-for="(goods, index) in currGoods" :key="index">
        <template>
          <li class="goods-right-item" v-if="index < currGoods.length - 1">
            <span class="discount-label" :class="goods.discountType">{{
              goods.discount
            }}</span>
            <a :href="goods.sourceUrl" target="_blank">
              <img :src="goods.imgUrl" alt="" />
              <h3 class="goods-title">{{ goods.title }}</h3>
            </a>
            <p class="goods-xinghao">{{ goods.xinghao }}</p>

            <p class="goods-price">
              {{ goods.price }}
              <span v-if="goods.discountType === 'discount'" class="old-price">
                {{ goods.oldPrice }}
              </span>
            </p>
          </li>
        </template>
      </ul>
      <ul class="goods-right-small">
        <template v-if="lastGoods">
          <li class="item-small">
            <a :href="lastGoods.sourceUrl" target="_blank">
              <div class="desc">
                <h3 class="title" style="font-size:14px">
                  {{ lastGoods.title }}
                </h3>
                <span class="price"> {{ lastGoods.price }}</span>
              </div>
              <img class="small-img" :src="lastGoods.imgUrl" alt="" />
            </a>
          </li>
          <li class="item-small read-more">
            <a :href="lastGoods.moreUrl" target="_blank">
              <div class="desc" style=" margin-top: 20px;">
                <h3 class="title">
                  浏览更多
                </h3>
                <span class="price hot" style="color:#757575;">
                  热门
                </span>
              </div>
              <div class="big_icon">
                <i class="el-icon-right icon-arrow"></i>
              </div>
            </a>
          </li>
        </template>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    currGoods: {
      required: true,
      type: Array
    }
  },
  computed: {
    lastGoods: function() {
      if (this.currGoods && this.currGoods.length > 0) {
        return this.currGoods[this.currGoods.length - 1]
      } else {
        return null
      }
    }
  }
}
</script>

<style>
.goods-right {
  float: left;
  width: 992px;
  height: 628px;
}
.goods-right .goods-right-content {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}
.goods-right-item {
  position: relative;
  margin: 0 0 14px 14px;
  padding: 20px 0;
  width: 234px;
  height: 300px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s;
}
.goods-right-item:hover {
  transform: translateY(-1px);
  box-shadow: 5px 5px 20px #ccc;
}

.goods-right-item .discount-label {
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
.goods-right-item .discount-label .free {
  background-color: #ffac13;
}
.goods-right-item .discount-label .new {
  background-color: #83c44e;
}
.goods-right-item .discount-label .discount {
  background-color: #e53935;
}
.goods-right-item .goods-price .old-price {
  color: #b0b0b0;
  text-decoration: line-through;
}
.goods-right-item img {
  display: block;
  width: 160px;
  height: 160px;
  margin: 0 auto;
}
.goods-right-item .goods-title {
  font-size: 14px;
  text-align: center;
  color: #333;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.goods-right-item .goods-price {
  color: #ff6700;
  font-size: 14px;
  text-align: center;
  padding-top: 20px;
}
.goods-right-item .goods-xinghao {
  margin: 8px 10px;
  font-size: 12px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #b0b0b0;
}
.goods-right-small {
  width: 234px;
  height: 260px;
}
.goods-right-small .item-small {
  width: 234px;
  height: 143px;
  margin: 0 0 14px 14px;
  padding: 30px 0 0 30px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s;
  box-sizing: border-box;
}
.goods-right-small .item-small:hover {
  transform: translateY(-1px);
  box-shadow: 5px 5px 20px #ccc;
}
.goods-right-small .item-small .desc {
  float: left;
  width: 100px;
  height: 100%;
  margin-right: 20px;
  margin-top: 10px;
}
.goods-right-small .item-small .desc .title {
  font-size: 18px;
  text-align: left;
  color: rgb(77, 73, 73);
  font-weight: normal;
}
.goods-right-small .item-small .desc .price {
  display: block;
  width: 100%;
  color: #ff6700;
  font-size: 14px;
  text-align: left;
}
.goods-right-small .item-small .small-img {
  float: left;
  width: 80px;
  height: 80px;
  position: absolute;
  margin-left: -10px;
}
.goods-right-small .big_icon {
  position: absolute;
  margin-top: 20px;
  margin-left: 125px;
  width: 48px;
  height: 48px;
  border: 3px solid#ff6700;
  border-radius: 50%;
  text-align: center;
}
.goods-right-small .big_icon .icon-arrow {
  font-weight: 700;
  color: #ff6700;
  font-size: 31px;
  padding-top: 5.5px;
}
</style>
