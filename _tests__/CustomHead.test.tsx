/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react'
import CustomHead from "@/layouts/CustomHead";

describe('CustomHead', () => {
    it('renders with title and description', () => {
        const title = 'Test Page';
        const description = 'This is a test page';
        const { getByText, getByTestId, getByRole } = render(
            <CustomHead title={title} description={description}>
                <div data-testid="child-element">Child Element</div>
            </CustomHead>
        );

        const childElement = getByTestId('child-element');
        expect(childElement).toBeInTheDocument();
    });

    it('renders without description', () => {
        const title = 'Test Page';
        const { getByText, getByRole, queryByRole } = render(
            <CustomHead title={title}>
                <div>Child Element</div>
            </CustomHead>
        );
    });
});
