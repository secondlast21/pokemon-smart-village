import fightingIcon from '../../public/pokemonTypes/fighting.svg'
import flyingIcon from '../../public/pokemonTypes/flying.svg'
import poisonIcon from '../../public/pokemonTypes/poison.svg'
import groundIcon from '../../public/pokemonTypes/ground.svg'
import rockIcon from '../../public/pokemonTypes/rock.svg'
import bugIcon from '../../public/pokemonTypes/bug.svg'
import ghostIcon from '../../public/pokemonTypes/ghost.svg'
import steelIcon from '../../public/pokemonTypes/steel.svg'
import fireIcon from '../../public/pokemonTypes/fire.svg'
import waterIcon from '../../public/pokemonTypes/water.svg'
import grassIcon from '../../public/pokemonTypes/grass.svg'
import electricIcon from '../../public/pokemonTypes/electric.svg'
import psychicIcon from '../../public/pokemonTypes/psychic.svg'
import iceIcon from '../../public/pokemonTypes/ice.svg'
import dragonIcon from '../../public/pokemonTypes/dragon.svg'
import darkIcon from '../../public/pokemonTypes/dark.svg'
import fairyIcon from '../../public/pokemonTypes/fairy.svg'
import normalIcon from '../../public/pokemonTypes/normal.svg'

interface TypeIconMap {
  [type: string]: string
}

const typeIcons: TypeIconMap = {
  normal: normalIcon.src,
  fighting: fightingIcon.src,
  flying: flyingIcon.src,
  poison: poisonIcon.src,
  ground: groundIcon.src,
  rock: rockIcon.src,
  bug: bugIcon.src,
  ghost: ghostIcon.src,
  steel: steelIcon.src,
  fire: fireIcon.src,
  water: waterIcon.src,
  grass: grassIcon.src,
  electric: electricIcon.src,
  psychic: psychicIcon.src,
  ice: iceIcon.src,
  dragon: dragonIcon.src,
  dark: darkIcon.src,
  fairy: fairyIcon.src,
  unknown: 'Unknown',
  shadow: 'Shadow',
}

export const typeColors: Record<string, string> = {
  normal: 'bg-[#A8A77A]',
  fire: 'bg-[#EE8130]',
  water: 'bg-[#6390F0]',
  electric: 'bg-[#F7D02C]',
  grass: 'bg-[#7AC74C]',
  ice: 'bg-[#96D9D6]',
  fighting: 'bg-[#C22E28]',
  poison: 'bg-[#A33EA1]',
  ground: 'bg-[#E2BF65]',
  flying: 'bg-[#A98FF3]',
  psychic: 'bg-[#F95587]',
  bug: 'bg-[#A6B91A]',
  rock: 'bg-[#B6A136]',
  ghost: 'bg-[#735797]',
  dragon: 'bg-[#6F35FC]',
  dark: 'bg-[#705746]',
  steel: 'bg-[#B7B7CE]',
  fairy: 'bg-[#D685AD]',
}

export function capitalizeFirstLetter(str: string) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase())
}

export function extractNumber(url: string) {
  const match = url.match(/\/(\d+)\/$/)
  return match ? match[1] : null
}

export function generateTypes(input: string) {
  return typeIcons[input]
}
