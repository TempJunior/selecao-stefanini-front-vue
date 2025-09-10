<script setup lang="ts">
import { ref } from 'vue'

const country = ref<string>('')

const countries = [
  { code: 'US', name: 'United States' },
  { code: 'BR', name: 'Brazil' },
  { code: 'CA', name: 'Canada' },
  { code: 'MX', name: 'Mexico' },
  { code: 'AR', name: 'Argentina' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'FR', name: 'France' },
  { code: 'DE', name: 'Germany' },
  { code: 'IT', name: 'Italy' },
  { code: 'ES', name: 'Spain' },
  { code: 'PT', name: 'Portugal' },
  { code: 'CN', name: 'China' },
  { code: 'JP', name: 'Japan' },
  { code: 'KR', name: 'South Korea' },
  { code: 'IN', name: 'India' },
  { code: 'AU', name: 'Australia' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'RU', name: 'Russia' },
  { code: 'SA', name: 'Saudi Arabia' },
]
</script>

<template>
  <div>
    <label
      for="country-select"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Select a country
    </label>
    <select
      v-bind="$attrs"
      v-model="country"
      id="country-select"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option disabled value="">Choose a country</option>
      <option
        v-for="opt in countries"
        :key="opt.code"
        :value="opt.code"
      >
        {{ opt.name }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
