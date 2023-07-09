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
  
  return <div className='combat'>
    <h1 className='text-center'>Combat Stats</h1>
    <div className="combatStats">
      <h3 className="secondary">Armor Class<span>{character.ac}</span></h3>
      <h3 className="secondary">Health Points<span>{character.hp}</span></h3>
      <h3 className="secondary">Max Health Points<span>{character.maxHp}</span></h3>
      <h3 className="secondary">Speed<span>{character.speed}</span></h3>
      <h3 className="secondary">Initiative<span>{character.init}</span></h3>
      <h3 className="secondary">Proficiency<span>{character.prof}</span></h3>
    </div>
    <h2 className='text-center pt-3'>Weapons</h2>
    <hr />
    <div className="weapons">
      {!weapons.length
        ? <h3 className="text-center">This character currently has no weapons.</h3>
        : weapons.map((weapon, i) => {
          return <Weapon key={`${weapon.index}${i}`} weapon={weapon} />
        })}
    </div>
  </div>
}