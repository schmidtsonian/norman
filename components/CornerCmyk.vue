<template>
  <span class="a-corner">
    <span class="a-corner-c" />
    <span class="a-corner-m" />
    <span class="a-corner-y" />
    <span class="a-corner-k" />
  </span>
</template>

<script>

export default {
}

</script>

<style lang="scss">
  .a-corner {
    position: fixed;
    z-index: $z-index--layout + 1;

    &, span {
      display: block;
      width: rem(12);
      height: rem(12);
    }
    span {
      position: absolute;
      border-right: 1px solid;
      border-bottom: 1px solid;
    }
  }

  .a-corner-c {
    border-color: cyan !important;
    transform: translateX(var(--c)) translateY(var(--c));
  }

  .a-corner-m {
    border-color: magenta !important;
    transform: translateX(var(--m)) translateY(var(--m));
  }

  .a-corner-y {
    border-color: yellow !important;
    transform: translateX(var(--y)) translateY(var(--y));
  }

  .a-corner-k {
    border-color: black !important;
    transform: translateX(var(--k)) translateY(var(--k));
  }

  @include breakpoint-up(bp(md)) {
    .a-corner {
      span {
        border-right-width: 2px;
        border-bottom-width: 2px;
      }
    }
  }
</style>
