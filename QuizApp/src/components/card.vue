<script setup>
    import { defineProps, ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const {quiz} = defineProps([ 'quiz' ]);

    const navigateToQuiz = () => {
        router.push(`/quiz/${quiz.id}`);
    }

</script>

<template>
        <div class="card" @click="navigateToQuiz">
            <img :src="quiz.img" alt="image">
            <div class="card-text">
                <h2>{{ quiz.name }}</h2>
                <p>{{ quiz.questions.length }} questions</p>
            </div>
        </div>
</template>

<style scoped>
.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(100, 100, 100, 0.2);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  margin: 0; 
}
.card:hover {
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;
}
.card .card-text {
  padding-top: 4px;
  padding-left: 10px;
  padding-bottom: 10px;
}
.card .card-text h2{
  font-weight: bold;
}


</style>