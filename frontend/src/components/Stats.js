// all character stats seperated into groups
// group 1 general stats
// group 2 base stats (ie STR, DEX, etc)
// group 3 skills

export default function Stats( { stats } ) {
  return (
  <div class="stats">
    <h3>{stats.healthPoints}</h3>
    <h3>{stats.armorClass}</h3>
    <h3>{stats.maxHp}</h3>
    <h3>{stats.hitDice}</h3>
    <h3>{stats.speed}</h3>
    <h3>{stats.proficiency}</h3>
    <h3>{stats.strength}</h3>
    <h3>{stats.dexterity}</h3>
    <h3>{stats.constitution}</h3>
    <h3>{stats.intelligence}</h3>
    <h3>{stats.wisdom}</h3>
    <h3>{stats.charisma}</h3>
    <h3>{stats.skills}</h3>
    <h3>{stats.savingThrows}</h3>
  </div>
  )
}