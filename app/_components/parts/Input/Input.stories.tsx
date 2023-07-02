import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type T = typeof Input;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {},
};
