import { Outlet } from 'react-router-dom'
import CurrentUserProvider from './components/context/currentUser'
import { ScrollToTop } from './helper-functions'
import Navbar from './components/Navbar'

export default function App() {
  return <CurrentUserProvider>
    <ScrollToTop />
    <div className='app text-light'>
      <Navbar /> 
      <Outlet />
    </div>
  </CurrentUserProvider>
}