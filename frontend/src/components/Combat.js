// display combat stats
// weapons
// conditions (stretch goal)
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import useFetch from "./custom-hooks/useFetch";
import Weapon from './Weapon';

export default function Combat() {

  const { character } = useOutletContext()

  useEffect(() => { console.log(character) }, [])

  const [weapons, addWeapon] = useState([{}]);

  const { get } = useFetch("https://www.dnd5eapi.co/api");

  useEffect(() => {
    (async () => {
      for (const item of character.inventory) {
        const data = await get(`/equipment/${item}`);
        console.log(data);
        if (data.equipment_category.index === "weapon")
          addWeapon(prev => [
            ...prev, data
          ]);
      }
    })();
  }, []);
  
  return (
    <div class="stats">
      <div class="combatStats">
        <h1>Combat Stats:</h1>
        <p>Armor Class:{character.ac}</p>
        <p>Health Points:{character.hp}</p>
        <p>Max Health Points:{character.maxHp}</p>
        <p>Speed: {character.speed}</p>
        <p>Initiative: {character.initiative}</p>
        <p>Proficiency: {character.proficiency}</p>
        <h1>Weapons:</h1>
      </div>
      <div class="weapons">
        {!weapons?.length
          ? <h3>This character currently has no weapons.</h3>
          : weapons.map(weapon => {
            return <Weapon weapon={weapon} />
          })}
      </div>
    </div>
  )
}