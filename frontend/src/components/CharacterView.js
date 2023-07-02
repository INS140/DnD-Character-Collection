// individual character page
// will have a react-router outlet for displaying the different character pages (ie overview, stats, inventory, etc)
// fetch individual character data
import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import useFetch from "./custom-hooks/useFetch";

export default function CharacterView() {
  const { get } = useFetch("http://localhost:5000");

  const [character, setCharacter] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await get(`/characters/${id}`);
      console.log(data);
      setCharacter(data);
    })();
  }, [get, id]);

  return (
  <div class="characterView">
    <Outlet context={{ character: character }} />
    <nav class="charNav" className="navbar fixed-bottom" style= { { display : "flex" } }>
      <NavLink to={`/characters/${id}/`}>
        Overview
      </NavLink>
      <NavLink to={`/characters/${id}/stats`}>
        Stats
      </NavLink>
      <NavLink to={`/characters/${id}/combat`}>
        Combat
      </NavLink>
      <NavLink to={`/characters/${id}/inventory`}>
        Inventory
      </NavLink>
      <NavLink to={`/characters/${id}/spells`}>
        Spells
      </NavLink>
      <NavLink to={`/characters/${id}/notes`}>
        Notes
      </NavLink>
    </nav>
  </div>
  )
}
