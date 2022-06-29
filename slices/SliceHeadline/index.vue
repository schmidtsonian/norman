<template>
  <section class="s-headline">
    <div class="container">
      <div class="row">
        <div class="col-18 col-lg-16 offset-lg-1 col-xl3-14 offset-xl3-2 ">
          <strong v-if="slice.primary.topLine" class="s-headline__t h-label">{{ slice.primary.topLine }}</strong>

          <PrismicRichText
            v-if="slice.primary.headline"
            :field="slice.primary.headline"
            class="s-headline__h"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  name: 'SliceHeadline',
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
}
</script>

<style lang="scss">
  .s-headline {
    text-align: center;
    padding-bottom: rem(40);
  }

  .s-headline__t {
    padding-bottom: rem(14);
    display: block;
  }

  .s-headline__h {
    font-size: rem(20);
    line-height: 1.4;
    font-variation-settings: "wdth" 50, "wght" 400, "CNTR" 0;
  }

  @include breakpoint-up(bp(md)) {
    .s-headline {
      padding-bottom: rem(140);
      letter-spacing: 0;
    }

    .s-headline__t {
      padding-bottom: rem(27);
    }

    .s-headline__h {
      font-size: rem(40);
    }
  }

  @include breakpoint-up(bp(xl2)) {
    .s-headline {
      padding-bottom: rem(240);
    }

    .s-headline__t {
      padding-bottom: rem(40);
    }

    .s-headline__h {
      font-size: rem(60);
    }
  }
</style>
