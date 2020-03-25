<template>
  <div id="app">
    <router-view/>
    <git-hub-corner class="d-print-none" href="https://github.com/collegeman/storydice" fill="#007cff"/>
    <b-navbar fixed="bottom">
      <b-navbar-nav>
        <b-nav-text align="right">
          <div class="small">
            <a href="https://github.com/collegeman/storydice">Story Dice</a> is &copy;2020
            <a href="https://github.com/collegeman">Aaron Collegeman</a>, licensed MIT.
            <a href="https://openmoji.org/">OpenMoji</a> graphics are licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">CC BY-SA 4.0</a>.
          </div>
        </b-nav-text>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style lang="scss">
  @import '~bootstrap/scss/bootstrap';
  @import '~bootstrap-vue/src/index.scss';
</style>

<script>
import GitHubCorner from '@/components/GitHubCorner'
export default {
  components: {
    GitHubCorner
  }
}
</script>