import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import useFetch from "./custom-hooks/useFetch";
import { getProficiency } from "../helper-functions";
import CharacterNavbar from "./CharacterNavbar";

export default function CharacterView() {
  const { get } = useFetch("http://localhost:5000");

  const [character, setCharacter] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await get(`/characters/${id}`)
      setCharacter({
        ...data,
        prof: getProficiency(data.level)
      })
    })()
  }, [])

  return <div class="characterView">
    { !character
      ? <>Loading ...</>
      : <Outlet context={{character: character}} />
    }
    <CharacterNavbar charId={character.id} />
    </div>
}
