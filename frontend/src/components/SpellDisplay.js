import { useEffect, useState } from "react"
import useFetch from "../custom-hooks/useFetch"
import Spell from "./Spell"

export default function SpellDisplay({ spell }) {
  const { get } = useFetch('https://www.dnd5eapi.co/api')

  const [spellInfo, setSpellInfo] = useState(null)

  useEffect(() => {
    (async () => {
      const data = await get(`/spells/${spell}`)
      setSpellInfo(data)
    })()
  }, [spell])

  return <>
    { !spellInfo
      ? <>Loading ...</>
      : <div className="addSpellDisplay">
        <Spell spell={spellInfo} />
      </div>
    }
  </>
}