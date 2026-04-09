import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "@storybook/test";
import { TextInput } from "@/components/atoms/TextInput/TextInput";
import classes from "./textinput.module.css";

const meta = {
  title: "Atoms/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "First Name",
    placeholder: "Anthony",
    className: classes.default,
  },
};

export const Email: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "correo@email.com",
    className: classes.default,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "********",
    className: classes.default,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "No disponible",
    disabled: true,
    className: classes.disabled,
  },
};

export const WithValue: Story = {
  args: {
    label: "City",
    value: "Pasto",
    className: classes.default,
  },
};
