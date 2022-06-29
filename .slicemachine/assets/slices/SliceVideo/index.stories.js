import MyComponent from '../../../../slices/SliceVideo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SliceVideo'
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
      mock: {"variation":"default","name":"Default","slice_type":"slice_video","items":[],"primary":{"vimeo":{"url":"https://twitter.com/prismicio/status/1356293316158095361","author_name":"Prismic","author_url":"https://twitter.com/prismicio","html":"<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Gatsby is a popular choice for Prismic users and we work hard on delivering a CMS that plays to its strengths.<br><br>But, what makes <a href=\"https://twitter.com/GatsbyJS?ref_src=twsrc%5Etfw\">@GatsbyJS</a> so popular?<br><br>Here are some of <a href=\"https://twitter.com/mxstbr?ref_src=twsrc%5Etfw\">@mxstbr</a>&#39;s thoughts on Gatsby&#39;s success and how they&#39;re improving developer experience.<a href=\"https://t.co/ZjCPvsWWUD\">https://t.co/ZjCPvsWWUD</a> <a href=\"https://t.co/EQqzJpeNKl\">pic.twitter.com/EQqzJpeNKl</a></p>&mdash; Prismic (@prismicio) <a href=\"https://twitter.com/prismicio/status/1356293316158095361?ref_src=twsrc%5Etfw\">February 1, 2021</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n","width":550,"height":null,"type":"rich","cache_age":"3153600000","provider_name":"Twitter","provider_url":"http://www.twitter.com/","version":"1.0"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
