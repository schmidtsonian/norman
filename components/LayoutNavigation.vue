<template>
  <div class="l-nav">
    <span class="l-nav__bg"></span>
  </div>
</template>

<script>
export default {
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

.l-nav.is-active {
  transform: translateY(0px);
  transition-delay: 0s;
  .l-nav__bg {
    clip-path: circle(141.2% at var(--px) var(--py));
    transition-timing-function: $outQuint;
    transition-duration: 1s;
  }
}

</style>
