<template>
  <h1>{{ document.data.headline }}</h1>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'base',
  async asyncData ({ $prismic, params, error }) {
    const document = await $prismic.api.getSingle('home')
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
