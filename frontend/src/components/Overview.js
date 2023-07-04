import { useOutletContext } from "react-router-dom"

export default function Overview() {
  const { character } = useOutletContext()

  return <>
    {!character
      ? <>Loading ...</>
      : <div className="overview">
          <h1>Name: {character.name}</h1>
          <h1>{character.image}</h1>
          <h1>Class: {character.classType}</h1>
          <h1>Level: {character.level}</h1>
          <hr></hr>
          <h1>General</h1>
          <h3>Health Points: {character.hp}</h3>
          <h3>Armor Class: {character.ac}</h3>
          <h3>Max Health Points: {character.maxHp}</h3>
          <h3>Hit Dice: {character.hitDice}</h3>
      </div>
    }
  </>
}