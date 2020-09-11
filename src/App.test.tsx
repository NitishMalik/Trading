import React from 'react';
import {render} from '@testing-library/react';

import App from './App';

test('generate snapshot for APP', () => {
  const {container} = render(<App />);
  expect(container).toMatchSnapshot();
});
