import MyComponent from '../../../../slices/SliceImageWContent';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SliceImageWContent'
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
      mock: {"variation":"default","name":"Default","slice_type":"slice_image_w_content","items":[{"headline":"embrace revolutionary ROI","content":[{"type":"paragraph","text":"Id fugiat sit tempor labore anim dolor non. Cupidatat dolor exercitation sint et eu.","spans":[]}]},{"headline":"deliver 24/7 e-markets","content":[{"type":"paragraph","text":"Sint commodo exercitation exercitation tempor quis voluptate nulla proident ex velit ad duis consequat do commodo. Nostrud in sunt tempor ipsum anim quis et minim anim mollit voluptate cupidatat. Ipsum nisi enim commodo ex in labore do laborum ex id ex ullamco occaecat non.","spans":[]}]}],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
