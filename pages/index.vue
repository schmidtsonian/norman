<template>
  <div class="t-home">
    <div class="container">
      <div class="row">
        <div class="col-14 offset-2 ">
          <div v-for="(project, i) in document.results" :key="`project-${i}`">
            <router-link
              class="link"
              :to="`/projects/${project.uid}`"
              @mouseenter.native="$nuxt.$emit('hoverEnter', `VIEW :: ${project.data.headline} ::`)"
              @mouseleave.native="$nuxt.$emit('hoverLeave')"
            >
              {{ project.data.headline }}
            </router-link>
          </div>
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
  }
}
</script>

<style lang="scss">
  .t-home {
    padding-top: rem(40);
    padding-bottom: rem(40);
  }
  .link {
    display: block;
  }

  @include breakpoint-up(bp(md)) {
    .t-home {
      padding-top: rem(140);
      padding-bottom: rem(140);
    }
  }

  @include breakpoint-up(bp(xl2)) {
    .t-home {
      padding-top: rem(240);
      padding-bottom: rem(240);
    }
  }
</style>
