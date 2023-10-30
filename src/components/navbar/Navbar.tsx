import React, { FC } from 'react'

const Navbar: FC = () => {
  return (
    <div className='navbar bg-base-100'>
      <a className='btn btn-ghost normal-case text-3xl bg-gradient-to-r from-[#ed8796] to-[#eed49f] text-transparent bg-clip-text' href='/'>
        Pokedex
      </a>
    </div>
  )
}

export default Navbar
