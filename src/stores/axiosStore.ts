import { defineStore } from 'pinia'
import axios, { type AxiosInstance } from 'axios'
import type { IAutorInterface } from '@/interfaces/autorInterface/IAutorInterface.ts'
import { ref } from 'vue'
import type { IArtworkInterface } from '@/interfaces/artworkInterface/IArtworkInterface.ts'

export const useAxiosStore = defineStore('axiosStore', () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: { 'content-type': 'application/json' },
    timeout: 0,
  })

  const autorData = ref<IAutorInterface | null>(null)
  const artworkData = ref<IArtworkInterface | null>(null)

  function setAutorData(autor: IAutorInterface) {
    autorData.value = autor
  }

  function setArtworkData(artwork: IArtworkInterface) {
    artworkData.value = artwork
  }

  const http = ref<AxiosInstance>(axiosInstance)

  return {
    autorData,
    artworkData,
    http,
    setAutorData,
    setArtworkData,
  }
})
