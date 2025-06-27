import type { Meta, StoryObj } from '@storybook/react-vite';

import Navbar from './Navbar';

const meta = {
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', active: true },
      { label: 'About', href: '/about', active: false },
      { label: 'Contact', href: '/contact', active: false },
      { label: 'Blog', href: '/blog', active: false },
    ],
  }
};