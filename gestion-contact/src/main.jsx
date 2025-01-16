import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout'
import { BrowserRouter } from 'react-router-dom'
import './app.css'
import { Provider} from 'react-redux'
import {legacy_createStore as createStore} from "redux"
import { ContactReducers } from './pages/redux/contactReducers'

const store = createStore(ContactReducers)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Layout/>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
