import { NavLink } from "react-router-dom"

export default function CharacterNavbar({ charId }) {
  return <nav className="charNav navbar fixed-bottom d-flex">
    <NavLink to={`/characters/${charId}/`}>
      Overview
    </NavLink>
    <NavLink to={`/characters/${charId}/stats`}>
      Stats
    </NavLink>
    <NavLink to={`/characters/${charId}/combat`}>
      Combat
    </NavLink>
    <NavLink to={`/characters/${charId}/inventory`}>
      Inventory
    </NavLink>
    <NavLink to={`/characters/${charId}/spells`}>
      Spells
    </NavLink>
    <NavLink to={`/characters/${charId}/notes`}>
      Notes
    </NavLink>
  </nav>
}