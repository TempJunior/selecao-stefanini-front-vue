import type { IArtworkInterface } from '@/interfaces/artworkInterface/IArtworkInterface.ts'

export interface IAutorInterface {
  name: string,
  gender: string,
  email: string,
  dateOfBirth: string,
  country: string,
  cpf: string,
  artwork: IArtworkInterface,
}
