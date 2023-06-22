<script setup>
    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';

    const { 
        quizQuestionLength, 
        numberOfCorrectAnswers 
    } = defineProps([
        'quizQuestionLength', 
        'numberOfCorrectAnswers'
        ]) 
</script>

<template>
    <div class="results">
        <p>Your results...</p>
        <h1>
            {{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}
        </h1>
        <RouterLink to="/">
            <button class="replay-button">Play again</button>
        </RouterLink>
    </div>
</template>

<style scoped>
    .results {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .results p {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    .results h1 {
        font-size: 100px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    .replay-button {
        width: 200px;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: rgba(128, 128, 128, 0.5);
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }

    .replay-button:hover {
        transform: scale(1.1);
        background-color: bisque;
        color: #181818;
        transition: all 0.2s ease-in-out;
    }
</style>