<template>
  <div class="editor">
    <svg width="100%" height="100%" viewBox="0 0 612 792" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
      <title>Template</title>
      <desc>Created with Sketch.</desc>
      <g id="Template" stroke="none" stroke-width="1" fill-rule="evenodd">
        <g id="Die" transform="translate(40.000000, 78.000000)">
          <g id="Flaps" fill="#EFEFEF">
            <path d="M191,0 L341,0 L341,40 L191,40 L191,0 Z" id="Flap"></path>
            <path d="M151,40 L191,40 L191,190 L151,190 L151,40 Z" id="Flap"></path>
            <path d="M151,341 L191,341 L191,490 L151,490 L151,341 Z" id="Flap"></path>
            <path d="M0,190 L40,190 L40,340 L0,340 L0,190 Z" id="Flap"></path>
            <path d="M493,190 L533,190 L533,340 L493,340 L493,190 Z" id="Flap"></path>
            <path d="M341,40 L381,40 L381,190 L341,190 L341,40 Z" id="Flap"></path>
            <path d="M342,341 L382,341 L382,490 L342,490 L342,341 Z" id="Flap"></path>
          </g>
          <g id="Sides" transform="translate(66.000000, 66.000000)">
            <g id="Side1" transform="translate(151.000000, 0.000000)">
              <g id="Shape1" v-html="svg0">
                <rect id="Placeholder" x="0" y="0" width="100" height="100"></rect>
              </g>
            </g>
            <g id="Side2" transform="translate(151.000000, 149.000000)">
              <g id="Shape2" v-html="svg1">
                <rect id="Placeholder" x="0" y="0" width="100" height="100"></rect>
              </g>
            </g>
            <g id="Side3" transform="translate(0.000000, 149.000000)">
              <g id="Shape3" v-html="svg2">
                <rect id="Placeholder" x="0" y="0" width="100" height="100"></rect>
              </g>
            </g>
            <g id="Side4" transform="translate(302.000000, 149.000000)">
              <g id="Shape4" v-html="svg3">
                <rect id="Placeholder" x="0" y="0" width="100" height="100"></rect>
              </g>
            </g>
            <g id="Side5" transform="translate(151.000000, 300.000000)">
              <g id="Shape5" v-html="svg4">
                <rect id="Placeholder" x="0" y="0" width="100" height="100"></rect>
              </g>
            </g>
            <g id="Side6" transform="translate(151.000000, 451.000000)">
              <g id="Shape6" v-html="svg5">
                <rect id="Placeholder" x="0" y="0" width="100" height="100"></rect>
              </g>
            </g>
          </g>
          <g id="Outlines" transform="translate(39.500000, 40.000000)" stroke="#EFEFEF" stroke-linecap="square">
            <line x1="1" y1="299.5" x2="454" y2="299.5" id="Line"></line>
            <line x1="151" y1="0.5" x2="151" y2="602.5" id="Line-2"></line>
            <line x1="302" y1="0.5" x2="302" y2="602.5" id="Line-3"></line>
            <line x1="0" y1="150.5" x2="454" y2="150.5" id="Line"></line>
            <line x1="151" y1="602.5" x2="302" y2="602.5" id="Line-4"></line>
            <line x1="151" y1="449.5" x2="302" y2="449.5" id="Line-4"></line>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.editor {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  text-align: center;
}
</style>

<script>
import { svg } from '@/utils'

export default {
  props: {
    icons: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      svg0: '',
      svg1: '',
      svg2: '',
      svg3: '',
      svg4: '',
      svg5: ''
    }
  },
  watch: {
    icons () {
      this.updateIcons(this.icons.split(','))
    }
  },
  async mounted () {
    this.updateIcons(this.icons.split(','))
  },
  methods: {
    async updateIcons (icons) {
      console.log(icons)
      for(let i = 0; i < 6; i++) {
        let xml = icons[i] ? await svg(icons[i]) : ''
        this[`svg${i}`] = xml
      }
    }
  }
}
</script>