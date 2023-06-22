<script setup >
    import { ref, watch } from 'vue'
    import { defineProps } from 'vue';

    const { 
        questionStatus, 
        barPercentage 
    } = defineProps(
        [
            'questionStatus', 
            'barPercentage'
        ]);
</script>


<template>
    <header>
        <div class="bar-container">
            <h4>Question {{ questionStatus }}</h4>
            <div class="bar">
                <div class="completion" :style="{width: barPercentage}"></div>
            </div>
        </div>
    </header>
</template>

<style scoped>
    .bar-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    header {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    header h4 {
        font-size: 30px;
    }

    .bar {
        width: 1000px;
        height: 60px;
        background-color: rgba(128, 128, 128, 0.1);
        border: 3px solid bisque;
        border-radius: 10px;
        margin-top: 20px;
    }

    .completion {
        height: 100%;
        background-color: bisque;
    }

</style>