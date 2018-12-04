<template>
  <div class="action">
    <img alt="Vue logo" src="../assets/quiz0.jpeg">
    <quiz />
  </div>
</template>

<script>
    // @ is an alias to /src
    import Quiz from '@/components/Quiz.vue'

    export default {
        name: 'action',
        components: {
            Quiz
        }
    }
</script>
