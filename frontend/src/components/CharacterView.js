// individual character page
// will have a react-router outlet for displaying the different character pages (ie overview, stats, inventory, etc)
// fetch individual character data

import { Outlet } from "react-router-dom";

export default function CharacterView() {
  return <div>
    PLACEHOLDER CharacterView
    <Outlet />
  </div>
}