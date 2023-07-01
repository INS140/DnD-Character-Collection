// individual character page
// will have a react-router outlet for displaying the different character pages (ie overview, stats, inventory, etc)
// fetch individual character data
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import useFetch from './custom-hooks/useFetch'

export default function CharacterView() {
  const { get } = useFetch('http://localhost:5000')

  const [character, setCharacter] = useState(null)

  const { id } = useParams()
  
  useEffect(() => {
    (async () => {
      const data = await get(`/characters/${id}`)
      console.log(data)
      setCharacter(data)
    })()
  }, [])

  return <div>
    <Outlet context={{character: character}} />
  </div>
}