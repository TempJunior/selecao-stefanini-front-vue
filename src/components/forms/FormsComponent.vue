<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Datepicker from 'flowbite-datepicker'
import { initFlowbite } from 'flowbite'
import { useRouter } from 'vue-router'
import { useAxiosStore } from '@/stores/axiosStore.ts'

// ---- estado do formulário
const name = ref<string>('')
const gender = ref<string>('')
const email = ref<string>('')
const dateOfBirth = ref<string>('') // exibido no input em dd/MM/yyyy
const country = ref<string>('')
const cpf = ref<string>('')
interface IArtworkInterface { id: number; title: string; /* ... */ }
const artwork = ref<IArtworkInterface[]>([])

const store = useAxiosStore()
const router = useRouter()

// ---- input do datepicker
const datepicker = ref<HTMLInputElement | null>(null)

let dp: InstanceType<typeof Datepicker> | null = null
let onChangeDate: ((e: Event) => void) | null = null

// helper: dd/MM/yyyy -> yyyy-MM-dd
function toISO(dateBr: string): string {
  if (!dateBr) return ''
  const [d, m, y] = dateBr.split('/')
  if (!d || !m || !y) return '' // defensivo
  return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`
}

onMounted(() => {
  // Inicializa os componentes do Flowbite (se usar outros)
  initFlowbite()

  if (datepicker.value) {
    dp = new Datepicker(datepicker.value, {
      language: 'pt-BR',
      autohide: true,
      format: 'dd/mm/yyyy', // garante formato brasileiro no input
      minDate: new Date('1400-01-01'),
      maxDate: new Date('2023-12-31'),
    })

    // quando o usuário escolher a data no calendário,
    // copiamos o valor do input para o v-model
    onChangeDate = () => {
      dateOfBirth.value = datepicker.value?.value ?? ''
    }
    datepicker.value.addEventListener('changeDate', onChangeDate)

    // se já houver valor no modelo (ex.: edição), reflita no input
    if (dateOfBirth.value) {
      datepicker.value.value = dateOfBirth.value
    }
  }
})

onBeforeUnmount(() => {
  if (datepicker.value && onChangeDate) {
    datepicker.value.removeEventListener('changeDate', onChangeDate)
  }
  dp?.destroy?.()
})

const handlerCreateAutor = async () => {
  try {
    // pega o que está no input (caso o usuário tenha digitado direto)
    if (!dateOfBirth.value && datepicker.value?.value) {
      dateOfBirth.value = datepicker.value.value
    }

    const formattedDate = toISO(dateOfBirth.value) // yyyy-MM-dd

    const res = await store.http.post('/autor', {
      name: name.value,
      gender: gender.value,
      email: email.value,
      dateOfBirth: formattedDate, // enviado em ISO
      country: country.value,
      cpf: cpf.value,
      artwork: artwork.value,
    })

    console.log('created', res.data)
    await router.push('/autor')
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <form
  @submit.prevent="handlerCreateAutor">
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
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Select an gender</label
        >
        <select
          v-model="gender"
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled value="">Choose a gender</option>
          <option value="MEN">Male</option>
          <option value="WOMEN">Female</option>
        </select>
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
            datepicker
            id="default-datepicker"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
          />
        </div>
      </div>

    <CountrysComponent
    v-model="country"
    />

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
      <label
        for="cpf"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >CPF</label
      >
      <input
        v-model="cpf"
        type="text"
        id="CPF"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="000.000.000-00"
        required
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
