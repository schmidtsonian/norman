<template>
  <main ref="mainWrapper" class="l-main" @mousemove="onMouseMove" @resize="setBoundaries">
    <header class="l-header">
      <router-link
        to="/"
        @mouseleave.native="onLogoMouseLeave"
        @mouseenter.native="onLogoMouseEnter"
      >
        <h1 class="h-font-logo l-header__logo">
          <span class="l-header__l l-header__l--f">N</span>
          <span class="l-header__l l-header__l--s">O</span>
          <span class="l-header__l l-header__l--s">R</span>
          <span class="l-header__l l-header__l--s">M</span>
          <span class="l-header__l l-header__l--s">A</span>
          <span class="l-header__l l-header__l--s">N</span>
          <span class="l-header__l l-header__l--s">&nbsp;</span>
          <span class="l-header__l l-header__l--f">D</span>
          <span class="l-header__l l-header__l--s">U</span>
          <span class="l-header__l l-header__l--s">B</span>
          <span class="l-header__l l-header__l--s">O</span>
          <span class="l-header__l l-header__l--s">I</span>
          <span class="l-header__l l-header__l--s">S</span>
        </h1>
      </router-link>
    </header>

    <button
      ref="btMenu"
      class="l-bt-menu"
      @mouseleave="onButtonMouseLeave"
      @mouseenter="onButtonMouseEnter"
      @mousemove="onButtonMouseMove"
      @click="onToggleBtMenu"
    >
      <span ref="btMenuText"> {{ isMenuActive ? 'CLOSE' : 'MENU' }} </span>
    </button>

    <LayoutNavigation ref="nav" :class="`${isMenuActive ? 'is-active' : ''}`" />

    <div ref="mainContainer" class="l-container">
      <Nuxt />
    </div>

    <footer class="l-footer">
      <div class="l-footer__logo">
        <h4 class="h-font-logo">
          .Design
        </h4>
      </div>
    </footer>

    <CornerCmyk class="l-corner--left-top" />
    <CornerCmyk class="l-corner--right-top" />
    <CornerCmyk class="l-corner--left-bottom" />
    <CornerCmyk class="l-corner--right-bottom" />

    <CircleXy class="l-circle-xy l-circle-xy--left" />
    <CircleXy class="l-circle-xy l-circle-xy--right" />
    <span ref="cursor" class="l-cursor" :class="`${isCursorActive ? 'is-active' : ''} ${isHalfX ? 'is-half-x' : ''}`">
      <span class="l-cursor__circle l-cursor__circle--outter">
        <span ref="cursorCircle" class="l-cursor__circle l-cursor__circle--inner">
          <svg class="l-cursor__arrow" x="0px" y="0px" viewBox="0 0 15.4 15.4">
            <path d="M1,15.4L11.1,5.3c1.2-1.2,1.6-2.2,2.7-3.3l0.1,0.1c-0.9,2.2-1,4.7-0.4,7L15.2,9c-0.9-2.7-0.8-5.7,0.2-8.4 L14.8,0c-2.7,1-5.6,1.1-8.4,0.2L6.3,2c2.3,0.6,4.8,0.5,7-0.4l0.1,0.1c-1.1,1.1-2.1,1.5-3.3,2.7L0,14.4L1,15.4z" />
          </svg>
        </span>
      </span>

    </span>
    <span ref="tooltip" class="l-tooltip">
      <span class="l-tooltip__text">
        {{ textCursor }}
      </span>
    </span>
  </main>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import { gsap, Circ, Cubic } from 'gsap'
// eslint-disable-next-line no-unused-vars
import { ScrollSmoother } from 'gsap/ScrollSmoother'
// eslint-disable-next-line no-unused-vars
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
}

