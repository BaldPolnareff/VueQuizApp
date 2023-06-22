<script setup>
    import { ref, watch, computed } from 'vue'
    import Question from '../components/Question.vue';
    import QuizHeader from '../components/QuizHeader.vue';
    import Result from '../components/Result.vue';
    import { useRoute } from 'vue-router';
    import quizes from '../data/quizes.json';


    const route = useRoute();
    const quizId = parseInt(route.params.id);
    const currentQuestionIndex = ref(0);
    const numberOfCorrectAnswers = ref(0);
    const showResults = ref(false);

    const quiz = quizes.find(q => q.id === quizId);

    //const questionStatus = ref(`${currentQuestionIndex.value+1}/${quiz.questions.length}`);

    //watch(() => currentQuestionIndex.value, () => {
    //    questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
    //})

    const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)

    const barPercentage = computed(() => `${(currentQuestionIndex.value) / quiz.questions.length * 100}%`)

    const onOptionSelected = (isCorrect) => {
        if (isCorrect) {
            numberOfCorrectAnswers.value++;
        }
        if (quiz.questions.length === currentQuestionIndex.value + 1) {
            showResults.value = true;
        }
        currentQuestionIndex.value++;
    }


</script>

<template>
    <div>
        <QuizHeader 
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"    
        />
        <div>
            <Question 
            v-if="!showResults"
            :question="quiz.questions[currentQuestionIndex]"
            @selectOption="onOptionSelected"
        />
        <Result 
            v-else
            :quizQuestionLength="quiz.questions.length"
            :numberOfCorrectAnswers="numberOfCorrectAnswers"
        />
        </div>
    </div>
</template>

<style scoped>

    
</style>