<script setup>
  import q from '../data/quizes.json'
  import { ref, watch } from 'vue'
  import card from '../components/card.vue'

  const quizes = ref(q);
  const search = ref('');

  watch(search, (val) => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })


</script>

<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="option-container">
      <card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>

<style scoped>

  header{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 30px;
  }

  header h1{
    font-size: 30px;
    font-weight: bold;
    margin-right: 30px;
  }

  header input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 10px;
    color: whitesmoke
  }

  .option-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
  }


</style>