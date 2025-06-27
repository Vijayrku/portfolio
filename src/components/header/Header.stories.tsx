import type { Meta, StoryObj } from '@storybook/react-vite';

import Header from './Header';

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoText: 'My Logo',
    logoUrl: '/',
    items: [
      { label: 'Home', href: '/', active: true },
      { label: 'About', href: '/about', active: false },
      { label: 'Contact', href: '/contact', active: false },
      { label: 'Blog', href: '/blog', active: false },
    ],
    logoImage: '',
  }
};