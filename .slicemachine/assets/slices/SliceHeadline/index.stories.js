import MyComponent from '../../../../slices/SliceHeadline';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SliceHeadline'
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
      mock: {"variation":"default","name":"Default","slice_type":"slice_headline","items":[],"primary":{"topLine":"seize collaborative applications","headline":[{"type":"heading2","text":"Productize granular methodologies","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
