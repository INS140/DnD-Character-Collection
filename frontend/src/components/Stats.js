// all character stats seperated into groups
// group 1 general stats
// group 2 base stats (ie STR, DEX, etc)
// group 3 skills
import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"

export default function Stats() {
  const { character } = useOutletContext()

  useEffect(() => {console.log(character)}, [])

  return <>
  { !character
    ? <>Loading ...</>
    : <div class="stats">
      <h1>General</h1>
      <hr/>
      <h3>Health Points: {character.hp}</h3>
      <h3>Armor Class: {character.ac}</h3>
      <h3>Max Health Points: {character.maxHp}</h3>
      <h3>Hit Dice: {character.hitDice}</h3>
      <h1>Base Stats</h1>
      <hr/>
      <h3>Speed: {character.speed}</h3>
      {/* <h3>Proficiency: {character.proficiency}</h3> */}
      <h3>Strength: {character.str}</h3>
      <h3>Dexterity: {character.dex}</h3>
      <h3>Constitution: {character.con}</h3>
      <h3>Intelligence: {character.int}</h3>
      <h3>Wisdom: {character.wis}</h3>
      <h3>Charisma: {character.cha}</h3>
      {/* <h1>Saving Throws: {character.savingThrows}</h1>
      <hr/>
      <h1>Skills: {character.skills}</h1> */}
      <hr/>
    </div>
  }
</>
}