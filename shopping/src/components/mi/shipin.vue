<template>
  <div class="video-container">
    <div class="header clearfix">
      <h2 class="title">{{ title }}</h2>
      <a href="https://www.mi.com/video" target="_blank">
        <span class="top-sub">
          查看全部
          <div class="youjiantou">
            <i class="sub-icon el-icon-arrow-right"></i>
          </div>
        </span>
      </a>
    </div>
    <div class="video-content">
      <ul class="video-wrap clearfix">
        <li class="video-item" v-for="(item, index) in videos" :key="index">
          <button @click="tan" :id="item.btnid">
            <div class="item-top">
              <img :src="item.imgUrl" alt="" />
              <span class="play"> <i class="el-icon-caret-right"></i> </span>
            </div>
          </button>
          <br />
          <h3 class="video-title">{{ item.title }}</h3>
          <br />
          <p class="video-desc">
            {{ item.desc }}
          </p>
        </li>
      </ul>
    </div>
    <ul>
      <li v-for="(item2, index) in videos" :key="index">
        <div :id="item2.model" class="modal">
          <div class="modal-content">
            <div class="modal-header">
              <p>{{ item2.title }}</p>
              <button class="close" :id="item2.close">X</button>
            </div>
            <div class="modal-body">
              <video
                :src="item2.videoUrl"
                muted="muted"
                autoplay="autoplay"
                controls="controls"
              ></video>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '视频',
      videos: [
        {
          videoUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=370&h=225&f=webp&q=90',
          title: 'Redmi 10X系列发布会',
          desc: 'Redmi 10X系列发布会',
          btnid: 'btn1',
          model: 'myModal1',
          close: 'closeBtn1'
        },
        {
          videoUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=370&h=225&f=webp&q=90',
          title: '小米10 青春版 发布会',
          desc: '',
          btnid: 'btn2',
          model: 'myModal2',
          close: 'closeBtn2'
        },
        {
          videoUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=370&h=225&f=webp&q=90',
          title: '小米10 8K手机拍大片',
          desc: '',
          btnid: 'btn3',
          model: 'myModal3',
          close: 'closeBtn3'
        },
        {
          videoUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eadb8ddc86f1791154442a928b042e2f.mp4',
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8dd25cab48c60fc6387b9001eddc3f9.jpg?thumb=1&w=370&h=225&f=webp&q=90',
          title: '小米10发布会',
          desc: ' ',
          btnid: 'btn4',
          model: 'myModal4',
          close: 'closeBtn4'
        }
      ]
    }
  },
  methods: {
    evtPlayVideo(opts) {
      let videoOpt = {
        status: true,
        title: opts.title,
        videoUrl: opts.videoUrl
      }
      this.$dispatch('play', videoOpt)
    },
    tan() {
      /*建立弹框对象*/
      var modalBox1 = {}
      var modalBox2 = {}
      var modalBox3 = {}
      var modalBox4 = {}
      /*获取弹框*/
      modalBox1.modal1 = document.getElementById('myModal1')
      modalBox2.modal2 = document.getElementById('myModal2')
      modalBox3.modal3 = document.getElementById('myModal3')
      modalBox4.modal4 = document.getElementById('myModal4')
      /*获得按钮*/
      modalBox1.btn1 = document.getElementById('btn1')
      modalBox2.btn2 = document.getElementById('btn2')
      modalBox3.btn3 = document.getElementById('btn3')
      modalBox4.btn4 = document.getElementById('btn4')
      /*获得关闭按钮*/
      modalBox1.closeBtn1 = document.getElementById('closeBtn1')
      modalBox2.closeBtn2 = document.getElementById('closeBtn2')
      modalBox3.closeBtn3 = document.getElementById('closeBtn3')
      modalBox4.closeBtn4 = document.getElementById('closeBtn4')

      /*弹框显示*/
      modalBox1.show = function() {
        console.log(this.modal1)
        this.modal1.style.display = 'block'
      }
      modalBox2.show = function() {
        console.log(this.modal2)
        this.modal2.style.display = 'block'
      }
      modalBox3.show = function() {
        console.log(this.modal3)
        this.modal3.style.display = 'block'
      }
      modalBox4.show = function() {
        console.log(this.modal4)
        this.modal4.style.display = 'block'
      }

      /*弹框关闭*/
      modalBox1.close = function() {
        this.modal1.style.display = 'none'
      }
      modalBox2.close = function() {
        this.modal2.style.display = 'none'
      }
      modalBox3.close = function() {
        this.modal3.style.display = 'none'
      }
      modalBox4.close = function() {
        this.modal4.style.display = 'none'
      }

      /*点击内容之外的区域弹框也会关闭*/
      modalBox1.outsideClick = function() {
        var modal1 = this.modal1
        window.onclick = function(event) {
          if (event.target == modal1) {
            modal1.style.display = 'none'
          }
        }
      }
      modalBox2.outsideClick = function() {
        var modal2 = this.modal2
        window.onclick = function(event) {
          if (event.target == modal2) {
            modal2.style.display = 'none'
          }
        }
      }
      modalBox3.outsideClick = function() {
        var modal3 = this.modal3
        window.onclick = function(event) {
          if (event.target == modal3) {
            modal3.style.display = 'none'
          }
        }
      }
      modalBox4.outsideClick = function() {
        var modal4 = this.modal4
        window.onclick = function(event) {
          if (event.target == modal4) {
            modal4.style.display = 'none'
          }
        }
      }
      /*弹框初始化*/
      modalBox1.init = function() {
        var that = this
        this.btn1.onclick = function() {
          that.show()
        }
        this.closeBtn1.onclick = function() {
          that.close()
        }
        this.outsideClick()
      }
      modalBox2.init = function() {
        var that = this

        this.btn2.onclick = function() {
          that.show()
        }
        this.closeBtn2.onclick = function() {
          that.close()
        }
        this.outsideClick()
      }
      modalBox3.init = function() {
        var that = this
        this.btn3.onclick = function() {
          that.show()
        }
        this.closeBtn3.onclick = function() {
          that.close()
        }
        this.outsideClick()
      }
      modalBox4.init = function() {
        var that = this
        this.btn4.onclick = function() {
          that.show()
        }
        this.closeBtn4.onclick = function() {
          that.close()
        }
        this.outsideClick()
      }
      modalBox1.init()
      modalBox2.init()
      modalBox3.init()
      modalBox4.init()
    }
  },
  components: {}
}
</script>

