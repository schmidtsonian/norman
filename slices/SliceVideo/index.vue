<template>
  <section class="s-video">
    <div class="container">
      <div class="col-18 col-xl2-14 offset-xl2-2">
        <prismicEmbed :field="slice.primary.vimeo" />
      </div>
    </div>
    <!-- <video :src="slice.primary.video.url" autoplay /> -->
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  name: 'SliceVideo',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
}
</script>

<style lang="scss">
  .s-video {
    iframe {
      width: 100%;
    }
  }
</style>
