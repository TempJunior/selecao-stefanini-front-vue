<script setup lang="ts">
export interface Props {
  text: string
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
})
</script>

<template>

</template>

<style scoped>

</style>
