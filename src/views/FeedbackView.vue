<template>
  <div>
    <div class="title">{{ $route.meta.title }}</div>
    <!-- {{ questions }} -->
    <div v-for="(value, name, index) in questions" :key="index">
      {{ value }} {{ name }} {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackView',
  data() {
    return {
      questions: []
    }
  },
  created() {
    fetch('https://bionorica-growingrelations25.ru/bio/index?action=get_list_of_question&fio=ahmed')
      .then((response) => response.json())
      .then((data) => this.questions = data
      )
  }
}
</script>

<style>

</style>