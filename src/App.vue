<template>
  <div id="app">
    <the-header />
    <the-sidebar />
    <div class="container">
      <router-view :key="$i18n.locale" />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheSidebar from '@/components/TheSidebar'


export default {
  name: 'App',
  components: {
    TheHeader,
    TheSidebar
  }
}
</script>

<style>
#app {
  font-family: Hauora;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 858px;
  margin-top: 70px;
  margin-bottom: 44px;
  margin-left: 332px;
  margin-right: auto;
}
.title {
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 700;
  text-align-last: left;
  color: #191B20;
}
</style>
