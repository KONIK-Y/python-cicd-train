import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
