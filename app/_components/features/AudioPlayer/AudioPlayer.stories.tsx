import type { Meta, StoryObj } from '@storybook/react';
import { AudioPlayer } from './AudioPlayer';

const meta = {
  title: 'AudioPlayer',
  component: AudioPlayer,
} satisfies Meta<typeof AudioPlayer>;

export default meta;
type T = typeof AudioPlayer;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    music:
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
};
