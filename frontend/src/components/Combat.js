// display combat stats
// weapons
// conditions (stretch goal)
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import useFetch from "./custom-hooks/useFetch";
import Weapon from './Weapon';

export default function Combat() {
  const { character } = useOutletContext()

  const [weapons, setWeapons] = useState([]);

  const { get } = useFetch("https://www.dnd5eapi.co/api");

  useEffect(() => {
    (async () => {
      for (const item of character.inventory) {
        const data = await get(`/equipment/${item}`);
        if (data.equipment_category.index === "weapon") {
          setWeapons(prev => [ ...prev, data ]);
        }
      }
    })();
  }, []);
  
  return (
    <div className="stats">
      <div className="combatStats">
        <h1>Combat Stats:</h1>
        <p>Armor Class:{character.ac}</p>
        <p>Health Points:{character.hp}</p>
        <p>Max Health Points:{character.maxHp}</p>
        <p>Speed: {character.speed}</p>
        <p>Initiative: {character.init}</p>
        <p>Proficiency: {character.prof}</p>
        <h1>Weapons:</h1>
      </div>
      <div className="weapons">
        {!weapons.length
          ? <h3>This character currently has no weapons.</h3>
          : weapons.map((weapon, i) => {
            return <Weapon key={`${weapon.index}${i}`} weapon={weapon} />
          })}
      </div>
    </div>
  )
}