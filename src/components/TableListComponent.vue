<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Product name</th>
          <th scope="col" class="px-6 py-3">Color</th>
          <th scope="col" class="px-6 py-3">Category</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody v-for="art in artworks?.content" :key="art.name">
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ art.name }}
          </th>
          <td class="px-6 py-4">
            {{ art.description }}
          </td>
          <td class="px-6 py-4">{{art.exposureDate}}</td>
          <td class="px-6 py-4">{{art.publicationDate}}</td>
          <td class="px-6 py-4">{{art.nameOfAutores}}</td>
          <td class="px-6 py-4">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { IArtworkInterface } from '@/interfaces/artworkInterface/IArtworkInterface.ts'
import type { IPage } from '@/interfaces/IPage.ts'
import axios from 'axios'

const artworks = ref<IPage<IArtworkInterface> | null>(null)

const handlerArtworks = async () => {
  try {
    const res = await axios.get<IPage<IArtworkInterface>>(`http://localhost:8080/artwork/all`)

    artworks.value = res.data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  handlerArtworks()
})
</script>
