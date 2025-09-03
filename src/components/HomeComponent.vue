<template>
  <header class="bg-white dark:bg-gray-900">
    <div class="h-screen container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Desafio para desenvolvedor Java <span class="text-blue-500">Júnior</span>
            </h1>
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-2xl">
              Seleção Stefanini CPG - 2019
            </h3>

            <h4 class="text-1xl font-semibold text-gray-800 dark:text-white lg:text-1xl mt-12">
              Me chamo <span class="text-green-400">Júnior Oliveira</span> <br />
              um aspirante a desenvolvedor Full-Stack
            </h4>
            <p class="mt-3 text-gray-600 dark:text-gray-400">
              Conforme sigo meus estudos em Java e VueJS, encontrei esse desafio proposto pela
              Stefanini que consiste em uma ApiREST feita em Java e Spring contendo alguns endPoints
              de acesso de cadastro e buscas com filtros.
            </p>
            <br />
            <p class="mt-3 text-gray-600 dark:text-gray-400">
              Tentei aplicar o maximo de boas praticas que aprendi ao longo de 1 ano e 6 meses
              estudando Java e arquiteturas escalaveis.
            </p>

            <br />
            <p class="mt-3 text-gray-600 dark:text-gray-400">
              Busco sempre estar melhorando minhas habilidades e desenvolvendo soluções propostas e
              me testar para futuras vagas de trabalho.
            </p>
            <br />
            <p class="mt-3 text-gray-600 dark:text-gray-400">
              Deixarei o Link do meu Github e do desafio proposto.
            </p>

            <button
              class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Shop Now
            </button>
          </div>
        </div>

        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img class="w-[600px] h-auto lg:max-w-3xl" src="/premium.png" alt="Catalogue-pana.svg" />
        </div>
      </div>
      <div class="mt-44 flex justify-between w-40">
        <GitHubButtonComponent/>
        <LinkedinButtonComponent/>
      </div>

    </div>
  </header>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import GitHubButtonComponent from '@/components/buttons/GitHubButtonComponent.vue'
import LinkedinButtonComponent from '@/components/buttons/LinkedinButtonComponent.vue'

const isOpen = ref(false)
</script>
