import MyComponent from '../../../../slices/Image';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Image'
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
      mock: {"variation":"default","name":"Default","slice_type":"image","items":[],"primary":{"title":[{"type":"heading1","text":"Leverage end-to-end technologies","spans":[]}],"description":[{"type":"paragraph","text":"Cillum tempor aliquip nulla et veniam amet eu ullamco labore sint. Culpa dolore in exercitation sunt. Exercitation veniam fugiat duis mollit veniam exercitation occaecat occaecat Lorem dolor ad do consequat in.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
