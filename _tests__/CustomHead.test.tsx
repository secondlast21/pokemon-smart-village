/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import CustomHead from '@/layouts/CustomHead'

describe('CustomHead', () => {
    it('renders child', () => {
        const title = 'Test Page'
        const description = 'This is a test page'
        const { getByTestId } = render(
            <CustomHead title={title} description={description}>
                <div data-testid='child-element'>Bulbasaur</div>
            </CustomHead>
        );

        expect(getByTestId('child-element')).toBeInTheDocument()
        expect(screen.getByText('Bulbasaur')).toBeInTheDocument()
    });

    it('renders child without description', () => {
        const title = 'Test Page'
        const { getByText, getByRole, queryByRole } = render(
            <CustomHead title={title}>
                <div data-testid='child-element'>Without description</div>
            </CustomHead>
        );

        expect(getByText('Without description')).toBeInTheDocument()
    });
});
