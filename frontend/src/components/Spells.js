// tbd

export default function Spells({ spell }) {
  return (
    <div className="spells">
      <h2>{spell.name}</h2>
      <p id="Save-DC">Save DC: {spell.saveDC}</p>
      <p id="attack-bouns">Attack Bonus: {spell.attackBonus}</p>
      <p id="caprips">Cantrips: {spell.cantrips}</p>
      <p id="1st-lvl">1st Level Spells: {spell.level1Spells}</p>
      <p id="2nd-lvl">2nd Level Spells: {spell.level2Spells}</p>
      <p id="3rd-lvl">3rd Level Spells: {spell.level3Spells}</p>
      <p id="4th-lvl">4th Level Spells: {spell.level4Spells}</p>
      <p id="5th-lvl">5th Level Spells: {spell.level5Spells}</p>
      <p id="6th-lvl">6th Level Spells: {spell.level6Spells}</p>
      <p id="7th-lvl">7th Level Spells: {spell.level7Spells}</p>
      <p id="8th-lvl">8th Level Spells: {spell.level8Spells}</p>
      <p id="9th-lvl">9th Level Spells: {spell.level9Spells}</p>
    </div>
  );
}
