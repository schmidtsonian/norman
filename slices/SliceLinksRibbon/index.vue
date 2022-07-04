<template>
  <section ref="main" class="s-links-ribbon">
    <div class="s-links-ribbon__items">
      <div ref="items" class="s-links-ribbon__items-w">
        <div
          v-for="(item, i) in slice.items.concat(slice.items).concat(slice.items).concat(slice.items)"
          :key="`slice-item-${i}`"
          class="s-links-ribbon__item"
        >
          <PrismicLink
            ref="item"
            :field="item.link"
            :title="item.title"
            target="_lank"
            class="s-links-ribbon__item-a"
            @mouseover="mouseover(i)"
          >
            <span>{{ item.title }} —  </span>
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { gsap } from 'gsap'
// eslint-disable-next-line no-unused-vars
import { ScrollSmoother } from 'gsap/ScrollSmoother'
// eslint-disable-next-line no-unused-vars
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// eslint-disable-next-line no-unused-vars
import { getSliceComponentProps } from '@prismicio/vue/components'

if (process.client) {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
}

export default {
  name: 'SliceLinksRibbon',
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  mounted () {
    gsap.to(this.$refs.items, {
      x: `${(this.$refs.items.offsetWidth / 4) * -1}px`,
      scrollTrigger: {
        trigger: this.$refs.items,
        pin: false,
        scrub: 1,
        onUpdate: (d) => {
          gsap.to(this.$refs.items, {
            duration: 0.75,
            '--wght': this.clamp(Math.abs(d.getVelocity()))
          })
        }
      }
    })
  },
  methods: {
    clamp: gsap.utils.clamp(200, 900),
    mouseover: (i) => {
      // console.log(i)
    },
    mouseleave: (el) => {

    }
  }
}
</script>

<style lang="scss">
  .s-links-ribbon {
    padding-bottom: rem(80);
    overflow: hidden;
    padding-top: 20px;
    box-sizing: content-box;
  }

  .s-links-ribbon__items {
    position: relative;
    height: rem(60);
    font-size: rem(60);
  }

  .s-links-ribbon__items-w {
    display: flex;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: absolute;
    --wght: 200;
    font-variation-settings: "wdth" 100, "wght" var(--wght), "CNTR" 0;
  }

  .s-links-ribbon__item {
    line-height: 1em;
  }

  .s-links-ribbon__item-a {
    display: inline-block;
  }

  @include breakpoint-up(bp(md)) {
    .s-links-ribbon {
      padding-bottom: rem(182);
    }

    .s-links-ribbon__items {
      height: rem(90);
    }

    .s-links-ribbon__items-w {
      font-size: rem(90);
    }
  }

  @include breakpoint-up(bp(xl2)) {
    .s-links-ribbon {
      padding-bottom: rem(284);
    }

    .s-links-ribbon__items {
      height: rem(120);
    }

    .s-links-ribbon__items-w {
      font-size: rem(120);
    }
  }
</style>
