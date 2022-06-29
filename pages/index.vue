<template>
  <div class="container">
    <div class="row">
      <div class="col-18">
        <div v-for="(project, i) in document.results" :key="`project-${i}`">
          <router-link :to="`/projects/${project.uid}`">
            {{ project.data.headline }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'base',
  async asyncData ({ $prismic, params, error }) {
    // const document = await $prismic.api.getSingle('home')
    const document = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'projects')
    )
    if (document) {
      console.log(document)
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
