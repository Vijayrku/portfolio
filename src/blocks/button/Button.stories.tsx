import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './Button.tsx';

const meta = {
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primary: false,
    label: "Buttons",
    size: "small",
  }
};