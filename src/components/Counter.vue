<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  if (count.value > 0) count.value--
}
</script>

<template>
  <div class="card">
    <h2>Narudžbe</h2>

    <p>Ukupno: {{ count }}</p>

    <button @click="increment">+ Nova</button>
    <button @click="decrement">- Ukloni</button>
  </div>
</template>

<style scoped>
.card {
  background: #8d6e63;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
}

h2 {
  margin-top: 0;
  color:#d6cac5;
}   

button {
  margin: 5px;
  background-color: #a1887f;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 5px;
}
</style>