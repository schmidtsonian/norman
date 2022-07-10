<template>
  <main ref="mainWrapper">
    <header class="l-header">
      <router-link to="/">
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 250 22.4"
          class="l-header__logo"
          preserveAspectRatio="xMinYMin slice"
        >
          <path class="l-header__l l-header__l--f" d="M0,21.4c2.3,0,2.9-0.4,2.9-1.9V2C2.2,1.2,1.1,0.8,0.1,1V0.4h4.9l10.5,17.7V2.9 c0-1.6-0.6-1.9-2.9-1.9V0.4h6.9V1c-2.3,0-2.9,0.4-2.9,1.9V20l1.2,2h-3L3.9,3.7L4,19.5c0,1.6,0.6,1.9,2.9,1.9v0.5H0V21.4z" />
          <path class="l-header__l l-header__l--s" d="M23.1,11.1c0-6.6,3.3-11.1,8-11.1c4.7,0,8,4.6,8.1,10.8c0.1,6.9-3,11.6-7.7,11.6 S23.1,18.1,23.1,11.1 M32.1,21.5c3.2,0,4.5-3.6,4.5-9.6c0-7-1.9-11.1-5.8-11.1c-3.2,0-4.8,3.6-4.8,9.7C26,15.4,28.2,21.5,32.1,21.5" />
          <path class="l-header__l l-header__l--s" d="M43.1,21.4c2.3,0,2.9-0.4,2.9-1.9V2.9C46,1.3,45.4,1,43.1,1V0.4h8.9c5.2,0,8.1,2,8.1,5.6 c0,3.1-2.2,5.2-5.9,5.8l4.9,8c0.8,1.3,1.8,1.6,3.6,1.6v0.5h-5.2L49.9,9.8h2.9l0.9,1.4c2.3-0.3,4-2.2,3.9-4.5c0-3.4-2.3-5.5-5.9-5.5 c-1.9,0-3,0.2-3.1,0.7l0.1,17.5c0,1.6,0.6,1.9,2.9,1.9v0.5h-8.5V21.4z" />
          <path class="l-header__l l-header__l--s" d="M90,21.4v0.5h-8.4v-0.5c2.3,0,2.9-0.4,2.9-1.9l-0.2-17l-6,17.6l0.6,1.9h-2.6L69.8,2l0.1,17.4 c0,1.6,0.6,1.9,2.9,1.9v0.5h-6.9v-0.5c2.3,0,2.9-0.4,2.9-1.9V2.9c0-1.6-0.6-1.9-2.9-1.9V0.4h6l5.9,18.1l5.9-18.1H90V1 c-2.3,0-2.9,0.4-2.9,1.9v16.6C87.1,21,87.7,21.4,90,21.4" />
          <path class="l-header__l l-header__l--s" d="M103.4,21.4c2.3,0,2.6-0.3,2.1-1.8l-2-6.3h-5.4l-1.9,6.3c-0.5,1.5-0.1,1.8,2.2,1.8v0.5h-6.3v-0.5 c1.8,0,2.6-0.4,3-1.8l5-16.5l-0.1-0.3C99.6,1.3,99,1,97.9,1V0.4h4.1l6.2,19.2c0.5,1.5,1.3,1.8,3.1,1.8v0.5h-7.9L103.4,21.4z M103.2,12.5l-2.5-7.8l-2.3,7.8H103.2z" />
          <path class="l-header__l l-header__l--s" d="M113.2,21.4c2.3,0,2.9-0.4,2.9-1.9V2c-0.7-0.8-1.8-1.2-2.8-1.1V0.4h4.9l10.5,17.7V2.9 c0-1.6-0.6-1.9-2.9-1.9V0.4h6.9V1c-2.3,0-2.9,0.4-2.9,1.9V20l1.2,2h-3L117.1,3.7l0.1,15.7c0,1.6,0.6,1.9,2.9,1.9v0.5h-6.9V21.4z" />

          <path class="l-header__l l-header__l--f l-header__l--d" d="M141.7,21.4c2.3,0,2.9-0.4,2.9-1.9V2.9c0-1.6-0.6-1.9-2.9-1.9V0.4h8.7c6.3,0,10.2,4.1,10.2,10.7 c0,6.6-3.9,10.8-10.2,10.8h-8.7V21.4z M150.6,21.1c4.4,0,7.2-3.7,7.2-9.5c0-6.4-2.8-10.4-7.2-10.4c-2.3,0-3.3,0.1-3.4,0.9l0,18.1 v-0.1C147.3,20.9,148.3,21.1,150.6,21.1" />
          <path class="l-header__l l-header__l--s" d="M163.6,1V0.4h8.4V1c-2.3,0-2.9,0.4-2.9,1.9l0.1,12.5c0,3.7,1.9,6,4.8,6c3.4,0,5.2-1.9,5.2-5.7V2.9 c0-1.6-0.6-1.9-2.9-1.9V0.4h6.9V1c-2.3,0-2.9,0.4-2.9,1.9v12.8c-0.1,4.5-2.3,6.7-6.7,6.7c-4.3,0-7-2.7-7-7V2.9 C166.5,1.3,165.8,1,163.6,1" />
          <path class="l-header__l l-header__l--s" d="M200.8,5.5c0,2.8-1.5,4.5-4.3,4.8v0c3.5,0.4,5.5,2.3,5.5,5.2c0,4.1-2.6,6.3-7.1,6.3h-8.5v-0.5 c2.3,0,2.9-0.4,2.9-1.9V2.9c0-1.6-0.6-1.9-2.9-1.9V0.4h8.7C198.7,0.4,200.8,2.3,200.8,5.5 M194.5,10.1c2.4,0,4.2-1.7,4.2-4.5 s-1.6-4.3-4.5-4.3c-1.2,0-2.2,0.2-2.2,1v7.8L194.5,10.1z M194.8,21c3.3,0,5.1-1.9,5.1-5.2c0-3.1-2-4.9-5.4-4.9c-0.9,0-2,0-2.6,0v8.8 C191.9,20.5,193.4,21,194.8,21" />
          <path class="l-header__l l-header__l--s" d="M205.7,11.1c0-6.6,3.3-11.1,8-11.1c4.7,0,8,4.6,8.1,10.8c0.1,6.9-3,11.6-7.7,11.6 S205.7,18.1,205.7,11.1 M214.7,21.5c3.2,0,4.5-3.6,4.5-9.6c0-7-1.9-11.1-5.8-11.1c-3.2,0-4.8,3.6-4.8,9.7 C208.6,15.4,210.8,21.5,214.7,21.5" />
          <path class="l-header__l l-header__l--s" d="M225.7,21.4c2.3,0,2.9-0.4,2.9-1.9V2.9c0-1.6-0.6-1.9-2.9-1.9V0.4h8.4V1c-2.3,0-2.9,0.4-2.9,1.9 l0.1,16.5c0,1.6,0.6,1.9,2.9,1.9v0.5h-8.5L225.7,21.4z" />
          <path class="l-header__l l-header__l--s" d="M239.2,20.3c-0.3,0-0.5,0.5-0.5,1.6h-0.5v-7.7h0.5c0,4.5,2.1,7.3,5.5,7.3c1.9,0,3.5-1.5,3.6-3.4 c0-0.1,0-0.2,0-0.4c0-4.7-9.9-7.5-9.9-12.7c0-3.1,2.1-5.1,5.4-5.1c3.3,0,4.1,1.9,4.6,1.9c0.3,0,0.4-0.4,0.4-1.5h0.5v6.2h-0.5 c0-3.6-1.9-5.8-4.8-5.8c-1.7-0.2-3.2,1-3.4,2.7c0,0.2,0,0.3,0,0.5c0,4,9.8,7.2,9.8,12.7c0,3.5-2.2,5.7-5.8,5.7 C241,22.3,240.1,20.3,239.2,20.3" />
        </svg>
      </router-link>
    </header>

    <div ref="mainContainer">
      <Nuxt />
    </div>

    <footer class="l-footer">
      <div class="l-footer__logo">
        <h4 class="h-font-logo">
          .Design
        </h4>
      </div>
    </footer>

    <CornerCmyk class="l-corner--left-top" />
    <CornerCmyk class="l-corner--right-top" />
    <CornerCmyk class="l-corner--left-bottom" />
    <CornerCmyk class="l-corner--right-bottom" />

    <CircleXy class="l-circle-xy l-circle-xy--left" />
    <CircleXy class="l-circle-xy l-circle-xy--right" />
  </main>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import { gsap, Circ } from 'gsap'
