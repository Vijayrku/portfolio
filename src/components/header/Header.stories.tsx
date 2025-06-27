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
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about', },
      { label: 'Contact', href: '/contact', },
      { label: 'Blog', href: '/blog' },
    ],
    logoImage: '',
  }
};