export default {
  name: 'LayoutBase',
  data () {
    return {
      isCursorActive: false,
      isMenuActive: false,
      isHalfX: false,
      textCursor: '',
      vW: 100,
      vH: 100,
      posCircle: {
        x: 1,
        y: 1
      },
      posTooltip: {
        x: 1,
        y: 1
      },
      mouse: {
        x: 1,
        y: 1
      },
      speedCircle: 0.05,
      speedText: 0.045,
      scroll: ScrollSmoother
    }
  },
  mounted () {
    this.dt = {
      x: 0,
      y: 0
    }

    this.setBoundaries()

    this.$nuxt.$on('hoverEnter', (payLoad) => {
      this.isCursorActive = true
      this.textCursor = payLoad
    })
    this.$nuxt.$on('hoverLeave', () => {
      this.isCursorActive = false
      this.textCursor = ''
    })
    this.scroll = ScrollSmoother.create({
      smooth: 1,
      wrapper: this.$refs.mainWrapper,
      content: this.$refs.mainContainer,
      effects: true,
      onUpdate: (d) => {
        const velocity = Math.abs(d.getVelocity()) * 0.01
        const ampliation = Math.abs(d.getVelocity()) * 0.002
        gsap.to(this.$refs.mainWrapper, {
          duration: 0.75,
          ease: Circ.easeOut,
          '--c': `${gsap.utils.clamp(0, 6, velocity)}px`,
          '--m': `${gsap.utils.clamp(0, 12, velocity)}px`,
          '--y': `${gsap.utils.clamp(0, 18, velocity)}px`,
          '--k': `${gsap.utils.clamp(0, 24, velocity)}px`,

          '--cc': `${gsap.utils.clamp(0, 1.6, ampliation)}`,
          '--cm': `${gsap.utils.clamp(0, 2.2, ampliation)}`,
          '--cy': `${gsap.utils.clamp(0, 2.8, ampliation)}`,
          '--ck': `${gsap.utils.clamp(0, 1, ampliation)}`,

          '--yy': `${gsap.utils.clamp(-65, 65, d.getVelocity() * 0.004)}px`
        })
      },
      onStop: () => {
        gsap.to(this.$refs.mainWrapper, {
          duration: 0.75,
          ease: Circ.easeOut,
          '--c': '0px',
          '--m': '0px',
          '--y': '0px',
          '--k': '0px',

          '--cc': '0',
          '--cm': '0',
          '--cy': '0',
          '--ck': '0',
          '--yy': '0px'
        })
      }
    })

    const setX = gsap.quickSetter(this.$refs.mainWrapper, '--px', 'px')
    const setY = gsap.quickSetter(this.$refs.mainWrapper, '--py', 'px')

    const setCircleX = gsap.quickSetter(this.$refs.cursor, 'x', 'px')
    const setCircleY = gsap.quickSetter(this.$refs.cursor, 'y', 'px')

    const setCircleW = gsap.quickSetter(this.$refs.cursorCircle, 'border-width', 'px')
    const setTooltipX = gsap.quickSetter(this.$refs.tooltip, 'x', 'px')
    const setTooltipY = gsap.quickSetter(this.$refs.tooltip, 'y', 'px')

    gsap.ticker.add(() => {
      const dtCircle = 1.0 - Math.pow(1.0 - this.speedCircle, gsap.ticker.deltaRatio())
      const dtTooltip = 1.0 - Math.pow(1.0 - this.speedText, gsap.ticker.deltaRatio())

      this.isHalfX = this.mouse.x > this.vW

      const xCircle = this.isHalfX === true ? this.mouse.x - 50 : this.mouse.x + 50
      const yCircle = this.mouse.y > this.vH ? this.mouse.y - 50 : this.mouse.y + 50
      const xTooltip = this.isHalfX === true ? this.mouse.x - 50 : this.mouse.x + 50
      const yTooltip = this.mouse.y > this.vH ? this.mouse.y - 50 : this.mouse.y + 50

      this.posCircle.x += (xCircle - this.posCircle.x) * dtCircle
      this.posCircle.y += (yCircle - this.posCircle.y) * dtCircle
      this.posTooltip.x += (xTooltip - this.posTooltip.x) * dtTooltip
      this.posTooltip.y += (yTooltip - this.posTooltip.y) * dtTooltip

      const distance = Math.abs((xCircle - this.posCircle.x) * dtCircle) + Math.abs((yCircle - this.posCircle.y) * dtCircle)
      const w = gsap.utils.clamp(1, 10, distance)

      setCircleW(w)
      setCircleX(this.posCircle.x)
      setCircleY(this.posCircle.y)
      setTooltipX(this.posTooltip.x)
      setTooltipY(this.posTooltip.y)

      setX(this.posCircle.x)
      setY(this.posCircle.y)
    })
  },
  methods: {
    setBoundaries () {
      this.vW = window.innerWidth / 2
      this.vH = window.innerHeight / 2

      // ScrollTrigger.refresh()
      ScrollSmoother.refresh()
    },
    onMouseMove (e) {
      this.mouse = {
        x: e.x,
        y: e.y
      }
    },
    onLogoMouseEnter () {
      this.$nuxt.$emit('hoverEnter', 'HOME')
    },
    onLogoMouseLeave () {
      this.$nuxt.$emit('hoverLeave')
    },
    onButtonMouseEnter () {
      this.$nuxt.$emit('hoverEnter', 'MENU')

      gsap.set(this.$refs.btMenuText, { css: { 'font-variation-settings': '"wdth" var(--wdth-i), "wght" var(--wght-i), "CNTR" 0' } })
    },
    onButtonMouseMove (e) {
      const width = this.$refs.btMenu.getBoundingClientRect().width / 2
      const height = this.$refs.btMenu.getBoundingClientRect().height / 2
      // const x = e.clientX - (this.$refs.btMenu.getBoundingClientRect().x + (width))
      const y = e.clientY - (this.$refs.btMenu.getBoundingClientRect().y + (height))
      // const pX = Math.abs((x * 100) / (width))
      const pY = Math.abs((y * 100) / (width))
      // const wX = 900 * (pX * 0.01)
      const wY = 900 * (pY * 0.01)

      // const distanceSquared = wX + wY
      const distanceSquared = wY

      gsap.to(this.$refs.btMenuText, {
        duration: 0.5,
        ease: Cubic.easeOut,
        '--wdth-i': gsap.utils.clamp(100, 200, 200 - distanceSquared),
        '--wght-i': gsap.utils.clamp(200, 900, 900 - distanceSquared)
      })
    },
    onButtonMouseLeave () {
      this.$nuxt.$emit('hoverLeave')

      gsap.to(this.$refs.btMenuText, {
        progress: 0,
        duration: 0.5,
        ease: Cubic.easeOut,
        '--wdth-i': 100,
        '--wght-i': 200
        // onComplete: () => {
        //   gsap.set(this.$refs.btMenuText, { css: { 'font-variation-settings': 'unset' } })
        // }
      })
    },
    onToggleBtMenu () {
      this.isMenuActive = !this.isMenuActive
      this.scroll.paused(this.isMenuActive)
    }
  }
}
</script>