// eslint-disable-next-line no-unused-vars
import { ScrollSmoother } from 'gsap/ScrollSmoother'
// eslint-disable-next-line no-unused-vars
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
}
export default {
  name: 'LayoutBase',
  mounted () {
    ScrollSmoother.create({
      smooth: 1,
      wrapper: this.$refs.mainWrapper,
      content: this.$refs.mainContainer,
      effects: true,
      onUpdate: (d) => {
        const velocity = Math.abs(d.getVelocity()) * 0.01
        const ampliation = Math.abs(d.getVelocity()) * 0.002
        gsap.to(this.$refs.mainWrapper, {
          duration: 0.75,
          ease: Circ.easeOut,
          '--c': `${gsap.utils.clamp(0, 6, velocity)}px`,
          '--m': `${gsap.utils.clamp(0, 12, velocity)}px`,
          '--y': `${gsap.utils.clamp(0, 18, velocity)}px`,
          '--k': `${gsap.utils.clamp(0, 24, velocity)}px`,

          '--cc': `${gsap.utils.clamp(0, 1.6, ampliation)}`,
          '--cm': `${gsap.utils.clamp(0, 2.2, ampliation)}`,
          '--cy': `${gsap.utils.clamp(0, 2.8, ampliation)}`,
          '--ck': `${gsap.utils.clamp(0, 1, ampliation)}`,

          '--yy': `${gsap.utils.clamp(-65, 65, d.getVelocity() * 0.004)}px`
        })
      },
      onStop: () => {
        gsap.to(this.$refs.mainWrapper, {
          duration: 0.75,
          ease: Circ.easeOut,
          '--c': '0px',
          '--m': '0px',
          '--y': '0px',
          '--k': '0px',

          '--cc': '0',
          '--cm': '0',
          '--cy': '0',
          '--ck': '0',
          '--yy': '0px'
        })
      }
    })
  }
}
</script>

