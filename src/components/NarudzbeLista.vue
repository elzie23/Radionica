<script setup>
import { ref, computed } from 'vue'

const newTask = ref('')
const newPrice = ref(0)

const tasks = ref([])

function addTask() {
  if (newTask.value.trim() === '' || newPrice.value <= 0) return

  tasks.value.push({
    name: newTask.value,
    price: newPrice.value,
    completed: false
  })

  newTask.value = ''
  newPrice.value = 0
}

function removeTask(index) {
  tasks.value.splice(index, 1)
}

function clearAll() {
  tasks.value = []
}

const totalTasks = computed(() => tasks.value.length)

const totalPrice = computed(() =>
  tasks.value.reduce((sum, task) => sum + task.price, 0)
)
</script>

<template>
  <div class="card">
    <h2>Lista narudžbi</h2>

    <input
      v-model="newTask"
      placeholder="Naziv narudžbe"
      @keyup.enter="addTask"
    />

    <input
      v-model.number="newPrice"
      type="number"
      placeholder="Cijena (KM)"
      @keyup.enter="addTask"
    />

    <button @click="addTask">Dodaj</button>
    <button class="clear" @click="clearAll">Očisti sve</button>

    <p>Ukupno narudžbi: {{ totalTasks }}</p>
    <p>Ukupna cijena: {{ totalPrice }} KM</p>

    <ul>
      <li
        v-for="(task, index) in tasks"
        :key="index"
        :class="{ done: task.completed }"
      >
        <input type="checkbox" v-model="task.completed" />

        {{ task.name }} - {{ task.price }} KM

        <button class="delete" @click="removeTask(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.card {
  background: #fff8f0;
  padding: 15px;
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
  background-color: #a1887f;
  color: white;
  border: none;
  padding: 6px;
  border-radius: 5px;
  margin: 5px;
}

.delete {
  background-color: #d7a86e;
}

.clear {
  background-color: #6b4f4f;
}

li {
  margin-top: 10px;
}

.done {
  text-decoration: line-through;
  color: gray;
  opacity: 0.7;
}
</style>

