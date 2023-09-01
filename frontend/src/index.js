import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home'
import LoginPage from './components/pages/LoginPage'
import SignUpPage from './components/pages/SignUpPage'
import CharacterGrid from './components/CharacterGrid'
import CreateCharacter from './components/forms/CreateCharacter'
import CharacterView from './components/CharacterView'
import Overview from './components/Overview'
import Stats from './components/Stats'
import Combat from './components/Combat'
import Inventory from './components/Inventory'
import SpellsPage from './components/SpellsPage'
import Notes from './components/NotesGallery'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>Oops! Page Not Found</>,
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