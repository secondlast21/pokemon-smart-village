/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PokemonList from '@/modules/PokemonList'
import { mockDetailResponse } from '@/const/mockResponse'

const fetchMock = require('fetch-mock-jest')
const queryClient = new QueryClient()

describe('PokemonList component', () => {
    beforeAll(() => {
        fetchMock.mock('/pokemon?offset=15&limit=15', mockDetailResponse)
    })

    afterEach(() => {
        fetchMock.reset()
    })

    it('displays "Loading" when fetching data', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <PokemonList />
            </QueryClientProvider>
        )
        expect(screen.getByText('Loading')).toBeInTheDocument()
    })

    it('displays Pokémon cards when data is fetched', async () => {
        const { container } = render(
            <QueryClientProvider client={queryClient}>
                <PokemonList />
            </QueryClientProvider>
        )

        await waitFor(() => {
            expect(container.querySelectorAll('.card').length).toBeGreaterThan(0)
        })
    })
})
