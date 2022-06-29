<template>
  <section class="s-video">
    <div class="container">
      <div class="col-18 col-xl2-14 offset-xl2-2">
        <prismicEmbed :field="slice.primary.vimeo" class="s-video__embeded" />
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
    margin-bottom: 40px;
    iframe {
      width: 100%;
      height: 100%
    }
  }

  .s-video__embeded {
    aspect-ratio: 16/9;
    width: 100%;
  }

  @include breakpoint-up(bp(md)) {
    .s-video {
      margin-bottom: 140px;
    }
  }

  @include breakpoint-up(bp(xl2)) {
    .s-video {
      margin-bottom: 240px;
    }
  }
</style>
