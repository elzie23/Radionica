<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import Button from './Button.vue'

const newTask = ref('')
const newPrice = ref(0)
const tasks = ref([])
const filter = ref('all')

onMounted(() => {
  const saved = localStorage.getItem('tasks')
  if (saved) {
    tasks.value = JSON.parse(saved)
  }
})

watch(tasks, (newTasks) => {
  localStorage.setItem('tasks', JSON.stringify(newTasks))
}, { deep: true })

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

const filteredTasks = computed(() => {
  if (filter.value === 'active') {
    return tasks.value.filter(t => !t.completed)
  }
  if (filter.value === 'completed') {
    return tasks.value.filter(t => t.completed)
  }
  return tasks.value
})
</script>

<template>
  <div class="card">
    <h2>Lista narudžbi</h2>

    <input v-model="newTask" placeholder="Naziv narudžbe" @keyup.enter="addTask" />
    <input v-model.number="newPrice" type="number" placeholder="Cijena (KM)" @keyup.enter="addTask" />

    <Button label="Dodaj" @click="addTask" />
    <Button label="Očisti sve" variant="clear" @click="clearAll" />

    <div class="filters">
      <Button label="Sve" @click="filter = 'all'" />
      <Button label="Aktivne" @click="filter = 'active'" />
      <Button label="Završene" @click="filter = 'completed'" />
    </div>

    <p>Ukupno narudžbi: {{ totalTasks }}</p>
    <p>Ukupna cijena: {{ totalPrice }} KM</p>

    <ul>
      <li
        v-for="(task, index) in filteredTasks"
        :key="index"
        :class="{ done: task.completed }"
      >
        <div class="rmv">
        <input type="checkbox" v-model="task.completed" />

        <Button variant="delete" @click="removeTask(index)">
          -
        </Button>
        </div>
       {{ task.name }} - {{ task.price }} KM

      </li>
    </ul>
  </div>
</template>

<style scoped>
.card {
  background: #fff8f0;
  padding: 15px;
  border-radius: 10px;
  max-width: 100%;
  margin: auto;
}

h2 {
  margin-top: 0;
  color: #a1887f;
  text-align: center;
}

input {
  display: block;
  margin-bottom: 10px;
  background-color: #8d6e63;
  color: white;
  margin-left: 3%;
  border-radius: 5px;
  padding: 8px;
  width: 90%;
  border: none;
}

input::placeholder {
  color: #f5e6dc;
}

.filters {
  margin: 10px 0;
}

li {
  margin-top: 10px;
  width: 30%;
  display: flex;
  margin-left: 1%;
  justify-content: space-evenly;
  align-items: center;
}

.done {
  text-decoration: line-through;
  color: gray;
  opacity: 0.7;
}
</style>