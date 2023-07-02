import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './TopPage.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

test('render TopPage with default args', () => {
  render(<Default />);
});
