import React from 'react';
import { createRoot } from 'react-dom/client';

// Self-hosted fonts (bundled from node_modules, served from our own origin).
// `wght.css` = the weight axis only; unicode-range fetches just the Latin subset.
// font-display: swap is set by these stylesheets.
import '@fontsource-variable/fraunces/wght.css';
import '@fontsource-variable/inter/wght.css';

import './styles/tokens.css';
import './styles/global.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
