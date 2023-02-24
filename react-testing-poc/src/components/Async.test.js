import { render, screen } from "@testing-library/react"
import Async from "./Async"


describe('Async Componenet', () => {
    test('render posts if test succeeds', async () => {

        // Arrange
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First Post' }],
        });

        render(<Async />)

        // Act
        // Nothing to do

        // Assert
        const listItemElements = await screen.findAllByRole('list')
        expect(listItemElements).not.toHaveLength(0);
    })
})