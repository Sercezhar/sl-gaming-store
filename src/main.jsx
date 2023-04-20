import i18next from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './components/App';
import './i18n';
import './index.css';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
