<template>
  <span class="a-xy a-xy--left">
    <span class="a-xy__border" />

    <span class="a-xy__circle a-xy__circle--y" />
    <span class="a-xy__circle a-xy__circle--m" />
    <span class="a-xy__circle a-xy__circle--c" />
    <span class="a-xy__circle a-xy__circle--k" />

    <span class="a-xy__circle a-xy__circle--w" />
    <span class="a-xy__x" />
    <span class="a-xy__y" />

    <span class="a-xy__circle a-xy__circle--w" />

  </span>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .a-xy {
    width: rem(21);
    height: rem(21);
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }

  .a-xy__circle,
  .a-xy__border,
  .a-xy__x,
  .a-xy__y {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .a-xy__circle,
  .a-xy__border {
    border-radius: 50%;
  }

  .a-xy__border {
    width: rem(15);
    height: rem(15);
    border: 2px solid;
  }

  .a-xy__circle {
    width: rem(7);
    height: rem(7);
  }

  .a-xy__circle--w {
    background-color: #fff;
    mix-blend-mode: difference;
  }
  .a-xy__circle--c {
    background-color: cyan;
    transform: scale(var(--cc));
  }

  .a-xy__circle--m {
    background-color: magenta;
    transform: scale(var(--cm));
  }

  .a-xy__circle--y {
    background-color: yellow;
    transform: scale(var(--cy));
  }

  .a-xy__circle--k {
    background-color: black;
    transform: scale(var(--ck));
  }

  .a-xy__x,
  .a-xy__y {
    background-color: $color--black;
  }

  .a-xy__x {
    width: 100%;
    height: 2px;
  }

  .a-xy__y {
    width: 2px;
    height: 100%;
  }

  @include breakpoint-up(bp(md)) {
    .a-xy {
      width: rem(37);
      height: rem(37);
    }

    .a-xy__border {
      width: rem(30);
      height: rem(30);
    }

    .a-xy__circle {
      width: rem(18);
      height: rem(18);
    }
  }

</style>
