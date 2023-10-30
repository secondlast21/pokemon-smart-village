import React, { FC, useCallback, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPokemon, PokemonListResponse } from '@/services/get-all-pokemon-service'
import { capitalizeFirstLetter, extractNumber, generateTypes, typeColors } from '@/utils/utils'
import { PokemonDetailsTypes, Type } from '@/types/PokemonDetailTypes'
import Pagination from '@/components/pagination/Pagination'
import Modal from '@/components/modal/Modal'

const PokemonList: FC = () => {
  const [limit, setLimit] = useState<number>(15)
  const [offset, setOffset] = useState<number>(0)
  const [listPokemon, setListPokemon] = useState<PokemonListResponse>()
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsTypes[]>([])
  const [activePage, setActivePage] = useState<number>(0)
  const [selectedName, setSelectedName] = useState<string>('')
  const [selectedUrl, setSelectedUrl] = useState<string>('')

  const { data, isFetched, isFetching } = useQuery({
    queryKey: ['getPokemon', offset],
    queryFn: () =>
      getPokemon({
        limit,
        offset,
      }),
  })

  const handlePageChange = (selectedItem: { selected: number }) => {
    const newOffset = selectedItem.selected * limit
    setOffset(newOffset)
    setActivePage(selectedItem.selected)
  }

  const handleDetailClick = (name: string, url: string) => {
    setSelectedName(name)
    setSelectedUrl(url)
    const modal = document.getElementById('detail_modal') as HTMLDialogElement | null
    if (modal) {
      modal.showModal()
    }
  }

  const getTypeColor = useCallback((input: string) => {
    return typeColors[input] || 'bg-base-100'
  }, [])

  useEffect(() => {
    if (isFetched) {
      setListPokemon(data)
    }
  }, [isFetched, data])

  useEffect(() => {
    if (listPokemon?.results) {
      const fetchPokemonDetails = async () => {
        const detailsPromises = listPokemon.results.map(async ({ name }) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
          if (response.ok) {
            return await response.json()
          }
          return null
        })

        const details = await Promise.all(detailsPromises)
        setPokemonDetails(details)
      }

      fetchPokemonDetails()
    }
  }, [listPokemon])

  return (
    <>
      {isFetching ? (
        <div className='flex items-center justify-center h-[100vh] text-3xl gap-4'>
          <h3>Loading</h3>
          <br />
          <span className='loading loading-dots loading-lg'></span>
        </div>
      ) : (
        <>
          <div className='p-5 flex flex-wrap items-start bg-base-100 justify-center gap-6'>
            {listPokemon?.results.map(({ name, url }, idx) => {
              const pokemonDetail = pokemonDetails[idx]

              const backgroundColorClass = pokemonDetail?.types.length
                ? getTypeColor(pokemonDetail.types[0].type.name)
                : 'bg-base-100'

              return (
                <div
                  className={`card card-compact border-4 rounded-xl border-white w-72 shadow-xl ${backgroundColorClass}`}
                  key={idx}
                >
                  <figure>
                    {pokemonDetail?.sprites.front_default ? (
                      <img
                        className='w-56 h-56'
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractNumber(
                          url
                        )}.png`}
                        alt=''
                      />
                    ) : (
                      <p className='w-56 h-56 flex items-center justify-center text-2xl text-primary'>No Image</p>
                    )}
                  </figure>
                  <div className='card-body rounded-t-2xl rounded-b-lg text-primary bg-base-100'>
                    {name.length < 24 ? (
                      <h2 className='card-title text-lg'>{capitalizeFirstLetter(name)}</h2>
                    ) : (
                      <h2 className='card-title text-sm'>{capitalizeFirstLetter(name)}</h2>
                    )}
                    <br />
                    <div className='card-actions justify-end mb-2'>
                      {pokemonDetail &&
                        pokemonDetail.types.map((type: Type, typeIdx: number) => (
                          <div
                            className='badge badge-base-100 border border-primary flex items-center gap-1'
                            key={typeIdx}
                          >
                            {type.type.name !== 'unknown' && type.type.name !== 'shadow' ? (
                              <>
                                <img
                                  src={generateTypes(type.type.name)}
                                  alt=''
                                  className='w-3 h-3'
                                />
                                {capitalizeFirstLetter(type.type.name)}
                              </>
                            ) : (
                              <>{capitalizeFirstLetter(type.type.name)}</>
                            )}
                          </div>
                        ))}
                    </div>
                    <div className='card-actions justify-end'>
                      <button
                        className='btn btn-sm text-base-100 hover:text-primary bg-[#ed8796] normal-case'
                        onClick={() => handleDetailClick(name, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractNumber(
                            url
                        )}.png`)}
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/*Current Page*/}
          <div className='flex items-center justify-center'>
            <p className='text-2xl bg-[#1e1e2e] p-4 rounded-lg'>{activePage + 1}</p>
          </div>

          {/*Pagination*/}
          {listPokemon && (
            <div className='pb-5 bg-base-100'>
              <Pagination
                pageCount={Math.ceil(listPokemon.count / limit)}
                onPageChange={handlePageChange}
                activePage={activePage}
              />
            </div>
          )}

          {/*Detail Modal*/}
          <Modal name={selectedName} url={selectedUrl} />
        </>
      )}
    </>
  )
}

export default PokemonList
