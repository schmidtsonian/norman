import MyComponent from '../../../../slices/SliceMetas';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SliceMetas'
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
      mock: {"variation":"default","name":"Default","slice_type":"slice_metas","items":[{"headline":"embrace sticky convergence","description":[{"type":"paragraph","text":"Eu amet quis incididunt deserunt aliqua pariatur commodo voluptate cupidatat.","spans":[]}]},{"headline":"morph turn-key ROI","description":[{"type":"paragraph","text":"Ea quis occaecat eu. Aliquip exercitation velit dolor amet ex cupidatat minim irure culpa minim ea non quis minim culpa. Consequat exercitation consectetur est.","spans":[]}]},{"headline":"maximize frictionless niches","description":[{"type":"paragraph","text":"Excepteur nulla ut ullamco et est elit quis esse minim adipisicing. Proident enim ex labore tempor officia anim duis ex tempor. Velit proident aute magna veniam consequat in qui enim.","spans":[]}]},{"headline":"extend leading-edge technologies","description":[{"type":"paragraph","text":"Cupidatat fugiat cupidatat consequat veniam pariatur do proident. Ex proident tempor ad dolor incididunt.","spans":[]}]},{"headline":"brand strategic systems","description":[{"type":"paragraph","text":"Consequat eiusmod nostrud ea cillum eiusmod esse deserunt voluptate est qui ad quis.","spans":[]}]}],"primary":{"description":[{"type":"heading5","text":"Streamline mission-critical paradigms","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
