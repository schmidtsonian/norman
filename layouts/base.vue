<template>
  <main ref="mainWrapper">
    <div ref="mainContainer">
      <header>the Header</header>
      <Nuxt />
      <div>the Footer</div>
    </div>
  </main>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import { gsap } from 'gsap'
// eslint-disable-next-line no-unused-vars
import { ScrollSmoother } from 'gsap/ScrollSmoother'
// eslint-disable-next-line no-unused-vars
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
}
export default {
  name: 'LayoutBase',
  mounted () {
    ScrollSmoother.create({
      wrapper: this.$refs.mainWrapper,
      content: this.$refs.mainContainer,
      effects: true
    })
  }
}
</script>
