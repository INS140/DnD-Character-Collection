import { useOutletContext } from "react-router-dom"

export default function Overview() {
  const { character } = useOutletContext()

  return <>
    { !character
      ? <>Loading ...</>
      : <div className="overview">
        <p>{character.name}</p>
        <p>{character.image}</p>
        <p>{character.classType}</p>
        <p>{character.level}</p>
      </div>
    }
  </>
}