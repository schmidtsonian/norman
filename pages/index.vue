<template>
  <div class="container">
    <div class="row">
      <div class="col-18">
        <div v-for="(project, i) in document.results" :key="`project-${i}`">
          <router-link
            class="link"
            :to="`/projects/${project.uid}`"
            @mouseleave.native="onMouseLeave"
            @mouseenter.native="onMousEenter"
          >
            {{ project.data.headline }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { gsap } from 'gsap'
// eslint-disable-next-line no-unused-vars
import { ScrollSmoother } from 'gsap/ScrollSmoother'
// eslint-disable-next-line no-unused-vars
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// eslint-disable-next-line no-unused-vars

if (process.client) {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
}

export default {
  name: 'HomePage',
  layout: 'base',
  async asyncData ({ $prismic, params, error }) {
    // const document = await $prismic.api.getSingle('home')
    const document = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'projects')
    )
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  mounted () {
    ScrollTrigger.refresh()
    ScrollSmoother.refresh()
  },
  methods: {
    onMousEenter () {
      this.$nuxt.$emit('hoverEnter', 'VIEW')
    },
    onMouseLeave () {
      this.$nuxt.$emit('hoverLeave')
    }
  }
}
</script>

<style lang="scss">
  .link {
    display: block;
  }
</style>