<style>
.video-container {
  width: 1226px;
  height: auto;
  margin: 0 auto;
}
.header {
  position: relative;
}
.header .title {
  display: block;
  float: left;
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}
.header .top-sub {
  float: right;
  display: block;
  font-size: 16px;
  text-align: center;
  color: #424242;
  cursor: pointer;
  margin-top: 26px;
}
.header .top-sub .sub-icon {
  color: #ffffff;
  font-size: 20px;
}

.header .top-sub:hover {
  color: #ff6700;
}
.header .top-sub:hover .sub-icon {
  border-radius: 50%;
  background: #ff6700;
}

.video-wrap .video-item {
  position: relative;
  float: left;
  width: 296px;
  height: 285px;
  margin: 0 0 14px 14px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s;
}
.video-wrap .video-item:hover {
  transform: translateY(-3px);
  box-shadow: 5px 5px 20px #ccc;
}
.video-wrap .video-item:hover .play {
  background: #ff6700;
}
.video-wrap .video-item:nth-child(1) {
  margin-left: 0;
}
.video-wrap .video-item img {
  width: 296px;
  height: 180px;
}
.video-wrap .video-item .video-title {
  color: #333;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
}
.video-wrap .video-item .video-desc {
  height: 18px;
  margin: 0;
  font-size: 12px;
  text-align: center;
  color: #b0b0b0;
}
.item-top {
  position: relative;
}
.item-top .play {
  position: absolute;
  display: block;
  left: 20px;
  bottom: 10px;
  width: 32px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border: 2px solid #fff;
  border-radius: 12px;
  background: #333;
}
.youjiantou {
  float: right;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: gray;
  margin-left: 8px;
  padding-left: 1px;
}
.youjiantou .sub-icon {
  color: #fdfdfd;
  font-size: 16px;
  padding: auto;
  font-weight: 800;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-body {
  width: 100%;
  height: 495px;
  margin: 0 auto;
}
.modal-body video {
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
}
/*弹框内容*/
.modal-content {
  display: flex;
  flex-direction: column; /*垂直排列*/
  position: relative;
  background-color: #fefefe;
  margin: 6% auto; /*距顶部15% 水平居中*/
  width: 880px;
  height: 555px;
  animation: topDown 0.4s; /*自定义动画，从弹框内容上到下出现*/
  z-index: 66666;
}
@keyframes topDown {
  from {
    top: -100px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
/*弹框头部*/
.modal-header {
  height: 60px;
}
.modal-header p {
  text-align: left;
  margin-left: 20px;
  padding-top: 20px;
  font-size: 18px;
  font-weight: 400;
  color: #424242;
}
/*关闭X样式*/
.modal-content .close {
  outline: none;
  color: #aaa;
  float: left;
  margin-top: -23px;
  margin-left: 830px;
  font-size: 20px;
  width: 30px;
  height: 30px;
  background: transparent;
  border-radius: 50%;
}
.modal-content .close:hover {
  animation: topDown 0.4s;
  color: white;
  text-decoration: none;
  cursor: pointer;
  background: red;
  border-radius: 50%;
}
</style>
