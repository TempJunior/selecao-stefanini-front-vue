import type { IArtworkInterface } from '@/interfaces/artworkInterface/IArtworkInterface.ts'

export interface IAutorInterface {
  id: number,
  name: string,
  gender: string,
  email: string,
  dateOfBirth: string,
  country: string,
  cpf: string,
  artwork: IArtworkInterface,
}
