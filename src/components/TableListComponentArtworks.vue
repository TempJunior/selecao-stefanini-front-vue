<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Ator name</th>
          <th scope="col" class="px-6 py-3">Country</th>
          <th scope="col" class="px-6 py-3">Birth</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Gender</th>
          <th scope="col" class="px-6 py-3"></th>
        </tr>
      </thead>
      <tbody v-for="at in autor?.content" :key="at.id">
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ at.name }}
          </th>
          <td class="px-6 py-4">
            {{ at.country }}
          </td>
          <td class="px-6 py-4">{{ at.dateOfBirth }}</td>
          <td class="px-6 py-4">{{ at.email }}</td>
          <td class="px-6 py-4">{{ at.gender }}</td>
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
import type { IPage } from '@/interfaces/IPage.ts'
import axios from 'axios'
import type { IAutorInterface } from '@/interfaces/autorInterface/IAutorInterface.ts'

const autor = ref<IPage<IAutorInterface> | null>(null)

const handlerArtworks = async () => {
  try {
    const res = await axios.get<IPage<IAutorInterface>>(`http://localhost:8080/autor/all`)

    autor.value = res.data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  handlerArtworks()
})
</script>
