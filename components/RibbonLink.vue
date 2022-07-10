<template>
  <PrismicLink
    ref="link"
    :field="link"
    :title="title"
    target="_lank"
    class="a-ribbon-link"
    @mouseover="mouseover()"
    @mouseleave="mouseleave()"
  >
    <span ref="linkS">{{ title }}</span>
    <span> - </span>
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
  methods: {
    mouseover () {
      gsap.set(this.$refs.link, { css: { 'font-variation-settings': '"wdth" 100, "wght" var(--wght-i), "CNTR" 0' } })
      gsap.to(this.$refs.link, {
        duration: 0.25,
        ease: Cubic.easeOut,
        '--wght-i': '900'
      })
    },
    mouseleave () {
      gsap.to(this.$refs.link, {
        duration: 0.25,
        '--wght-i': '200',
        ease: Cubic.easeOut,
        onComplete: () => {
          gsap.set(this.$refs.link, { css: { 'font-variation-settings': 'unset' } })
        }
      })
    }
  }
}

</script>

<style lang="scss">
.a-image {
  display: inline-block;
  --wght-i: 200;
  // font-variation-settings: "wdth" 100, "wght" var(--wght-i), "CNTR" 0;
}
</style>
