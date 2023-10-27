import React from 'react'
import { NextPage } from 'next'
import CustomHead from '@/layouts/CustomHead'
import Navbar from '@/components/navbar/Navbar'
import PokemonList from '@/modules/PokemonList'

const Home: NextPage = () => {
  return (
    <CustomHead
      title='Pokemon List'
      description='Pokemon List'
    >
      <Navbar />
      <div className='bg-base-100'>
        <PokemonList />
      </div>
    </CustomHead>
  )
}

export default Home
