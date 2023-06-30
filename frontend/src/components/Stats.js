// all character stats seperated into groups
// group 1 general stats
// group 2 base stats (ie STR, DEX, etc)
// group 3 skills

export default function Stats( { stats } ) {
  return (
  <div class="stats">
    <h3>Health Points: {stats?.healthPoints}</h3>
    <h3>Armor Class: {stats?.armorClass}</h3>
    <h3>Max Health Points: {stats?.maxHp}</h3>
    <h3>Hit Dice: {stats?.hitDice}</h3>
    <h3>Speed: {stats?.speed}</h3>
    <h3>Proficiency: {stats?.proficiency}</h3>
    <h3>Strength: {stats?.strength}</h3>
    <h3>Dexterity: {stats?.dexterity}</h3>
    <h3>Constitution: {stats?.constitution}</h3>
    <h3>Intelligence: {stats?.intelligence}</h3>
    <h3>Wisdom: {stats?.wisdom}</h3>
    <h3>Charisma: {stats?.charisma}</h3>
    <h3>Skills: {stats?.skills}</h3>
    <h3>Saving Throws: {stats?.savingThrows}</h3>
  </div>
  )
}