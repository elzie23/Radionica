<script setup>
defineProps({
  label: String,
  variant: {
    type: String,
    default: 'default'
  }
})
</script>

<template>
  <button :class="['btn', variant]">
    {{ label }}
    <slot />
  </button>
</template>

<style scoped>
.btn {
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
}

.default {
  background-color: #a1887f;
}

.delete {
  background-color: #755d3f;
}

.clear {
  background-color: #6b4f4f;
}
</style>