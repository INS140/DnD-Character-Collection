import { Routes, Route } from 'react-router-dom'
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
import Navbar from './components/Navbar'

export default function App() {
  return <div className='app text-light'>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/characters" element={<CharacterGrid />} />
      <Route path="/create-character" element={<CreateCharacter />} />
      <Route path="/characters/:id/" element={<CharacterView />} >
        <Route path="" element={<Overview />} />
        <Route path="stats" element={<Stats />} />
        <Route path="combat" element={<Combat />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="spells" element={<SpellsPage />} />
        <Route path="notes" element={<Notes />} />
      </Route>
    </Routes>
  </div>
}