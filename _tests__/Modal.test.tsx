/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Modal from '@/components/modal/Modal'
import { mockDetailResponse } from '@/const/mockResponse'

const fetchMock = require('fetch-mock-jest')
const queryClient = new QueryClient()

describe('Modal component', () => {
    beforeAll(() => {
        fetchMock.mock('/pokemon/bulbasaur', mockDetailResponse)
    })

    afterEach(() => {
        fetchMock.reset()
    })

    it('renders "Detail" when data is available', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Modal name="bulbasaur" />
            </QueryClientProvider>
        )

        await waitFor(() => {
            expect(screen.getByText('Bulbasaur')).toBeInTheDocument()
            expect(screen.getByText('7')).toBeInTheDocument()
            expect(screen.getByText('69')).toBeInTheDocument()
            expect(screen.getByText('Grass')).toBeInTheDocument()
            expect(screen.getByText('Poison')).toBeInTheDocument()
        })
    })

    it('renders "Close" button', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Modal name="bulbasaur" />
            </QueryClientProvider>
        )

        await waitFor(() => {
            const closeButton = screen.getByText('Close')
            expect(closeButton).toBeInTheDocument()

            fireEvent.click(closeButton)
        })
    })
})
