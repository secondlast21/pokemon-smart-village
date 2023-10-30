import React, { FC } from 'react'
import Link from 'next/link'

const Navbar: FC = () => {
  return (
    <div className='navbar bg-base-100'>
      <Link
        className='btn btn-ghost normal-case text-3xl bg-gradient-to-r from-[#ed8796] to-[#eed49f] text-transparent bg-clip-text'
        href='/'
      >
        Pokedex
      </Link>
    </div>
  )
}

export default Navbar
