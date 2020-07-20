import * as React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import Reset from './reset';
import theme from './theme';

import App from './App';
import { WindowSizeManager } from './use-window-size';

const rootElement = document.getElementById('root');

render(
  <ThemeProvider theme={theme}>
    <Reset />
    <WindowSizeManager breakpoints={[600, 768, 1440]}>
      <App />
    </WindowSizeManager>
  </ThemeProvider>,
  rootElement,
);
