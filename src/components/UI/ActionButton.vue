<!-- @format -->

<template>
  <button :class="buttonClass">{{ buttonMsg }}</button>
</template>

<script>
export default {
  props: ["buttonMsg", "type"],

  computed: {
    buttonClass() {
      return {
        primary: this.type === "primary",
        secondary: this.type === "secondary",
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply rounded border-0 bg-brand-blue-1  text-white hover:shadow-blue;
}

.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>
