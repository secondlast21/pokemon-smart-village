import React, { FC, useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getDetailPokemon } from '@/services/get-detail-pokemon-service'
import { PokemonDetailsTypes } from '@/types/PokemonDetailTypes'
import { getPokemon } from '@/services/get-all-pokemon-service'
import { capitalizeFirstLetter } from '@/utils/utils'

interface ModalTypes {
  name: string
}

const Modal: FC<ModalTypes> = ({ name }) => {
  const [detailPokemon, setDetailPokemon] = useState<PokemonDetailsTypes>()
  const { data, isFetched, isFetching } = useQuery({
    queryKey: ['getPokemon', name],
    queryFn: () => getDetailPokemon(name),
  })

  useEffect(() => {
    console.log(data)
    setDetailPokemon(data)
  }, [data, name])

  return (
    <dialog
      id='detail_modal'
      className='modal'
    >
      <div className='modal-box'>
        <figure>
          <img
            src={detailPokemon?.sprites?.front_default}
            alt={name}
          />
        </figure>
        <h3 className='font-bold text-lg'>{capitalizeFirstLetter(name)}</h3>
        <p className='py-4'>{detailPokemon?.base_experience}</p>
        <div className='modal-action'>
          <form method='dialog'>
            <button className='btn'>Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default Modal
