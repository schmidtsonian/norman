<template>
  <section class="s-image-wc">
    <div class="container">
      <div class="row">
        <div class="col-18 col-md-8 col-xl2-6 offset-md-1">
          <ResponsiveImage :v-if="slice.primary.image" :image="slice.primary.image" />
        </div>
        <div class="col-18 col-md-8 offset-md-1 col-xl2-5 offset-xl2-3">
          <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
            <h3 v-if="item.headline" class="h-label">
              {{ item.headline }}
            </h3>
            <PrismicRichText v-if="item.content" :field="item.content" class="h-p" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  name: 'SliceImageWContent',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
}
</script>

<style lang="scss">

.s-image-wc {
  margin-bottom: 40px;
}

@include breakpoint-up(bp(md)) {
  .s-image-wc {
    margin-bottom: 140px;
  }
}

@include breakpoint-up(bp(xl2)) {
  .s-image-wc {
    margin-bottom: 240px;
  }
}

</style>
