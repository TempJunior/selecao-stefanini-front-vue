<script setup lang="ts">
import FormsComponent from '@/components/forms/FormsComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import TableListComponent from '@/components/TableListComponent.vue'
</script>

<template>
  <main class="h-screen bg-gray-900 absolute w-full">
    <div>
      <NavbarComponent />
    </div>

    <section class="flex p-8">

      <div class="container p-4">
        <FormsComponent />
      </div>

      <div class="container p-4">
        <TableListComponent />
      </div>

    </section>

  </main>
</template>

<style scoped></style>
