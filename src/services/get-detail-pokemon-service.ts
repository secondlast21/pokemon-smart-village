import api from '@/services/api'
import { PokemonDetailsTypes } from '@/types/PokemonDetailTypes'

export const getDetailPokemon = async (name: string): Promise<PokemonDetailsTypes> => await api.get(`/pokemon/${name}`)