<style lang="scss">
  .l-header,
  .l-footer {
    z-index: $z-index--layout;
    position: relative;
    width: 100vw;
  }

  .l-header {
    text-align: center;
    padding-top: rem(25);
  }

  .l-header__logo {
    width: rem(53);
    height: rem(30px);
  }

  .l-header__logo,
  .l-footer__logo {
    margin-left: auto;
    margin-right: auto;
  }

  .l-header__l--s {
    display: none;
  }

  .l-header__l--d {
    transform: translateX(rem(-122));
  }

  .l-footer {
    width: 100%;
    position: fixed;
  }

  .l-footer__logo {
    text-align: center;
    font-size: rem(28);
    width: rem(128);
    height: rem(26);
    display: none;
  }

  .l-corner--right-top {
    transform: rotate(90deg);
  }

  .l-corner--right-bottom {
    transform: rotate(180deg);
  }

  .l-corner--left-bottom {
    transform: rotate(270deg);
  }

  .l-corner--left-top,
  .l-corner--right-top {
    top: rem(25)
  }

  .l-corner--left-bottom,
  .l-corner--right-bottom {
    bottom: rem(25)
  }

  .l-corner--left-top,
  .l-corner--left-bottom,
  .l-circle-xy--left {
    left: rem(25);
  }

  .l-corner--right-top,
  .l-corner--right-bottom,
  .l-circle-xy--right {
    right: rem(25);
  }

  .l-circle-xy {
    transform: translateY(var(--yy));
  }

  @include breakpoint-up(bp(sm)) {
    .l-header__logo {
      width: rem(250);
      height: rem(22);
    }

    .l-header__l--d {
      transform: translateX(0);
    }

    .l-header__l--s {
      display: inline;
    }
  }

  @include breakpoint-up(bp(md)) {
    .l-header {
      padding-top: rem(30);
    }

    .l-footer__logo {
      display: block;
    }

    .l-corner--left-top,
    .l-corner--right-top {
      top: rem(30)
    }

    .l-footer,
    .l-corner--left-bottom,
    .l-corner--right-bottom {
      bottom: rem(30)
    }

    .l-corner--left-top,
    .l-corner--left-bottom,
    .l-circle-xy--left {
      left: rem(30);
    }

    .l-corner--right-top,
    .l-corner--right-bottom
    .l-circle-xy--right {
      right: rem(30);
    }
  }

  @include breakpoint-up(bp(xl2)) {
    .l-header {
      padding-top: rem(40);
    }

    .l-corner {
      &, span {
        width: rem(18);
        height: rem(18);
      }
    }

    .l-corner--left-top,
    .l-corner--right-top {
      top: rem(25)
    }

    .l-footer,
    .l-corner--left-bottom,
    .l-corner--right-bottom {
      bottom: rem(25)
    }

    .l-corner--left-top,
    .l-corner--left-bottom,
    .l-circle-xy--left {
      left: rem(25);
    }

    .l-corner--right-top,
    .l-corner--right-bottom,
    .l-circle-xy--right {
      right: rem(25);
    }
  }
</style>
