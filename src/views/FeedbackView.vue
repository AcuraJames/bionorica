<template>
  <div class="feedback">
    <div class="title">{{ $t('route.feedback') }}</div>
    <div v-for="(item, index) in questions" :key="index">
      <div v-for="(answers, question) of item" :key="question" class="question-block">
        <div class="question-block__question">{{ question }}</div>
        <div class="question-block__answers">
          <div v-for="(answer, i) in answers" :key="i" class="answer-radio-wrapper">
            <input type="radio" :id="answer" :value="answer" v-model="variant">
            <label :for="answer">{{ answer }}</label>
          </div>
          <input type="text" v-model="variant">
        </div>
      </div>
      <!-- НАДО ДЕЛАТЬ КОМПОНЕНТ -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackView',
  data() {
    return {
      questions: [],
      // variant: ''
    }
  },
  computed: {
    variants() {
      return new Array(this.questions.length)
    }
  }, 
  created() {
    fetch('https://bionorica-growingrelations25.ru/index?action=get_list_of_question&fio=ahmed')
      .then((response) => response.json())
      .then((data) => {
        this.questions = data
      })
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
}
.question-block__answers {
  display: flex;
}
.answer-radio-wrapper {
  display: flex;
  align-items: center;
}
input[type="radio"] {
  width: 20px;
  height: 20px;
}
</style>