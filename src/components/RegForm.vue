<template>
  <div class="form-wrapper">
    <div class="form-title">Регистрация</div>
    <form class="reg-form" @submit.prevent="submit">
      <fieldset>
        <label for="fio">ФИО / Full name</label>
        <input v-model="fio" id="fio" type="text" placeholder="ФИО / Full name" required />
      </fieldset>
      <fieldset class="email">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="example@mail.ru"
          @focus="wrongEmail = false"
          required
        />
        <span v-if="wrongEmail" class="invalid">Email указан неверно</span>
      </fieldset>
      <fieldset class="password">
        <label for="password">Пароль / Password</label>
        <input
          id="password"
          v-model="password"
          :type="passwordVisible ? 'text' : 'password'"
          placeholder="Пароль / Password"
          @focus="wrongPassword = false"
          required
        />
        <div class="password-icon" @click="passwordVisible=!passwordVisible">
          <svg v-if="passwordVisible" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
            <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
            <path d="M9.87988 9.88C9.58514 10.1547 9.34873 10.4859 9.18476 10.8539C9.02079 11.2218 8.93262 11.6191 8.92552 12.0219C8.91841 12.4247 8.99251 12.8248 9.14339 13.1984C9.29428 13.5719 9.51885 13.9113 9.80373 14.1962C10.0886 14.481 10.4279 14.7056 10.8015 14.8565C11.175 15.0074 11.5752 15.0815 11.978 15.0744C12.3808 15.0673 12.778 14.9791 13.146 14.8151C13.514 14.6512 13.8452 14.4148 14.1199 14.12" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.73 5.08C11.1513 5.02751 11.5754 5.00079 12 5C19 5 22 12 22 12C21.5529 12.9571 20.9922 13.8569 20.33 14.68" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.61 6.60999C4.62125 7.96461 3.02987 9.82524 2 12C2 12 5 19 12 19C13.9159 19.0051 15.7908 18.4451 17.39 17.39" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 2L22 22" stroke="#191B20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </div>
        <span v-if="wrongPassword" class="invalid">Неверный пароль</span>
      </fieldset>
      <input type="submit" id="" value="Зарегистрироваться / Registration" class="submit-btn"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegForm',
  data() {
    return {
      fio: '',
      email: '',
      password: '',
      passwordVisible: false,
      wrongEmail: false,
      wrongPassword: false
    }
  },
  methods: {
    submit() {
      const domain = this.email.split('@')[1]

      if (this.password != 'ASFM2022') {
        this.wrongPassword = true
        return
      }

      if (domain == 'bionorica.ru' || domain == 'bionorica.de' || domain == 'bionorica.com') {
        this.auth()
      } else {
        this.wrongEmail = true
        return
      }

    },
    auth() {
      fetch(`https://bionorica-growingrelations25.ru/index?action=registration&fio=${this.fio}&email=${this.email.toLowerCase()}&pass=${this.password}`)
        .then((response) => {
          if (response) {
            document.cookie = `fio=${this.fio};`
            document.cookie = `email=${this.email};`
            document.cookie = `pass=${this.password}`
            this.$emit('success')
          }
        }
      )
    }
  }
}
</script>

<style>
.form-wrapper {
  width: 100%;
  margin-top: 48px;
  box-sizing: border-box;
}
.form-title {
  font-size: 20px;
  font-weight: 700;
  color: #191b20;
  text-align: left;
}
.reg-form {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
}
fieldset {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  border: none;
}
label {
  margin-bottom: 6px;
  font-size: 10px;
  font-weight: 400;
}
input {
  width: 100%;
  height: 56px;
  padding: 16px;
  margin-bottom: 16px;
  box-sizing: border-box;
  background: rgba(25, 27, 32, 0.03);
  border: 1px solid rgba(25, 27, 32, 0.1);
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  color: #191b20;
}
.submit-btn {
  margin: 0;
  padding: 0;
  background: #51A3EF;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
}
.email,
.password {
  position: relative;
}
.password-icon {
  position: absolute;
  top: 34px;
  right: 16px;
  cursor: pointer;
}
.invalid {
  font-size: 11px;
  position: absolute;
  top: 0;
  right: 0;
  margin-bottom: 4px;
  color: rgb(182, 21, 21);
}
</style>
