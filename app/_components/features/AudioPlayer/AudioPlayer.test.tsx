import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './AudioPlayer.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

test('render AudioPlayer with default args', () => {
  render(<Default />);
});
