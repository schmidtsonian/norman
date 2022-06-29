<template>
  <picture
    class="a-image"
    :style="`padding-bottom:${(image.dimensions.height / image.dimensions.width) * 100}%;`"
  >
    <PrismicImage
      :field="image"
    />
  </picture>
</template>

<script>

export default {
  props: {
    image: {
      type: Object,
      required: true
    }
  }
}

</script>

<style lang="scss">
.a-image {
  position: relative;
  display: block;
  img {
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
