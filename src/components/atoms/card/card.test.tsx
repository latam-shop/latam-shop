import '@testing-library/jest-dom'
import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import Card from './card'

describe('Card', () => {
    it('should be children', () => {
        render(<Card><span>Diego</span></Card>)

        const title = screen.getByText('Diego')

        expect(title).toBeInTheDocument()
    })
})