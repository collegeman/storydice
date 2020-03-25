<template>
  <div id="app">
    <b-navbar>
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '~bootstrap/scss/bootstrap';
  @import '~bootstrap-vue/src/index.scss';
</style>