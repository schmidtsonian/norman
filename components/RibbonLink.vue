<template>
  <PrismicLink
    ref="link"
    :field="link"
    :title="title"
    target="_lank"
    class="a-rb"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    @mouseenter="onMousEenter"
  >
    <span ref="linkText" class="a-rb__text">
      <span ref="linkS" class="a-rb__text-inner a-rb__text-inner--floated">
        <span>{{ title }}</span>
      </span>
      <span class="a-rb__text-inner a-rb__text-inner--spacer">
        <span>{{ title }}</span>
      </span>
      <span class="a-rb__s">—</span>
    </span>
  </PrismicLink>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { gsap, Cubic } from 'gsap'

export default {
  props: {
    link: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  // mounted () {
  //   this.setBoundaries()
  // },
  methods: {
    // setBoundaries () {
    //   // const offset = this.$refs.linkText.getBoundingClientRect()
    //   // this.rect = {
    //   //   left: offset.left,
    //   //   width: offset.width,
    //   //   top: offset.top,
    //   //   height: offset.height
    //   // }
    // },
    onMousEenter () {
      gsap.set(this.$refs.linkS, { css: { 'font-variation-settings': '"wdth" 100, "wght" var(--wght-i), "CNTR" 0' } })

      this.$nuxt.$emit('hoverEnter', 'VIEW')
    },
    onMouseLeave () {
      this.$nuxt.$emit('hoverLeave')
      gsap.to(this.$refs.linkS, {
        progress: 0,
        duration: 0.5,
        ease: Cubic.easeOut,
        '--wght-i': 200,
        onComplete: () => {
          gsap.set(this.$refs.linkS, { css: { 'font-variation-settings': 'unset' } })
        }
      })
    },
    onMouseMove (e) {
      const width = this.$refs.link.getBoundingClientRect().width / 2
      const height = this.$refs.link.getBoundingClientRect().height / 2
      const x = e.clientX - (this.$refs.link.getBoundingClientRect().x + (width))
      const y = e.clientY - (this.$refs.link.getBoundingClientRect().y + (height))

      const pX = Math.abs((x * 100) / (width))
      const pY = Math.abs((y * 100) / (width))
      const wX = 900 * (pX * 0.01)
      const wY = 900 * (pY * 0.01)

      const distanceSquared = wX + wY

      gsap.to(this.$refs.linkS, {
        duration: 0.5,
        ease: Cubic.easeOut,
        '--wght-i': gsap.utils.clamp(200, 900, 900 - distanceSquared)
      })
    }
  }
}

</script>

<style lang="scss">
// .a-image {
//   display: inline-block;
// }
.a-rb {
  display: inline-block;
  padding: 1em 0;
  text-align: center;
  position: relative;
}

.a-rb__text {
  position: relative;
  left: 0;
  display: inline-block;
}

.a-rb__text-inner {
  position: relative;
  font-size: rem(60);
  span {
    position: relative;
    display: inline-block;
  }
}

.a-rb__text-inner--floated {
  position: absolute;
  width: 100%;
  --wght-i: 200;
  --scale-x: 0;
  font-size: rem(55);
}

.a-rb__text-inner--spacer {
  visibility: hidden;
  opacity: 0;
}

.a-rb__s {
  position: relative;
  transform: translateX(55%);
  display: inline-block;
}

@include breakpoint-up(bp(md)) {
  .a-rb__text-inner {
    font-size: rem(90);
  }
  .a-rb__text-inner--floated {
    font-size: rem(85);
  }
}

@include breakpoint-up(bp(xl2)) {
  .a-rb__text-inner {
    font-size: rem(120);
  }

  .a-rb__text-inner--floated {
    font-size: rem(115);
  }
}

</style>
