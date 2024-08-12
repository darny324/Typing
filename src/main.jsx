import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home.jsx'
import TypingParagraphs, {loadParaId as typingLoader} from './Component/TypingParagraphs.jsx'
import Paragraphs from './Component/Paragraphs.jsx'
import MainErrorPage from './MainErrorPage.jsx'
import TypingTypes from './Component/TypingTypes.jsx'
import Setting from './Component/Setting.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App/>, 
    errorElement: <MainErrorPage/>, 
    children: [
      {
        index: true, 
        element: <Home/>
      }, 
      {
        path: '/typing/:paraId', 
        element: <TypingParagraphs />, 
        loader: typingLoader, 
      }, 
      {
        path: '/paragraphs', 
        element: <Paragraphs />, 
      }, 
      {
        path: '/types', 
        element: <TypingTypes />
      }, 
      {
        path: '/settings', 
        element: <Setting />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
