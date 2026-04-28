<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const openMenu = () => {
  isOpen.value = !isOpen.value
}

</script>

<template>
    <div class="navbar">
        <h2>Bakery</h2>
        <button class="hamburger" @click="openMenu">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <div class="menu" v-if="isOpen">
            <RouterLink class="links" to="/">Home</RouterLink>
            <RouterLink class="links" to="/products">Products</RouterLink>
            <RouterLink class="links" to="/contact">Contact</RouterLink>
        </div>
    </div>
</template>

<style scoped>
h2 {
  text-align: center;
  color: #6b4f4f;
  margin-left: 10%;
  margin-top: 10px;
  font-family: monospace;
  font-weight: bold;
  font-style: italic;
  font-size: 30px;
}

.navbar {
  background-color: #a1887f;
  padding: 10px;
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
}
.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  margin-right: 10%;
  margin-top: 15px;
  flex-direction: column;
  gap: 5px;
}
.hamburger span {
  width: 25px;
  height: 3px;
  background-color: white;
  border-radius: 2px;
  margin-right: 10%;
}
.menu {
  position: absolute;
  top: 50px;
  right: 10px;
  background-color: #a1887f;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.links {
  color: #6b4f4f;
  text-decoration: none;
  margin: 0 10px;
}
.links:hover {
  text-decoration: underline;
}
</style>