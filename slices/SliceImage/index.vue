<template>
  <section
    class="s-image"
    :class="`s-image--${slice.variation.toLowerCase()}`"
  >
    <div v-if="slice.variation == 'fullViewportWidth'">
      <ResponsiveImage v-if="slice.primary.image" :image="slice.primary.image" />
    </div>

    <div v-if="slice.variation == 'alignRight'">
      <div class="container">
        <div class="row">
          <div class="col-16 offset-1 col-xl2-10 offset-xl2-8">
            <ResponsiveImage v-if="slice.primary.image" :image="slice.primary.image" />
            <p v-if="slice.primary.label" class="s-image__label">
              {{ slice.primary.label }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="slice.variation == 'labelCentered'">
      <div class="container">
        <div class="row">
          <div class="col-16 offset-1">
            <ResponsiveImage v-if="slice.primary.image" :image="slice.primary.image" />
          </div>
        </div>
      </div>
    </div>

    <div v-if="slice.variation == 'default'">
      <div class="container">
        <div class="row">
          <div class="col-16 offset-1 col-xl-14 offset-xl-2">
            <ResponsiveImage v-if="slice.primary.image" :image="slice.primary.image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  name: 'SliceImage',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  mounted () {
  }
}
</script>

<style lang="scss">

.s-image {
  margin-bottom: 40px;
}

@include breakpoint-up(bp(md)) {
  .s-image--alignright {
    margin-bottom: 80px;
  }

  .s-image--labelcentered,
  .s-image--fullviewportwidth {
    margin-bottom: 140px;
  }
}

@include breakpoint-up(bp(xl2)) {
  .s-image--alignright {
    margin-bottom: 120px;
  }

  .s-image--labelcentered,
  .s-image--fullviewportwidth {
    margin-bottom: 240px;
  }
}

</style>
