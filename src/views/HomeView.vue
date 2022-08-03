<template>
  <div>
    <div class="title">{{ $t('route.main') }}</div>
    <div class="banner">
      <div class="banner-text">
        <p class="banner-text__greetings">{{ $t('main.greetings1') }}</p>
        <p class="banner-text__slogan">{{ $t('main.greetings2') }}</p>
      </div>
      <div class="banner-logo">
        <img :src="require('../assets/img/logo.png')" style="border-radius:14px">
      </div>
    </div>
    <div class="text-block">
      {{ $t('main.paragraph1') }}
        <br><br>
      {{ $t('main.paragraph2') }}
      <br>
      {{ $t('main.paragraph3') }}
    </div>
    <base-modal v-if="showRegModal" @closeModal="showRegModal = false">
      <reg-form v-if="!isAuth" @success="success" />
      <reg-success v-else @close="showRegModal = false" />
    </base-modal>
  </div>
</template>

<script>
import BaseModal from '@/components/BaseModal.vue'
import RegForm from '@/components/RegForm.vue'
import RegSuccess from '@/components/RegSuccess.vue'

export default {
  name: "HomeView",
  components: {
    BaseModal,
    RegForm,
    RegSuccess
  },
  data() {
    return {
      cookie: null,
      showRegModal: false,
      isAuth: false
    }
  },
  mounted() {
    this.cookie = document.cookie

    if (!this.cookie) {
      this.showRegModal = true
    } else {
      this.isAuth = true
    }
  },
  methods: {
    success() {
      this.cookie = document.cookie

      if (!this.cookie) {
        return
      } else {
        this.isAuth = true
      }
    }
  }
};
</script>

<style>
.banner {
  max-width: 100%;
  height: 280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  background-color: #51a3ef;
  box-shadow: 0px 0px 42px rgba(215, 217, 221, 0.49);
  overflow: auto;
}
.banner-text {
  max-width: 360px;
  margin-left: 40px;
  text-align: left;
  color: #fff;
}
.banner-text__greetings {
  font-size: 28px;
  font-weight: 700;
  line-height: 38.25px;
}
.banner-text__slogan {
  font-size: 16px;
  font-weight: 400;
  line-height: 21.86px;
}
.banner-logo {
  width: 320px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-top-left-radius: 30px 50%;
  border-bottom-left-radius: 30px 50%;
  border-left: 11px solid rgba(95, 178, 255, 0.5); 
}
.text-block {
  width: 100%;
  padding: 30px 24px;
  margin-top: 24px;
  background: #FFFFFF;
  box-shadow: 0px 0px 42px rgba(215, 217, 221, 0.49);
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  color: #191b20;
}
@media screen and (max-width: 768px) {
  .banner {
    height: 510px;
    flex-direction: column;
  }
  .banner-logo {
    width: 100%;
    border-top-left-radius: 230px 20%;
    border-top-right-radius: 230px 20%;
    border-bottom-left-radius: 0;
    border-top: 11px solid rgba(95, 178, 255, 0.5);
    border-left: none;
  }
}
</style>
