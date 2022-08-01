<template>
  <div :class="['sidebar', { 'sidebar-open': isOpen }]">
    <div class="logo-block">
      <img :src="require('../assets/img/logo.png')" alt="">
    </div>
    <div class="nav-block">
      <div class="divider"></div>
      <div class="menu">

        <div :class="['menu-item', { 'menu-item--active': $route.meta.title == 'Главная' }]" @click="redirect('/')">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
            <path d="M2.25 7.25L9 2L15.75 7.25V15.5C15.75 15.8978 15.592 16.2794 15.3107 16.5607C15.0294 16.842 14.6478 17 14.25 17H3.75C3.35218 17 2.97064 16.842 2.68934 16.5607C2.40804 16.2794 2.25 15.8978 2.25 15.5V7.25Z" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.75 17V9.5H11.25V17" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <p class="menu-item__text">Главная</p>
        </div>

        <div :class="['menu-item', { 'menu-item--active': $route.meta.title == 'Расписание' }]" @click="redirect('/timetable')">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
            <path d="M3 17C2.60218 17 2.22064 16.842 1.93934 16.5607C1.65804 16.2794 1.5 15.8978 1.5 15.5V8.75C1.5 7.925 2.175 7.25 3 7.25H4.5M3 17H15C15.3978 17 15.7794 16.842 16.0607 16.5607C16.342 16.2794 16.5 15.8978 16.5 15.5V3.5C16.5 3.10218 16.342 2.72064 16.0607 2.43934C15.7794 2.15804 15.3978 2 15 2H6C5.60218 2 5.22064 2.15804 4.93934 2.43934C4.65804 2.72064 4.5 3.10218 4.5 3.5V15.5C4.5 15.8978 4.34196 16.2794 4.06066 16.5607C3.77936 16.842 3.39782 17 3 17Z" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.5 11H7.5" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.25 14H7.5" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5 5H13.5V8H7.5V5Z" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <p class="menu-item__text">Расписание</p>
        </div>

        <div :class="['menu-item', { 'menu-item--active': $route.meta.title == 'Обратная связь' }]" @click="redirect('/feedback')">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
            <path d="M15.75 9.125C15.7526 10.1149 15.5213 11.0914 15.075 11.975C14.5458 13.0338 13.7323 13.9244 12.7256 14.547C11.7189 15.1695 10.5587 15.4995 9.375 15.5C8.3851 15.5026 7.40859 15.2713 6.525 14.825L2.25 16.25L3.675 11.975C3.2287 11.0914 2.99742 10.1149 3 9.125C3.00046 7.94132 3.33046 6.78114 3.95304 5.77441C4.57562 4.76769 5.46619 3.95418 6.525 3.425C7.40859 2.9787 8.3851 2.74742 9.375 2.75H9.75C11.3133 2.83624 12.7898 3.49607 13.8969 4.60314C15.0039 5.71022 15.6638 7.18674 15.75 8.75V9.125Z" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <p class="menu-item__text">Обратная связь</p>
        </div>

        <div :class="['menu-item', { 'menu-item--active': $route.meta.title == 'Тимбилдинг' }]" @click="redirect('/teambuilding')">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
            <path d="M12 16.25V14.75C12 13.9544 11.6839 13.1913 11.1213 12.6287C10.5587 12.0661 9.79565 11.75 9 11.75H4.5C3.70435 11.75 2.94129 12.0661 2.37868 12.6287C1.81607 13.1913 1.5 13.9544 1.5 14.75V16.25" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.75 8.75C8.40685 8.75 9.75 7.40685 9.75 5.75C9.75 4.09315 8.40685 2.75 6.75 2.75C5.09315 2.75 3.75 4.09315 3.75 5.75C3.75 7.40685 5.09315 8.75 6.75 8.75Z" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.5 16.25V14.75C16.4995 14.0853 16.2783 13.4396 15.871 12.9142C15.4638 12.3889 14.8936 12.0137 14.25 11.8475" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 2.8475C12.6453 3.01273 13.2173 3.38803 13.6257 3.91423C14.0342 4.44044 14.2559 5.08762 14.2559 5.75375C14.2559 6.41988 14.0342 7.06706 13.6257 7.59327C13.2173 8.11947 12.6453 8.49477 12 8.66" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <p class="menu-item__text">Тимбилдинг</p>
        </div>

        <div :class="['menu-item', { 'menu-item--active': $route.meta.title == 'Трансляция онлайн' }]">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
            <path d="M1.5 6.5V5C1.5 4.60218 1.65804 4.22064 1.93934 3.93934C2.22064 3.65804 2.60218 3.5 3 3.5H15C15.3978 3.5 15.7794 3.65804 16.0607 3.93934C16.342 4.22064 16.5 4.60218 16.5 5V14C16.5 14.3978 16.342 14.7794 16.0607 15.0607C15.7794 15.342 15.3978 15.5 15 15.5H10.5" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.5 9.5C3.03553 9.66295 4.46878 10.3475 5.56066 11.4393C6.65254 12.5312 7.33705 13.9645 7.5 15.5" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.5 12.5C2.24449 12.6387 2.92956 12.9995 3.46504 13.535C4.00053 14.0704 4.36134 14.7555 4.5 15.5" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.5 15.5H1.50615" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <p class="menu-item__text">Трансляция онлайн</p>
        </div>

      </div>
    </div>
    <div class="lang-block">
      <p @click="switchLang('ru')" :class="{'lang-active': $i18n.locale == 'ru'}">RU</p>
      <div class="divider--vertical"></div>
      <p @click="switchLang('en')" :class="{'lang-active': $i18n.locale == 'en'}">EN</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  data() {
    return {
      isOpen: false,
    }
  },
  mounted() {
    this.emitter.on('toggle-sidebar', isOpen => this.isOpen = isOpen)
  },
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang
    },
    redirect(path) {
      this.$router.push({ path })
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 292px;
  height: 100%;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: #fff;
  box-shadow: 0px 0px 42px rgba(215, 217, 221, 0.49);
  box-sizing: border-box;
  transition: .5s;
  transform: translateX(0);
}
.logo-block {
  padding: 42px 32px;
}
.menu {
  margin-top: 80px;
  text-align: left;
}
.menu-item {
  height: 57px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.menu-item:hover,
.menu-item--active {
  background-color: rgba(95, 178, 255, 0.2);
}
.menu-item__text {
  margin-left: 12px;
  font-size: 18px;
  font-weight: 700;
  color: #191b20;
  opacity: 0.5;
}
.menu-item:hover .menu-item__text,
.menu-item--active .menu-item__text {
  color: #51a3ef;
  opacity: 1;
}
.menu-item:hover g,
.menu-item--active g {
  stroke: #51a3ef;
  opacity: 1;
}
.menu-item:hover svg path,
.menu-item--active svg path {
  stroke: #51a3ef;
  opacity: 1;
}
.divider {
  width: calc(100% - 64px);
  height: 2px;
  margin: 0 auto;
  background-color: #191b20;
  opacity: 0.1;
}
.divider--vertical {
  width: 2px;
  height: 22px;
  margin: 0 10px;
  background-color: #191b20;
  opacity: 0.3;
}
.lang-block {
  margin-top: auto;
  margin-left: 32px;
  display: flex;
  align-items: center;
  color: rgba(25, 27, 32, 0.5);
}
.lang-block p {
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}
.lang-active {
 color: #51A3EF;
}
@media screen and (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  } 
  .sidebar-open {
    transform: translateX(0);
  } 
}
</style>