import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting"

describe('Greeting Component', () => {
    test('render hello world as a text', () => {
        // Arrange
        render(<Greeting />)

        // Act
        // nothing here

        // Assert
        const helloWorldText = screen.getByText('Hello World!');
        expect(helloWorldText).toBeInTheDocument();

    });

    test('render paragraph if the button is not clicked !', () => {
        // Arrange
        render(<Greeting />)

        // Act
        // nothing here

        // Assert
        const outputElement = screen.getByText('text is not changed', { exact: false });
        expect(outputElement).toBeInTheDocument();

    });

    test('render paragraph if the button was Clicked !', () => {

        // Arrange
        render(<Greeting />)

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.getByText('Changed!', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('dont render "text is not changed" if the button was Clicked !', () => {

        // Arrange
        render(<Greeting />)

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.queryByText('text is not changed', { exact: false });
        expect(outputElement).toBeNull();
    });
})