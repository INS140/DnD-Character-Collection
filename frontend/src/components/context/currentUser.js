import { createContext, useState, useEffect } from "react";
import useFetch from "../custom-hooks/useFetch";

export const CurrentUser = createContext()

export default function CurrentUserProvider({ children }) {
  const { get } = useFetch('http://localhost:5000')

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const user = await get('/authentication/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        setCurrentUser(user)
      } catch (err) {
        return
      }
    })()
  }, [])

  return <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
    {children}
  </CurrentUser.Provider>
}