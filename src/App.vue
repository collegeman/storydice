<template>
  <div id="app">
    <router-view @pickerOpening="wait = true" @pickerShown="wait = false" />

    <b-navbar fixed="top" class="mt-2">
      <b-navbar-nav>
        <b-nav-item-dropdown no-caret>
          <template v-slot:button-content>
            <span class="text-body">
              <span class="d-inline-block" v-if="!wait">
                <fa icon="bars" fixed-width size="lg" class="d-md-none"></fa>
                <fa icon="bars" fixed-width class="d-none d-md-inline-block mr-2"></fa>
              </span>
              <span class="d-inline-block" v-else>
                <fa icon="circle-notch" fixed-width size="lg" class="d-md-none"></fa>
                <fa icon="circle-notch" fixed-width class="d-none d-md-inline-block mr-2"></fa>
              </span>
              <span class="d-none d-md-inline-block">
                Menu
              </span>
            </span>
          </template>
          <b-dropdown-item @click.prevent="print()">
            <fa icon="print" fixed-width class="mr-1"></fa>
            Print
          </b-dropdown-item>
          <b-dropdown-item v-b-modal.shareModal>
            <fa icon="share" fixed-width class="mr-1"></fa>
            Share
          </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item v-b-modal.aboutModal>
            <fa icon="question-circle" fixed-width class="mr-1"></fa>
            About
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>

    <b-modal
      id="shareModal"
      @shown="loadSocialSharingWidgets"
      @hidden="unloadSocialSharingWidgets"
      hide-header
      hide-footer
    >
      <b-form-group>
        <b-input size="lg"></b-input>
      </b-form-group>
      <div class="">
        <div class="sharethis-inline-share-buttons"></div>
      </div>
      <hr>
      <b-button variant="white" block @click="$bvModal.hide('shareModal')">
        Done
      </b-button>
    </b-modal>

    <b-modal
      id="aboutModal"
      hide-header
      hide-footer
    >
      <div class="">
        <h1 class="h4 mb-4">Story Dice</h1>
        <p>
          This app was inspired by <a href="https://www.amazon.com/Gamewright-SS-GMW-318-Rorys-Story-Cubes/dp/B003EIK136">Rory's Story Cubes</a>
          by Gamewright. It allows anyone to design printable game cubes styled with icons from the OpenMoji icon set, and is
          intended primarily to keep kids busy and creative.
        </p>
        <p>
          Use this app to create a few different cubes, print them, and fold them. Then take the cubes and toss them into the air, and make up a story based
          on the faces that show. You can also share your creations: just click <b>Share</b> on the main menu.
        </p>
        <div class="small">
          <div>&copy;2020 <a href="https://github.com/collegeman">Aaron Collegeman</a>, licensed MIT.</div>
          <div><a href="https://openmoji.org/">OpenMoji</a> graphics are licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">CC BY-SA 4.0</a>.</div>
        </div>
      </div>
      <hr>
      <b-button variant="white" block @click="$bvModal.hide('aboutModal')">
        Close
      </b-button>
      <git-hub-corner
        class="d-print-none"
        href="https://github.com/collegeman/storydice"
        fill="#111"
      ></git-hub-corner>
    </b-modal>
  </div>
</template>

<style lang="scss">
@import '@/scss/main.scss';

#aboutModal .modal-content {
  overflow: hidden;
}
</style>

<script>
import GitHubCorner from '@/components/GitHubCorner'
export default {
  components: {
    GitHubCorner
  },
  data () {
    return {
      wait: false
    }
  },
  mounted () {
    window.__sharethis__ = null
  },
  methods: {
    loadSocialSharingWidgets () {
      let script = document.createElement('script')
      script.id = 'sharethis-script'
      script.src = 'https://platform-api.sharethis.com/js/sharethis.js#property=5e7b86566caf2b00125bec91&product=inline-share-buttons'
      document.body.insertBefore(script, document.body.childNodes[0])
    },
    unloadSocialSharingWidgets () {
      let script = document.getElementById('sharethis-script')
      script && script.remove()
      window.__sharethis__ = null
    },
    print () {
      window.print()
    }
  }
}
</script>