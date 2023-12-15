import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import { persistStore } from 'redux-persist';
import {setupStore} from "./store/store.js"
import { PersistGate } from 'redux-persist/integration/react'

const store = setupStore();

const persistor = persistStore(store)

async function enableMocking() {
  //if (process.env.NODE_ENV !== 'development') {
    //return
  //}
 
  const { worker } = await import('./mocks/browser')
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  )
})