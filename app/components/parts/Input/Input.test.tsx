import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './Input.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

test('render Input with default args', () => {
  render(<Default />);
});
