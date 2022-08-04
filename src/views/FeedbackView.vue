<template>
  <div v-if="questions.length" class="feedback">
    <div class="title">{{ $t('route.feedback') }}</div>
    <feedback-item v-for="(item, index) in questions" :key="index" :item="item" />
  </div>
</template>

<script>
import FeedbackItem from '@/components/FeedbackItem'

export default {
  name: 'FeedbackView',
  components: { FeedbackItem },
  data() {
    return {
      questions: [],
    }
  }, 
  created() {
    const fio = document.cookie.split(';')[0].split('=')[1]
    fetch(`https://bionorica-growingrelations25.ru/index?action=get_list_of_question&fio=${fio}`)
      .then((response) => response.json())
      .then((data) => this.questions = data)
  }
}
</script>

<style>
</style>