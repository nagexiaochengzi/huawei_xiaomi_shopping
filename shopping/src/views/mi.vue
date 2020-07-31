<template>
  <div>
    <!--右边导航-->
    <right_nav></right_nav>
    <!--顶部菜单-->
    <topmenu></topmenu>
    <br /><br />
    <!--Header-->
    <Header id="top"></Header>
    <!--左侧菜单-->
    <left_top_menu></left_top_menu>
    <lastNav></lastNav>
    <!--小米闪购-->
    <miaosha></miaosha>
    <!--手机-->
    <Phone></Phone>
    <!--家电-->
    <jiadian></jiadian><br /><br /><br /><br /><br /><br />
    <!--智能-->
    <zhineng></zhineng><br /><br /><br /><br /><br /><br />
    <!--搭配-->
    <dapei></dapei><br /><br /><br /><br /><br /><br />
    <!--配件-->
    <peijian></peijian><br /><br /><br /><br /><br /><br />
    <!--周边-->
    <zhoubian></zhoubian><br /><br /><br /><br /><br /><br />
    <!--视频-->
    <shipin></shipin>
    <!--底部-->
    <Footer></Footer>
  </div>
</template>
<script>
import topmenu from '@/components/mi/topmenu.vue'
import Header from '@/components/mi/Header.vue'
import left_top_menu from '@/components/mi/left_top_menu.vue'
import lastNav from '@/components/mi/lastNav.vue'
import miaosha from '@/components/mi/miaosha.vue'
import Phone from '@/components/mi/Phone.vue'
import jiadian from '@/components/mi/jiadian.vue'
import zhineng from '@/components/mi/zhineng.vue'
import dapei from '@/components/mi/dapei.vue'
import peijian from '@/components/mi/peijian.vue'
import zhoubian from '@/components/mi/zhoubian.vue'
import shipin from '@/components/mi/shipin.vue'
import Footer from '@/components/mi/Footer.vue'
import right_nav from '@/components/mi/right_nav.vue'

export default {
  name: 'mi',
  components: {
    topmenu,
    Header,
    left_top_menu,
    lastNav,
    miaosha,
    Phone,
    jiadian,
    zhineng,
    dapei,
    peijian,
    zhoubian,
    shipin,
    Footer,
    right_nav
  },
  data() {
    return {}
  },

  methods: {}
}
</script>
<style scoped>
div {
  background: #f5f5f5;
  height: 100%;
}
</style>
