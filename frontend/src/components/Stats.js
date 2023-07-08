// all character stats seperated into groups
// group 1 general stats
// group 2 base stats (ie STR, DEX, etc)
// group 3 skills
import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"

export default function Stats() {
  const { character } = useOutletContext()

  useEffect(() => {console.log(character)}, [])

  return <div className="stats">
    <h1>General</h1>
    <div className="genStats">
      <h3 className="secondary">Health Points<span>{character.hp}</span></h3>
      <h3 className="secondary">Armor Class<span>{character.ac}</span></h3>
      <h3 className="secondary">Max HP<span>{character.maxHp}</span></h3>
      <h3 className="secondary">Hit Dice<span>{character.hitDice}</span></h3>
    </div>
  <hr />
    <h1>Ability Scores</h1>
    <div className="baseStats">
      <h3 className="secondary">Speed<span>{character.speed}</span></h3>
      <h3 className="secondary">Initiative<span>{character.init}</span></h3>
      <h3 className="secondary">Proficiency<span>{character.prof}</span></h3>
      <h3 className="secondary">Strength<span>{character.str}</span></h3>
      <h3 className="secondary">Dexterity<span>{character.dex}</span></h3>
      <h3 className="secondary">Constitution<span>{character.con}</span></h3>
      <h3 className="secondary">Intelligence<span>{character.int}</span></h3>
      <h3 className="secondary">Wisdom<span>{character.wis}</span></h3>
      <h3 className="secondary">Charisma<span>{character.cha}</span></h3>
    </div>
  </div>
}