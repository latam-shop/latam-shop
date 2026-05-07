import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Icon from './icon'

describe('Icon', () => {
    it('should display the icon component', () => {
        render(<Icon name="rating" />)

        const iconElement = screen.getByTestId('rating');

        expect(iconElement).toBeInTheDocument();
        expect(iconElement).toHaveClass('text-gray-900');
    });

    it('should return null if the icon name does not exist', () => {
        // @ts-ignore: testing invalid name
        const { container } = render(<Icon name="non-existent" />);
        
        expect(container.firstChild).toBeNull();
    });
});