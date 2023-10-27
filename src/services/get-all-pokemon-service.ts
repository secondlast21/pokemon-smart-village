import api from '@/services/api'

export interface getAllPokemonTypes {
  limit: number
  offset: number
}

export interface PokemonListResponse {
  count: number
  next: string
  previous: string
  results: Result[]
}

export interface Result {
  name: string
  url: string
}

export const getPokemon = async (param: getAllPokemonTypes): Promise<PokemonListResponse> =>
  await api.get('/pokemon', {
    params: {
      ...param,
    },
  })
