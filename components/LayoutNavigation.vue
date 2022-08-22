<template>
  <div class="l-nav">
    <span class="l-nav__bg" />
    <div class="l-nav__wrapper">
      <div class="container">
        <div class="row">
          <div class="col-16 offset-1 col-lg-8 offset-lg-2 col-xl-9 offset-xl-2 offset-xl2-3">
            <nav class="l-nav__main">
              <router-link
                :to="`/projects/`"
                @mouseenter.native="imageIndexActive = 1, $nuxt.$emit('hoverEnter', 'VIEW')"
                @mouseleave.native="imageIndexActive = 0, $nuxt.$emit('hoverLeave')"
              >
                Projects
              </router-link>
              <router-link
                :to="`/about/`"
                @mouseenter.native="imageIndexActive = 2, $nuxt.$emit('hoverEnter', 'VIEW')"
                @mouseleave.native="imageIndexActive = 0, $nuxt.$emit('hoverLeave')"
              >
                About
              </router-link>
              <router-link
                :to="`/imprint/`"
                @mouseenter.native="imageIndexActive = 3, $nuxt.$emit('hoverEnter', 'VIEW')"
                @mouseleave.native="imageIndexActive = 0, $nuxt.$emit('hoverLeave')"
              >
                Imprint
              </router-link>
            </nav>
          </div>

          <div class="col-16 offset-1 col-lg-6 offset-xl-0 col-xl2-5 ">
            <div class="row">
              <div class="col-18 col-xl-16">
                <div class="l-nav__data">
                  <PrismicRichText v-if="$store.state.navigation.content" :field="$store.state.navigation.content" class="h-p" />
                </div>
              </div>
              <div class="col-10 offset-4 col-lg-18 offset-lg-0">
                <picture class="l-nav__image">
                  <PrismicImage ref="image" :class="`${imageIndexActive === 0 ? 'is-active' : ''}`" :field="$store.state.navigation.image_default" />
                  <PrismicImage ref="image" :class="`${imageIndexActive === 1 ? 'is-active' : ''}`" :field="$store.state.navigation.image_projects" />
                  <PrismicImage ref="image" :class="`${imageIndexActive === 2 ? 'is-active' : ''}`" :field="$store.state.navigation.image_about" />
                  <PrismicImage ref="image" :class="`${imageIndexActive === 3 ? 'is-active' : ''}`" :field="$store.state.navigation.image_imprint" />
                </picture>
              </div>
            </div>
          </div>

          <div class="col-16 offset-1 col-lg-14 offset-lg-2 offset-xl2-3">
            <div class="l-nav__metas">
              <prismic-link v-for="(item, index) in $store.state.navigation.menu_metas" :key="item.id" :field="item.link" class="h-label h-t-uppercase">
                {{ item.title }}<span v-if="index < $store.state.navigation.menu_metas.length - 1">{{ '&nbsp;&nbsp;·&nbsp;&nbsp;' }}</span>
              </prismic-link>
            </div>
            <NuxtLink to="https://normandubois.design/" target="_blank" class="h-label h-t-uppercase l-nav__metas__lb">
              Old Portfolio 2021
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageIndexActive: 0
    }
  }
}
</script>

<style lang="scss">

.l-nav {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  transform: translateY(-100vh);
  z-index: $z-index--layout - 1;

  transition-property: transform;
  transition-duration: 0s;
  transition-delay: 0.5s;
}

.l-nav__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: $color--black;
  clip-path: circle(0.0% at var(--px) var(--py));

  transition-property: clip-path;
  transition-duration: 0.25s;
  transition-timing-function: $outCubic;
}

.l-nav__wrapper {
  position: absolute;
  text-align: center;
  color: $color--white;
  left: 0;
  top: 0;
  padding-top: rem(100);
  padding-bottom: rem(100);
  width: 100%;
  height: 100%;
  overflow-y: auto;
  opacity: 0;
  transition-duration: 0.15s;
  transition-property: opacity;
}

.l-nav__main {
  font-size: rem(40);
  line-height: 1.34;
  a {
    display: block;
  }
}

.l-nav__main,
.l-nav__data {
  padding-bottom: rem(40);
}

.l-nav__metas {
  a {
    display: inline-block;
  }
}

.l-nav__metas__lb {
  color: $color--grey;
}

.l-nav.is-active {
  transform: translateY(0px);
  transition-delay: 0s;
  .l-nav__bg {
    clip-path: circle(141.2% at var(--px) var(--py));
    transition-timing-function: $outQuint;
    transition-duration: 1s;
  }

  .l-nav__wrapper {
    transition-delay: 0.5s;
    opacity: 1;
  }
}

.l-nav__image {
  margin-bottom: rem(40);
}

.l-nav__image {
  display: block;
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  img {
    display: block;
    position: absolute;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    background-color: $color--black;
    display: none;
    &.is-active {
      display: block;
    }
  }
}

@include breakpoint-up(bp(md)) {
  .l-nav__wrapper {
    padding-top: rem(140);
    padding-bottom: rem(140);
  }

  .l-nav__main {
    font-size: rem(60);
  }
}

@include breakpoint-up(bp(lg)) {
  .l-nav__wrapper {
    text-align: left;
  }
}
@include breakpoint-up(bp(xl)) {
  .l-nav__main {
    font-size: rem(120);
  }
  .l-nav__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media all and (min-height: 800px) {
    .l-nav__main {
      padding-bottom: rem(120);
    }

    .l-nav__image {
      bottom: rem(-100px);
    }
  }

  @media all and (min-height: 1100px) {
    .l-nav__data {
      position: relative;
      top: rem(-80px);
    }
    .l-nav__image {
      bottom: rem(-150px);
    }
  }
}

</style>
