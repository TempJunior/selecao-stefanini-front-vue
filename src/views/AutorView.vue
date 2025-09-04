<script setup lang="ts">
import FormsComponent from '@/components/forms/FormsComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
</script>

<template>
  <main class="h-screen bg-gray-900 absolute w-full">
    <NavbarComponent/>
    <div class="flex items-center justify-center flex-col pt-14">
      <FormsComponent />
    </div>

  </main>
</template>

<style scoped></style>
