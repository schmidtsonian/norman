<template>
  <PrismicLink
    ref="link"
    :field="link"
    :title="title"
    target="_lank"
    class="a-ribbon-link"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <span ref="linkText" class="a-ribbon-link__text">
      <span ref="linkS" class="a-ribbon-link__text-inner a-ribbon-link__text-inner--shadow">{{ title }}</span>
      <span class="a-ribbon-link__text-inner a-ribbon-link__text-inner--spacer">{{ title }}</span>
      <span class="a-ribbon-link__s"> - </span>
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
  mounted () {
    this.setBoundaries()
  },
  methods: {
    setBoundaries () {
      const offset = this.$refs.linkText.getBoundingClientRect()
      this.rect = {
        left: offset.left,
        width: offset.width,
        top: offset.top,
        height: offset.height
      }
    },
    onMouseLeave () {
      gsap.to(this.$refs.linkS, {
        progress: 0,
        duration: 0.25,
        ease: Cubic.easeOut,
        '--wght-i': 200,
        onComplete: () => {
          gsap.set(this.$refs.linkS, { css: { 'font-variation-settings': 'unset' } })
        }
      })
    },
    onMouseMove (e) {
      gsap.set(this.$refs.linkS, { css: { 'font-variation-settings': '"wdth" 100, "wght" var(--wght-i), "CNTR" 0' } })
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
        duration: 0.25,
        ease: Cubic.easeOut,
        '--wght-i': gsap.utils.clamp(200, 900, 900 - distanceSquared)
      })
    }
  }
}

</script>

<style lang="scss">
.a-image {
  display: inline-block;
  // font-variation-settings: "wdth" 100, "wght" var(--wght-i), "CNTR" 0;
}
.a-ribbon-link {
  display: inline-block;
  padding: 1em 0;
  text-align: center;
  position: relative;
}

.a-ribbon-link__text {
  position: relative;
  left: 0;
  display: inline-block;
}

.a-ribbon-link__text-inner {
  position: relative;
  font-size: rem(60);
}

.a-ribbon-link__text-inner--shadow {
  position: absolute;
  width: 100%;
  --wght-i: 200;
  font-size: rem(50);
}

.a-ribbon-link__text-inner--spacer {
  visibility: hidden;
  opacity: 0;
}

.a-ribbon-link__s {
  position: relative;
  transform: translateX(100%);
  display: inline-block;
}

@include breakpoint-up(bp(md)) {
  .a-ribbon-link__text-inner {
    font-size: rem(90);
  }
}

.a-ribbon-link__text-inner--shadow {
  font-size: rem(80);
}

@include breakpoint-up(bp(xl2)) {
  .a-ribbon-link__text-inner {
    font-size: rem(120);
  }

  .a-ribbon-link__text-inner--shadow {
    font-size: rem(100);
  }
}

</style>
