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
      
      if (!data) return // prevents bug when deleting character
      
      setCharacter({
        ...data,
        prof: getProficiency(data.level),
        init: scoreToMod(data.dex)
      })
    })()
  }, [id, get])

  return <div className="characterView">
    { !character
      ? <>Loading ...</>
      : <>
        <div className="view">
          <Outlet context={{character, setCharacter}} />
        </div>
        <CharacterNavbar charId={character.id} />
      </>
    }
  </div>
}
