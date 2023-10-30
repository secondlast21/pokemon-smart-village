import React, { FC, useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getDetailPokemon } from '@/services/get-detail-pokemon-service'
import { Ability, Move, PokemonDetailsTypes, Stat, Type } from '@/types/PokemonDetailTypes'
import { getPokemon } from '@/services/get-all-pokemon-service'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { capitalizeFirstLetter, generateTypes, typeColors } from '@/utils/utils'
import pokemonLogo from '../../../public/pokeball.svg'

interface ModalTypes {
  name: string
  url: string
}

const Modal: FC<ModalTypes> = ({ name, url }) => {
  const [detailPokemon, setDetailPokemon] = useState<PokemonDetailsTypes>()
  const { data, isFetched, isFetching } = useQuery({
    queryKey: ['getPokemon', name],
    queryFn: () => getDetailPokemon(name),
  })

  useEffect(() => {
    console.log(data)
    console.log(name)
    console.log(url)
    setDetailPokemon(data)
  }, [data, name])

  return (
    <dialog
      id='detail_modal'
      className='modal'
    >
      {isFetched && detailPokemon ? (
        <div className='modal-box border-4 rounded-xl border-white'>
          <div className='flex items-center flex-wrap gap-2'>
            <figure className='flex items-center'>
              <img
                src={detailPokemon?.sprites?.front_default ? url : pokemonLogo.src}
                alt={name}
                className={`w-32 h-32 mask mask-squircle ${typeColors[detailPokemon?.types?.[0].type.name]} p-2`}
              />
            </figure>
            <div>
              <h3 className='mb-4 sm:w-[320px] max-w-[320px] p-2 bg-[#1e1e2e] rounded-lg text-center'>
                {capitalizeFirstLetter(name)}
              </h3>
              <Tabs>
                <TabList className='tabs mb-2'>
                  <Tab className='tab'>About</Tab>
                  <Tab className='tab'>Base stats</Tab>
                  <Tab className='tab'>Moves</Tab>
                </TabList>

                <TabPanel className='max-h-[128px] overflow-y-auto'>
                  <table className='table-fixed border-collapse'>
                    <tbody>
                      <tr>
                        <td className='px-2 py-1'>Type</td>
                        <td className='px-2 py-1 text-accent'>
                          <div className='flex items-center gap-2'>
                            {detailPokemon &&
                              detailPokemon?.types?.map((type: Type, typeIdx: number) => (
                                <div
                                  className='badge badge-base-100 border border-primary flex items-center gap-1 text-sm'
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
                        </td>
                      </tr>
                      <tr>
                        <td className='px-2 py-1'>Height</td>
                        <td className='px-2 py-1 text-accent'>{detailPokemon?.height}</td>
                      </tr>
                      <tr>
                        <td className='px-2 py-1'>Weight</td>
                        <td className='px-2 py-1 text-accent'>{detailPokemon?.weight}</td>
                      </tr>
                      <tr>
                        <td className='px-2 py-1'>Ability</td>
                        <td className='px-2 py-1 text-accent max-w-[239px]'>
                          <div className='flex items-center gap-2'>
                            {detailPokemon &&
                              detailPokemon?.abilities?.map((ability: Ability, abilityIdx: number) => (
                                <p
                                  key={abilityIdx}
                                  className='text-sm'
                                >
                                  {capitalizeFirstLetter(ability.ability.name)}
                                  {abilityIdx !== detailPokemon.abilities.length - 1 && ','}
                                </p>
                              ))}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel className='max-h-[128px] overflow-y-auto'>
                  {detailPokemon &&
                    detailPokemon?.stats?.map((stat: Stat, statIdx: number) => (
                      <tr key={statIdx}>
                        <td className='px-2 py-1'>{capitalizeFirstLetter(stat.stat.name)}</td>
                        <td
                          className={
                            stat.base_stat <= 100
                              ? 'px-2 py-1 text-accent flex items-center gap-2'
                              : 'px-2 py-1 text-error flex items-center gap-2'
                          }
                        >
                          {stat.base_stat}
                        </td>
                        <td>
                          <progress
                            className={
                              stat.base_stat <= 100 ? 'progress w-20 progress-accent' : 'progress w-20 progress-error'
                            }
                            value={stat.base_stat}
                            max='100'
                          ></progress>
                        </td>
                      </tr>
                    ))}
                </TabPanel>
                <TabPanel className='max-h-[128px] overflow-y-auto'>
                  {detailPokemon &&
                    detailPokemon?.moves?.map((move: Move, moveIdx: number) => (
                      <li
                        key={moveIdx}
                        className='text-sm mx-[10px]'
                      >
                        {capitalizeFirstLetter(move.move.name)}
                      </li>
                    ))}
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <div className='modal-action'>
            <form method='dialog'>
              <button className='btn text-base-100 hover:text-primary bg-[#ed8796] normal-case'>Close</button>
            </form>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center text-xl gap-4 modal-box'>
          <h3>Loading</h3>
          <br />
          <span className='loading loading-dots loading-lg'></span>
        </div>
      )}
    </dialog>
  )
}

export default Modal
