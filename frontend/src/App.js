import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/forms/Login'
import Signup from './components/forms/Signup'
import CharacterGrid from './components/CharacterGrid'
import CreateCharacter from './components/forms/CreateCharacter'
import CharacterView from './components/CharacterView'
import Overview from './components/Overview'
import Stats from './components/Stats'
import Combat from './components/Combat'
import Inventory from './components/Inventory'
import Spells from './components/Spells'
import Notes from './components/Notes'

// add router and needed components

import CharacterGrid from "./components/CharacterGrid";

export default function App() {
  return <div className='app'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/characters" element={<CharacterGrid />} />
      <Route path="/create-character" element={<CreateCharacter />} />
      <Route path="/characters/:id/" element={<CharacterView />} >
        <Route path="" element={<Overview />} />
        <Route path="stats" element={<Stats />} />
        <Route path="combat" element={<Combat />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="spells" element={<Spells />} />
        <Route path="notes" element={<Notes />} />
      </Route>
    </Routes>
  </div>
}