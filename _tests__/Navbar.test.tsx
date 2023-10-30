/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Navbar from "@/components/navbar/Navbar"

describe('Navbar renders correctly', () => {
    it('should render the "Pokedex" link', () => {
        const { getByText } = render(<Navbar />)
        const pokedexLink = getByText('Pokedex')

        expect(pokedexLink).toBeInTheDocument()
        expect(pokedexLink).toHaveAttribute('href', '/')
    })
})
