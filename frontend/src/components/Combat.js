// display combat stats
// weapons
// conditions (stretch goal)
import { useState } from 'react';

export default function Combat( { character } ) {

  const [weapons, addWeapon] = useState([{}]);

  return (
  <div class="combat">
    <h1>Combat Stats:</h1>
    <p>{character.ac}</p>
    <p>{character.hp}</p>
    <p>{character.maxHp}</p>
    <p>{character.speed}</p>
    <p>{character.initiative}</p>
    <p>{character.proficiency}</p>
    <div class="weapons">
    {!weapons?.length 
        ? <h3>This character currently has no weapons.</h3> 
        : weapons.map(weapon => {
          return <>Weapon</>
        })}
    </div>
  </div>
  )
}