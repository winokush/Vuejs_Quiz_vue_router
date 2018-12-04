<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/quiz.jpeg">
        <quizs />
  </div>
</template>

<script>
// @ is an alias to /src
import Quizs from '@/components/Quizs.vue'

export default {
  name: 'home',
  components: {
    Quizs
  }
}
</script>
