<script setup>
import { reactive } from 'vue'

const user = reactive({
  name: '',
  order: ''
})

function resetForm() {
  user.name = ''
  user.order = ''
}
</script>

<template>
  <div class="card">
    <h2>Podaci o kupcu</h2>

    <input v-model="user.name" placeholder="Ime kupca" />
    <input v-model="user.order" placeholder="Šta naručuje?" />

    <p><strong>Kupac:</strong> {{ user.name }}</p>
    <p><strong>Narudžba:</strong> {{ user.order }}</p>

    <button @click="resetForm">Reset</button>
  </div>
</template>

<style scoped>
.card {
  background: #fff8f0;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
}

h2 {
  margin-top: 0;
  color:#a1887f;
}

input {
  display: block;
  margin-bottom: 10px;
  background-color: #8d6e63;
  margin-left: 3%;
  border-radius: 5px;
  padding: 8px;
  width: 90%;
}

button {
  background-color: #8d6e63;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 5px;
}
</style>