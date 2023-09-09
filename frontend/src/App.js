import { Outlet, useNavigation } from 'react-router-dom'
import CurrentUserProvider from './context/currentUser'
import { ScrollToTop } from './helper-functions'
import Navbar from './components/Navbar'
import { useEffect } from 'react'

export default function App() {
  const navigation = useNavigation()

  useEffect(()=>{console.log(navigation)}, [navigation])

  return <CurrentUserProvider>
    <ScrollToTop />
    <div className={
      navigation.state === "loading" ? "loading" : ''
    } >
      <div className="app text-light" >
        <Navbar /> 
        <Outlet />
      </div>
    </div>
  </CurrentUserProvider>
}