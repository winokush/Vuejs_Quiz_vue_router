<template>

    <div class="container">

        <h1 class="mb-4">{{ name }}</h1>

        <b-alert v-if="end" show class="col-4 offset-4">Your Score is : {{ score }}/{{ questions.length }}</b-alert>

        <b-card :header="questions[index].question"

                header-tag="header">

            <b-list-group>

                <b-list-group-item

                        button
                        v-for="(item, index) in questions[index].answers"
                        :key="item.id"
                        @click="action(index)"
                        :variant="variants[index]">
                    {{ item }}

                </b-list-group-item>

            </b-list-group>

            <b-button v-if="end" @click="start_over" class="mt-4">Start Over !</b-button>

            <b-button v-if="end" to="/" class="mt-4 ml-2">Choose another quiz !</b-button>

            <b-button v-if="trueAnswer && !end" @click="lets_go_on" class="mt-4">Continue</b-button>

        </b-card>

    </div>

</template>

<script>
    export default {
        name: 'quiz',
        data: function () {
            return {
                id: 0,
                index: 0,
                score: 0,
                end: false,
                variants: [...Array(4)],
                trueAnswer: false
            }
        },
        methods: {
            action (index) {
                // test the correct answer.
                if (index === this.questions[this.index].ok) {
                    this.score++;
                } else {
                    this.variants[index] = 'danger';
                }

                this.trueAnswer = true;
                this.variants[this.questions[this.index].ok] = 'success';
                // Quiz end of test.
                if (this.index === this.questions.length - 1) {
                    this.end = true;
                }
            },

            start_over () {
                this.trueAnswer = this.end = this.index = this.score = 0;
                this.variants = [...Array(4)];
            },

            lets_go_on () {
                this.trueAnswer = false;
                this.variants = [...Array(4)];
                this.index++;
            }
        },
        computed: {
            name () {
                return this.$store.state.quizs[this.id].name;
            },
            questions () {
                return this.$store.state.quizs[this.id].questions;
            }
        },
        created() {
            this.id = this.$route.params.id;
        }
    }
</script>