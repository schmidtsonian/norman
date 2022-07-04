<template>
  <section class="s-metas">
    <div class="container">
      <div class="row">
        <div class="col-18 col-md-9 col-lg-9 offset-lg-1 col-xl2-7 offset-xl2-1 col-xl3-6 offset-xl3-2 s-metas__col-desc">
          <PrismicRichText
            :field="slice.primary.description"
            class="h-p"
          />
        </div>

        <div class="col-18 col-md-9 col-lg-6 offset-lg-1 col-xl2-6 offset-xl2-2 s-metas__col-metas">
          <div>
            <div
              v-for="(item, i) in slice.items"
              :key="`slice-item-${i}`"
              class="s-metas__item"
            >
              <h3 v-if="item.headline" class="h-label">
                {{ item.headline }}
              </h3>
              <PrismicRichText
                v-if="item.description"
                :field="item.description"
                class="h-p"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  name: 'SliceMetas',
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
}
</script>

<style lang="scss">
  .s-metas {
    padding-bottom: rem(80);
  }

  .s-metas__item {
    &:not(:last-child) {
      padding-bottom: rem(28);
    }
  }

  @include breakpoint-up(bp(md)) {
    .s-metas {
      padding-bottom: rem(182);
    }

    .s-metas__item {
      &:not(:last-child) {
        padding-bottom: rem(31);
      }
    }

    .s-metas__col-desc {
      order: 2;
    }
    .s-metas__col-metas {
      order: 1;
    }
  }

  @include breakpoint-up(bp(xl2)) {
    .s-metas {
      padding-bottom: rem(284);
    }

    .s-metas__item {
      &:not(:last-child) {
        padding-bottom: rem(62);
      }
    }
  }
</style>
