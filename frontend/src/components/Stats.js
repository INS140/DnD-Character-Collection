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
    <hr/>
    <h3>Health Points: {character.hp}</h3>
    <h3>Armor Class: {character.ac}</h3>
    <h3>Max Health Points: {character.maxHp}</h3>
    <h3>Hit Dice: {character.hitDice}</h3>
    <h1>Ability Scores</h1>
    <hr/>
    <h3>Speed: {character.speed}</h3>
    <h3>Initiative: {character.init}</h3>
    <h3>Proficiency: {character.prof}</h3>
    <h3>Strength: {character.str}</h3>
    <h3>Dexterity: {character.dex}</h3>
    <h3>Constitution: {character.con}</h3>
    <h3>Intelligence: {character.int}</h3>
    <h3>Wisdom: {character.wis}</h3>
    <h3>Charisma: {character.cha}</h3>
    <hr/>
  </div>
}