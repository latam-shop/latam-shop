import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from '@storybook/test';
import { Button } from "@/components/atoms/button/button";
import classes from './button.module.css'

const meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        onClick: fn()
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'default'],
        },
        disabled: {
            control: 'boolean'
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Primary Button',
        variant: 'primary',
        className: classes.primary,
    },
};

export const Secondary: Story = {
    args: {
        title: 'Secondary Button',
        variant: 'secondary',
        className: classes.secondary
    },
};

export const Default: Story = {
    args: {
        title: 'Default Button',
        variant: 'default',
        className: classes.default
    },
};

export const Disabled: Story = {
    args: {
        title: 'Disabled Button',
        disabled: true,
        className: classes.disabled
    },
};