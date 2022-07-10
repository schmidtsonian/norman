<template>
  <section ref="main" class="s-links-ribbon">
    <div class="s-links-ribbon__items">
      <div ref="items" class="s-links-ribbon__items-w">
        <div
          v-for="(item, i) in slice.items.concat(slice.items).concat(slice.items).concat(slice.items)"
          :key="`slice-item-${i}`"
          class="s-links-ribbon__item"
        >
          <RibbonLink :link="item.link" :title="item.title" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { gsap, Cubic } from 'gsap'
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
    mouseover (i) {
      gsap.set(this.$refs.linkS[i], { css: { 'font-variation-settings': '"wdth" 100, "wght" var(--wght-i), "CNTR" 0' } })
      gsap.to(this.$refs.linkS[i], {
        duration: 0.25,
        ease: Cubic.easeOut,
        '--wght-i': '900'
      })
    },
    mouseleave (i) {
      gsap.to(this.$refs.linkS[i], {
        duration: 0.25,
        '--wght-i': '200',
        ease: Cubic.easeOut,
        onComplete: () => {
          gsap.set(this.$refs.linkS[i], { css: { 'font-variation-settings': 'unset' } })
        }
      })
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
    --wght-i: 200;
    // font-variation-settings: "wdth" 100, "wght" var(--wght-i), "CNTR" 0;
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
