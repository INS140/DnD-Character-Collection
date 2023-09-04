import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import App from './App'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import CharacterGrid from './components/CharacterGrid'
import CreateCharacter from './forms/CreateCharacter'
import CharacterView from './components/CharacterView'
import Overview from './components/Overview'
import Stats from './components/Stats'
import Combat from './components/Combat'
import Inventory from './components/Inventory'
import SpellsPage from './components/SpellsPage'
import Notes from './components/NotesGallery'
import './sass/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "sign-up",
        element: <SignUpPage />
      },
      {
        path: "create-character",
        element: <CreateCharacter />
      },
      {
        path: "characters",
        element: <CharacterGrid />
      },
      {
        path: "characters/:id/",
        element: <CharacterView />,
        loader: ()=>null,
        children: [
          {
            path: "",
            element: <Overview />
          },
          {
            path: "stats",
            element: <Stats />
          },
          {
            path: "combat",
            element: <Combat />
          },
          {
            path: "inventory",
            element: <Inventory />
          },
          {
            path: "spells",
            element: <SpellsPage />
          },
          {
            path: "notes",
            element: <Notes />
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();