<!-- @format -->

<template>
  <button
    class="rounded border-0 bg-brand-blue-1 px-5 py-3 font-medium text-white hover:shadow-blue"
  >
    {{ buttonMsg }}
  </button>
</template>

<script setup>
const props = defineProps({
  buttonMsg: String,
});
</script>

<style scoped></style>
