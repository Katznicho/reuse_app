import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import FlashMessage from 'react-native-flash-message';
import { QueryClient, QueryClientProvider } from 'react-query'
import BaseNavigation from './src/BaseNavigation/BaseNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={new QueryClient()}>
        <BaseNavigation />
        </QueryClientProvider>
        <FlashMessage position="top" animated />
      </PersistGate>
    </Provider>
  );
}