<style lang="scss">
  .l-bt-menu {
    z-index: $z-index--layout + 1;
  }

  .l-header,
  .l-footer {
    z-index: $z-index--layout;
  }

  .l-cursor,
  .l-tooltip {
    z-index: $z-index--layout + 2;
  }

  .l-main {
    background-color: $color--white;
  }

  .l-header__logo {
    letter-spacing: 0;
  }

  .l-header,
  .l-footer {
    position: relative;
    width: 100vw;
  }

  .l-container {
    position: relative;
  }

  .l-header,
  .l-bt-menu {
    padding-top: rem(25);
  }

  .l-header {
    text-align: center;
    font-size: rem(30);
    mix-blend-mode: difference;
    color: $color--white
  }

  .l-bt-menu,
  .l-header {
    height: rem(30px);
    line-height: rem(30);
  }

  .l-bt-menu {
    position: absolute;
    box-sizing: content-box;
    text-align: left;
    top: 0;
    right: 0;
    padding-right: rem(70);
    padding-left: rem(70);
    padding-bottom: 2em;
    // width: 8em;
    --wdth-i: 100;
    --wght-i: 200;
    font-family: $ff-atacama;
    font-variation-settings: "wdth" var(--wdth-i), "wght" var(--wght-i), "CNTR" 0;
    cursor: pointer;
    mix-blend-mode: difference;
    color: $color--white
  }

  .l-footer__logo {
    margin-left: auto;
    margin-right: auto;
  }

  .l-header__l--s {
    display: none;
  }

  .l-footer {
    width: 100%;
    position: fixed;
  }

  .l-footer__logo {
    text-align: center;
    font-size: rem(28);
    width: rem(128);
    height: rem(26);
    display: none;
  }

  .l-corner--right-top {
    transform: rotate(90deg);
  }

  .l-corner--right-bottom {
    transform: rotate(180deg);
  }

  .l-corner--left-bottom {
    transform: rotate(270deg);
  }

  .l-corner--left-top,
  .l-corner--right-top {
    top: rem(25)
  }

  .l-corner--left-bottom,
  .l-corner--right-bottom {
    bottom: rem(25)
  }

  .l-corner--left-top,
  .l-corner--left-bottom,
  .l-circle-xy--left {
    left: rem(25);
  }

  .l-corner--right-top,
  .l-corner--right-bottom,
  .l-circle-xy--right {
    right: rem(25);
  }

  .l-circle-xy {
    transform: translateY(var(--yy));
  }

  .l-cursor {
    position: fixed;
    left: 0;
    top: 0;
    mix-blend-mode: difference;
    pointer-events: none;
  }

  .l-cursor__circle {
    position: relative;
    display: block;
    border-radius: 50%;
    width: rem(15);
    height: rem(15);
    overflow: hidden;
    mix-blend-mode: difference;
    background-color: $color--white;

    transition-property: width, height;
    transition-duration: 0.45s;
    transition-timing-function: $inOutBack;
  }

  .l-cursor__circle--inner {
    border: 1px solid $color--black;
  }

  .l-cursor__arrow {
    width: rem(15);
    height: rem(15);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    background-color: $color--white;
    opacity: 0;
    transform: rotate(-90deg);
    transition-property: opacity, transform;
    transition-duration: 0.25s;
    transition-timing-function: $customAuthenticMotion;

    path {
      mix-blend-mode: difference;
      fill: $color--white
    }
  }

  .l-cursor.is-half-x {
    .l-cursor__arrow {
      transform: rotate(0deg)
    }
  }

  .l-cursor.is-active {
    .l-cursor__arrow {
      opacity: 1;
      transition-duration: 0.45s 0.15s;
    }
    .l-cursor__circle {
      width: rem(40);
      height: rem(40);
      transition-duration: 0.25s;
    }
  }

  .l-tooltip {
    font-size: rem(10);
    height: rem(15);
    position: fixed;
    top: rem(40);
    color: $color--black;
    pointer-events: none;
    mix-blend-mode: difference;
  }

  .l-tooltip__text {
    color: $color--white;
    mix-blend-mode: difference;
    display: inline-block;
  }

  @include breakpoint-up(bp(sm)) {
    // .l-bt-menu,
    // .l-header {
    //   height: rem(22);
    //   line-height: rem(22);
    // }

    .l-bt-menu {
      padding-left: rem(100);
      padding-right: rem(100);
    }
  }

  @include breakpoint-up(bp(md)) {
    .l-header__l--s {
      display: inline-block;
    }
    // .l-bt-menu,
    // .l-header {
    //   height: rem(22);
    //   line-height: rem(22);
    // }

    .l-bt-menu,
    .l-header {
      padding-top: rem(30);
    }

    .l-footer__logo {
      display: block;
    }

    // .l-bt-menu {
    //   width: 9em;
    // }

    .l-corner--left-top,
    .l-corner--right-top {
      top: rem(30)
    }

    .l-footer,
    .l-corner--left-bottom,
    .l-corner--right-bottom {
      bottom: rem(30)
    }

    .l-corner--left-top,
    .l-corner--left-bottom,
    .l-circle-xy--left {
      left: rem(30);
    }

    .l-corner--right-top,
    .l-corner--right-bottom
    .l-circle-xy--right {
      right: rem(30);
    }
  }

  @include breakpoint-up(bp(xl2)) {
    .l-bt-menu,
    .l-header {
      padding-top: rem(40);
    }

    .l-bt-menu {
      font-size: rem(20);
      padding-left: rem(140);
      padding-right: rem(140);
    }

    .l-corner {
      &, span {
        width: rem(18);
        height: rem(18);
      }
    }

    .l-corner--left-top,
    .l-corner--right-top {
      top: rem(42)
    }

    .l-footer,
    .l-corner--left-bottom,
    .l-corner--right-bottom {
      bottom: rem(25)
    }

    .l-corner--left-top,
    .l-corner--left-bottom,
    .l-circle-xy--left {
      left: rem(25);
    }

    .l-corner--right-top,
    .l-corner--right-bottom,
    .l-circle-xy--right {
      right: rem(25);
    }
  }
</style>
