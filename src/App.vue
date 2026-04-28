<script setup>
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: Arial, sans-serif;
  background-color: #f5efe6;
}

.app {
  width: 100%;
}

.mainScreen {
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 20px;
  border: 2px solid #6b4f4f;
  border-radius: 1%;
  width: 90%;
  margin-left: 5%;
  box-sizing: border-box; 
}
</style>