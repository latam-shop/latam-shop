import '@testing-library/jest-dom'
import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { Button } from '@/components/atoms/button'

describe('Button', () => {
  it('should be text with title named diego', () => {
    render(<Button title='diego' />)

    const title = screen.getByText('diego')

    expect(title).toBeInTheDocument()
  })

  it("should render with both custom className and variant class", () => {
    render(
      <Button
        title="DiegoHoyosCo"
        className="my-custom-button"
        variant="primary"
      />
    );

    const buttonElement = screen.getByRole("button", { name: /DiegoHoyosCol/i });

    expect(buttonElement).toHaveClass("my-custom-button", "primary");
  });


  it("should be disabled when the disabled prop is true", () => {
    render(<Button title="Disabled" disabled={true} />);

    const buttonElement = screen.getByRole("button", { name: /disabled/i });

    expect(buttonElement).toBeDisabled();
  });

})