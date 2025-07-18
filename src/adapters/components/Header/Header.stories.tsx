import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';
import '../../../styles/components/_header.scss';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: 'Viceroy',
  },
};
