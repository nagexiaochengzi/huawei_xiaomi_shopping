<template>
  <div>
    <div id="slider">
      <div class="slider_div" @mouseover="stop" @mouseleave="play">
        <ul class="container" :style="containerStyle">
          <li>
            <img
              :style="{ width: imgWidth + 'px' }"
              :src="sliders[sliders.length - 1].img"
              alt=""
            />
          </li>
          <li v-for="(item, index) in sliders" :key="index">
            <img :style="{ width: imgWidth + 'px' }" :src="item.img" alt="" />
          </li>
          <li>
            <img
              :style="{ width: imgWidth + 'px' }"
              :src="sliders[0].img"
              alt=""
            />
          </li>
        </ul>
        <ul class="direction">
          <li class="left" @click="move(1500, 1)">
            <svg
              class="icon"
              width="30px"
              height="30.00px"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"
              />
            </svg>
          </li>
          <li class="right" @click="move(1500, -1)">
            <svg
              class="icon"
              width="30px"
              height="30.00px"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"
              />
            </svg>
          </li>
        </ul>
        <ul class="daohang">
          <li
            v-for="(dot, i) in sliders"
            :key="i"
            :class="{ dotted: i === currentIndex - 1 }"
            @click="jump(i + 1)"
          ></li>
        </ul>
      </div>
    </div>
    <div class="ban">
      <img
        src="https://res8.vmallres.com/20200630/images/echannel/bg/bg-slide.png"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'slider',
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      sliders: [
        {
          img:
            'https://res.vmallres.com/pimages//pages/picImages/81195074359517059118.jpg'
        },
        {
          img:
            'https://res.vmallres.com/pimages//pages/picImages/09437023459512073490.jpg'
        },
        {
          img:
            'https://res.vmallres.com/pimages//pages/picImages/84204374359517340248.jpg'
        },
        {
          img:
            'https://res.vmallres.com/pimages//pages/picImages/00415681559518651400.jpg'
        },
        {
          img:
            'https://res.vmallres.com/pimages//pages/picImages/95796766459516769759.jpg'
        },
        {
          img:
            'https://res7.vmallres.com/shopdc/pic/f3f7a978-cc27-485b-8ec6-314593aa5ad3.jpg'
        }
      ],
      imgWidth: 1500,
      currentIndex: 1,
      distance: -1500,
      transitionEnd: true,
      speed: this.initialSpeed
    }
  },
  computed: {
    containerStyle() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`
      }
    },
    interval() {
      return this.initialInterval * 1000
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.play()
      window.onblur = function() {
        this.stop()
      }.bind(this)
      window.onfocus = function() {
        this.play()
      }.bind(this)
    },
    move(offset, direction, speed) {
      console.log(speed)
      if (!this.transitionEnd) return
      this.transitionEnd = false
      direction === -1
        ? (this.currentIndex += offset / 1500)
        : (this.currentIndex -= offset / 1500)
      if (this.currentIndex > 6) this.currentIndex = 1
      if (this.currentIndex < 1) this.currentIndex = 6

      const destination = this.distance + offset * direction
      this.animate(destination, direction)
    },
    animate(des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp)
        this.temp = null
      }
      this.temp = window.setInterval(() => {
        if (
          (direc === -1 && des < this.distance) ||
          (direc === 1 && des > this.distance)
        ) {
          this.distance += speed * direc
        } else {
          this.transitionEnd = true
          window.clearInterval(this.temp)
          this.distance = des
          if (des < -9000) this.distance = -1500
          if (des > -1500) this.distance = -9000
        }
      })
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1
      const offset = Math.abs(index - this.currentIndex) * 1500
      const jumpSpeed =
        Math.abs(index - this.currentIndex) === 0
          ? this.speed
          : Math.abs(index - this.currentIndex) * this.speed
      this.move(offset, direction, jumpSpeed)
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer)
        this.timer = null
      }
      this.timer = window.setInterval(() => {
        this.move(1500, -1, this.speed)
      }, this.interval)
    },
    stop() {
      window.clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>
<style scoped>
.ban {
  position: absolute;
  margin: 0 auto;
  width: 1510px;
  height: 80px;
  margin-top: -80px;
}
.ban img {
  width: 100%;
  height: 100%;
}
#slider {
  text-align: center;
}
.slider_div {
  position: relative;
  width: 1500px;
  height: 550px;
  margin: 0 auto;
  overflow: hidden;
}
.container {
  display: flex;
  position: absolute;
}
.left,
.right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(163, 158, 158, 0.3);
  border-radius: 50%;
  cursor: pointer;
}
.left:hover {
  background-color: rgba(87, 85, 85, 0.3);
}
.right:hover {
  background-color: rgba(87, 85, 85, 0.3);
}
.left {
  left: 30%;
  padding-left: 12px;
  padding-top: 10px;
}
.right {
  right: 3%;
  padding-right: 12px;
  padding-top: 10px;
}

.daohang {
  position: absolute;
  margin-top: 470px;
  left: 85%;
  transform: translateX(-50%);
}
.daohang li {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  margin-left: 7px;
}
.daohang .dotted {
  background: rgb(255, 255, 255);
}
img {
  user-select: none;
  width: 1500px;
  height: 550px;
}
</style>
