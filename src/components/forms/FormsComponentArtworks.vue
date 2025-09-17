<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAxiosStore } from '@/stores/axiosStore.ts'
import CountrysComponent from '@/components/CountrysComponent.vue'
import type { IPage } from '@/interfaces/IPage.ts'
import type { IAutorInterface } from '@/interfaces/autorInterface/IAutorInterface.ts'
import axios from 'axios'
import MultSelectAutores from '@/components/forms/MultSelectAutores.vue'

const name = ref<string>('')
const description = ref<string>('')
const publicationDate = ref<string>('')
const exposureDate = ref<string>('')
const autores = ref<number[]>([])

const store = useAxiosStore()
const router = useRouter()

const handlerCreateArtwork = async () => {
  try {
    const res = await store.http.post('/artwork', {
      name: name.value,
      description: description.value,
      publicationDate: publicationDate.value,
      exposureDate: exposureDate.value,
      autores: autores.value,
    })

    name.value = ''
    description.value = ''
    publicationDate.value = ''
    exposureDate.value = ''
    autores.value = []

    console.log('created', res.data)
    await router.push('/artworks')
    router.go(0)
  } catch (err) {
    console.log(err)
  }
}

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

<template>
  <form @submit.prevent="handlerCreateArtwork">
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Name</label
        >
        <input
          v-model="name"
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
        />
      </div>

      <div>
      <MultSelectAutores/>
      </div>

      <div>
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Date of Birth</label
        >
        <div class="relative max-w-sm">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
              />
            </svg>
          </div>
          <input
            v-model="dateOfBirth"
            id="default-datepicker"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=" yyyy-mm-dd"
          />
        </div>
      </div>

      <CountrysComponent v-model="country" />
    </div>

    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Email</label
      >
      <input
        v-model="email"
        type="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="someone@example.com"
        required
      />
    </div>
    <div class="mb-6">
      <label for="cpf" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >CPF</label
      >
      <input
        v-model="cpf"
        type="text"
        id="CPF"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="000.000.000-00"
      />
    </div>

    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
</template>

<style scoped></style>
