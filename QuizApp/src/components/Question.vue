<script setup>
    import { ref, watch } from 'vue'
    import { defineProps, defineEmits } from 'vue';

    const emit = defineEmits(['selectOption']);

    const {question} = defineProps(['question']);

    const emitSelectedOption = (isCorrect) => {
        emit('selectOption', isCorrect);
    }
</script>




<template>
    <div class="question-container">
        <h1 class="question">
            {{ question.text }}
        </h1>
    </div>
    <div class="options-container">
        <div 
            v-for="option in question.options" 
            :key="option.id" 
            class="option"
            @click="emitSelectedOption(option.isCorrect)"
        >
            <div class="option-item">
                <p class="option-label">{{ option.label }}</p>
                <div class="option-value">
                    <p>{{ option.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .question-container {
        margin-top: 20px;
        width: 100%;
    }

    .question {
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
    }
    .question:hover {
        color: bisque;
        transition: all 0.2s ease-in-out;
    }

    .option {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .option-item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    
    .option-label {
        background-color: bisque;
        color: #181818;
        font-size: 35px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 0.3em;
        margin-right: 10px;
    }

    .option-value {
        background-color: rgba(128, 128, 128, 0.1);
        color: whitesmoke;
        font-size: 30px;
        font-weight: bold;
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 50px;
        border-radius: 0.3em;
        margin-left: 20px;
        cursor: pointer;
    }

    .option-value:hover {
        transform: scaleX(1.04);
        background-color: rgba(191, 145, 8, 0.8);
        transition: all 0.2s ease-in-out;
    }

    .option-value p:hover {
        transform: rotateZ(3deg);
    }

</style>