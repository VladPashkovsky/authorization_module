import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { setupStore } from './app/store'

const container = document.getElementById('root')!;
const root = createRoot(container);

const store = setupStore()

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


