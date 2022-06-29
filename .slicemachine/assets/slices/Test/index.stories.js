import MyComponent from '../../../../slices/Test';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Test'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"test","items":[],"primary":{"title":[{"type":"heading1","text":"Engage transparent users","spans":[]}],"description":[{"type":"paragraph","text":"Culpa nostrud tempor excepteur dolore laborum ea do ea cillum eu non culpa. Excepteur reprehenderit labore ad et labore culpa ex excepteur. Veniam duis magna nisi fugiat aliqua.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
