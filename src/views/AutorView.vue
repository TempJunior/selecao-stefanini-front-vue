<script setup lang="ts">
import FormsComponent from '@/components/forms/FormsComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import TableListComponent from '@/components/TableListComponent.vue'
</script>

<template>
  <main class="h-screen bg-gray-900 absolute w-full">
    <NavbarComponent />
    <div class="flex justify-between p-26">
      <FormsComponent />
      <TableListComponent />
    </div>
  </main>
</template>

<style scoped></style>
