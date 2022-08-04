<template>
  <div class="feedback">
    <div
      v-for="(answers, question) of item"
      :key="question"
      class="question-block"
    >
      <div class="question-block__question">{{ question }}</div>
      <div class="question-block__answers">
        <div
          v-for="(answer, i) in answers"
          :key="i"
          class="answer-radio-wrapper"
        >
          <input
            type="radio"
            :id="answer"
            name="answer"
            :value="answer"
            v-model="variant"
            @input="customVariant = ''"
          />
          <label class="answer-radio-label" :for="answer">{{ answer }}</label>
        </div>
      </div>
      <div class="custom-variant-label">Свой вариант</div>
      <div class="custom-variant-wrapper">
        <div class="custom-variant-input">
          <input type="text" placeholder="Введите свой вариант ответа" v-model="customVariant" @focus="variant = ''" />
        </div>
        <button @click="sendAnswer">Выбрать</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackItem',
  data() {
    return {
      variant: '',
      customVariant: ''
    }
  },
  props: {
    item: Object
  },
  methods: {
    sendAnswer() {
      const fio = document.cookie.split(';')[0].split('=')[1]
      const answer = this.customVariant ? this.customVariant : this.variant
      fetch(`https://bionorica-growingrelations25.ru/index?action=set_my_answer&answer=${answer}&fio=${fio}`) // FIO
    }
  }
}
</script>

<style>
.question-block {
  width: 100%;
  padding: 20px;
  margin-bottom: 16px;
  background-color: #fff;
  border: 1px solid rgba(25, 27, 32, 0.1);
  border-radius: 6px;
}
.question-block__question {
  margin-bottom: 24px;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  color: #191b20;
}
.question-block__answers {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.answer-radio-wrapper {
  display: flex;
  align-items: center;
}
.answer-radio-label {
  margin-right: 40px;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
  color: #191b20;
}
[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 34px;
    cursor: pointer;
    line-height: 24px;
    display: inline-block;
    color: #666;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    background: #F8F8F8;
    border: 1px solid rgba(25, 27, 32, 0.1);
    border-radius: 2px;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: url('data:image/svg+xml, <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13 1.5L4.75 9.75L1 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    width: 24px;
    height: 24px;
    color: #fff;
    background: #51A3EF;
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 2px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}
button {
  width: 30%;
}
.custom-variant-label {
  margin-bottom: 6px;
  text-align: left;
  font-size: 10px;
  font-weight: 400;
  color: #191b20;
}
.custom-variant-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.custom-variant-input {
  width: calc(70% - 14px);
  padding-right: 14px;
}
input[type="text"] {
  width: 100%;
  height: 46px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(25, 27, 32, 0.5);
  box-sizing: border-box;
}
button {
  width: 30%;
  height: 46px;
  border: none;
  border-radius: 6px;
  background-color: #51a3ef;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: #fff;
  cursor: pointer;
}
@media screen and (max-width: 1440px) {
  .custom-variant-input {
    width: 100%;
    padding-right: 0;
  }
  button {
    width: 100%;
  }
}
</style>
