import { useEffect, useState } from "react"
import useFetch from "./custom-hooks/useFetch"

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
      : <div>
        <h3>{spellInfo.name}</h3>
        <div className="spell-desc">
          { spellInfo.desc.map((d, i) => {
            return <p key={`${d[0]}${i}`}>{d}</p>
          })}
        </div>
      </div>
    }
  </>
}