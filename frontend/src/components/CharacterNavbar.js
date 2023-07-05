import { NavLink } from "react-router-dom"

export default function CharacterNavbar({ charId }) {
  const getClassName = ({ isActive }) => {
    return `nav-link text-light px-3 ${isActive ? 'primary active' : ''}`
  }

  return <nav className="charNav navbar fixed-bottom d-flex">
    <NavLink className={getClassName} to={`/characters/${charId}/`}>
      Overview
    </NavLink>
    <NavLink className={getClassName} to={`/characters/${charId}/stats`}>
      Stats
    </NavLink>
    <NavLink className={getClassName} to={`/characters/${charId}/combat`}>
      Combat
    </NavLink>
    <NavLink className={getClassName} to={`/characters/${charId}/inventory`}>
      Inventory
    </NavLink>
    <NavLink className={getClassName} to={`/characters/${charId}/spells`}>
      Spells
    </NavLink>
    <NavLink className={getClassName} to={`/characters/${charId}/notes`}>
      Notes
    </NavLink>
  </nav>
}