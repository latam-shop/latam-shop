import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Card from './card';

const meta = {
    title: 'Atoms/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

    argTypes: {

    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: (
            <div>
                <h3>Título de la Card</h3>
                <p>Este es un componente atomizado hecho en Cali para el mundo.</p>
            </div>
        ),
        classContainer: 'bg-red-500/80 text-white border-none shadow-2xl w-full h-full',
    },
};

export const Secondary: Story = {
    args: {
        children: (
            <div>
                <h3>Para todos los del stream</h3>
                <p>Este es un componente card
                    hecho en Cali para el mundo.
                </p>
            </div>
        ),
        classContainer: 'bg-green-500 text-white border-none shadow-2xl ',
        size: 'md'
    },
};

export const CardSizeXl: Story = {
    args: {
        children: (
            <div>
                <h3>Para todos los del stream</h3>
                <p>Este es un componente card
                    hecho en Cali para el mundo.
                </p>
            </div>
        ),
        classContainer: 'bg-green-500 text-white border-none shadow-2xl w-xs h-xs',
        size: 'xl'
    },
};


export const CardWithCoffee: Story = {
    args: {
        children: (
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhp0SVVLmVabbGdCvNbJ2abDvaZdI93FvRMA&s" alt="" />
        ),
        size: 'sm'
    },
};