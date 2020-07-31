<template>
  <div>
    <div id="slider">
      <div class="window" @mouseover="stop" @mouseleave="play">
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

        <ul class="dots">
          <li
            v-for="(dot, i) in sliders"
            :key="i"
            :class="{ dotted: i === currentIndex - 1 }"
            @click="jump(i + 1)"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'slider2',
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
            'https://res.vmallres.com/pimages//pages/picImages/20894307849510349802.png'
        },
        {
          img:
            'https://res.vmallres.com/pimages//pages/picImages/UqnuoBlDIPNI2LFM45T8.jpg'
        },
        {
          img:
            'https://res.vmallres.com/pimages//pages/picImages/LSCbJEGXMFYljbUODGnP.jpg'
        },
        {
          img:
            'https://res.vmallres.com/pimages//pages/picImages/47369432249513496374.png'
        },
        {
          img:
            'https://res.vmallres.com/pimages//pages/picImages/lZq6u4uSdHDERTqREhKP.jpg'
        },
        {
          img:
            'https://res.vmallres.com/pimages//pages/picImages/92000118359511100029.jpg'
        }
      ],
      imgWidth: 1200,
      currentIndex: 1,
      distance: -1200,
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
        ? (this.currentIndex += offset / 1200)
        : (this.currentIndex -= offset / 1200)
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
          if (des < -7200) this.distance = -1200
          if (des > -1200) this.distance = -7200
        }
      })
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1
      const offset = Math.abs(index - this.currentIndex) * 1200
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
        this.move(1200, -1, this.speed)
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
}
#slider {
  text-align: center;
}
.window {
  position: relative;
  width: 1200px;
  height: 120px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
}
.container {
  display: flex;
  position: absolute;
}

.dots {
  position: absolute;
  margin-top: 90px;
  left: 90%;
  transform: translateX(-50%);
}
.dots li {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid rgb(250, 250, 250);
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  margin-left: 5px;
}
.dots .dotted {
  background: rgb(255, 255, 255);
}
img {
  border-radius: 15px;
  user-select: none;
  width: 1200px;
  height: 120px;
}
</style>
