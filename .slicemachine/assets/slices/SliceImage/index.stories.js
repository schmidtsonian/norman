import MyComponent from '../../../../slices/SliceImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SliceImage'
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
      mock: {"variation":"default","name":"Default","slice_type":"slice_image","items":[],"primary":{"label":"strategize vertical eyeballs","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'

export const _LabelCentered = () => ({
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
      mock: {"variation":"labelCentered","name":"Label Centered","slice_type":"slice_image","items":[],"primary":{"label":"innovate out-of-the-box solutions","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"}},"id":"_LabelCentered"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LabelCentered.storyName = 'Label Centered'

export const _FullViewportWidth = () => ({
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
      mock: {"variation":"fullViewportWidth","name":"Full Viewport Width","slice_type":"slice_image","items":[],"primary":{"label":"drive rich deliverables","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"}},"id":"_FullViewportWidth"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FullViewportWidth.storyName = 'Full Viewport Width'

export const _AlignRight = () => ({
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
      mock: {"variation":"alignRight","name":"Align right","slice_type":"slice_image","items":[],"primary":{"label":"visualize proactive initiatives","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"}},"id":"_AlignRight"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_AlignRight.storyName = 'Align right'
