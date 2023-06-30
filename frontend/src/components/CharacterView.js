// individual character page
// will have a react-router outlet for displaying the different character pages (ie overview, stats, inventory, etc)
// fetch individual character data

import { Outlet } from "react-router-dom";
import useFetch from './custom-hooks/useFetch'

export default function CharacterView() {
  const { get } = useFetch() // need url

  return <div>
    <Outlet />
  </div>
}