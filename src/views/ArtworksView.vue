<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue'
import FormsComponentArtworks from '@/components/forms/FormsComponentArtworks.vue'
</script>

<template>
  <main class="h-screen bg-gray-900 absolute w-full">
    <div>
      <NavbarComponent />
      <div class="flex justify-center mt-4">
        <h1 class="text-white text-4xl">Cadastro e listagem de Artowrks</h1>
      </div>
    </div>

    <section class="flex p-8">
      <div class="container p-4">
        <FormsComponentArtworks/>
      </div>

      <div class="container p-4"></div>
    </section>
  </main>
</template>

<style scoped></style>
