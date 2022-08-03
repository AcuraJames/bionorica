<template>
  <div class="header">
    <div class="logo">
      <img :src="require('../assets/img/logo.png')" style="border-radius:4px">
    </div>
    <div class="burger" @click="toggleSidebar">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H21" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 12H21" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 18H21" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      sidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
      console.log(this.sidebarOpen)
      this.emitter.emit('toggle-sidebar', this.sidebarOpen)
    }
  }
}
</script>

<style>
.header {
  width: 100%;
  height: 64px;
  background: #FFFFFF;
  box-shadow: 0px 0px 42px rgba(215, 217, 221, 0.49);
  display: none
}
.logo img {
  width: 55px;
  height: 48px;
  margin-left: 16px;
}
.burger {
  margin-right: 16px;
}
@media screen and (max-width: 768px) {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
  } 
}
</style>