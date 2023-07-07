import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import useFetch from "./custom-hooks/useFetch";
import { getProficiency, scoreToMod } from "../helper-functions";
import CharacterNavbar from "./CharacterNavbar";

export default function CharacterView() {
  const { get } = useFetch("https://dnd-character-collection-backend.vercel.app");

  const [character, setCharacter] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await get(`/characters/${id}`)
      setCharacter({
        ...data,
        prof: getProficiency(data.level),
        init: scoreToMod(data.dex)
      })
    })()
  }, [])

  return <div className="characterView">
    { !character
      ? <>Loading ...</>
      : <>
        <div className="view">
          <Outlet context={{character: character}} />
        </div>
        <CharacterNavbar charId={character.id} />
      </>
    }
  </div>
}
