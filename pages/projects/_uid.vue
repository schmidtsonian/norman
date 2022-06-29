<template>
  <article>
    <header class="header">
      <div class="container">
        <div class="row">
          <div class="col-18 col-lg-16 offset-lg-1 col-xl2-14 offset-xl2-2">
            <h1 class="headline">
              {{ document.data.headline }}
            </h1>
            <h2 v-if="document.data.description" class="description h-label">
              {{ document.data.description }}
            </h2>
            <ResponsiveImage :image="document.data.image" />
          </div>
        </div>
      </div>
    </header>

    <slice-zone :components="components" :slices="document.data.slices" />
  </article>
</template>

<script>
import { components } from '~/slices'

export default {
  layout: 'base',
  async asyncData ({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID('projects', params.uid)

    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data: () => {
    return { components }
  }

}
</script>

<style lang="scss">
  .header {
    text-align: center;
    padding-top: rem(160px);
    padding-bottom: rem(60px);
  }

  .headline {
    font-size: rem(38px);
    padding-bottom: rem(14px);
    line-height: 1.25em;
    letter-spacing: 0;
    font-variation-settings: "wdth" 50, "wght" 400, "CNTR" 0;
  }

  .description {
    padding-bottom: rem(35px);
  }

  @include breakpoint-up(bp(md)) {
    .header {
      padding-top: rem(265px);
      padding-bottom: rem(120px);
    }

    .headline {
      font-size: rem(90px);
      padding-bottom: rem(45px);
    }

    .description {
      padding-bottom: rem(100px);
    }
  }

  @include breakpoint-up(bp(xl2)) {
    .header {
      padding-top: rem(370px);
      padding-bottom: rem(240px);
    }

    .headline {
      font-size: 160px;
      padding-bottom: 68px;
    }

    .description {
      padding-bottom: 219px;
    }
  }
</style>
