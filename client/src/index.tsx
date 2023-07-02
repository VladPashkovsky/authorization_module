import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
// import { setupStore } from './app/store'
import { PersistGate } from 'redux-persist/integration/react'
import store, {persistor} from './app/store'

const container = document.getElementById('root')!;
const root = createRoot(container);

//const store = setupStore()

root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
);


