import { useState, useEffect } from "react"
import { useOutletContext } from 'react-router-dom'
import useFetch from "./custom-hooks/useFetch"
import Input from './ui-kit/Input'
import Select from './ui-kit/Select'
import Button from "./ui-kit/Button"

export default function SpellsPage() {
  const { character } = useOutletContext()

  const { get } = useFetch('https://www.dnd5eapi.co/api')

  const [spells, setSpells] = useState([])

  const [selectedLevel, setSelectedLevel] = useState("Cantrip");
  const [selectedSpell, setSelectedSpell] = useState('-----');

  const [showSaveDCModal, setShowSaveDCModal] = useState(false);
  const [showAttackBonusModal, setShowAttackBonusModal] = useState(false);
  const [spellDC, setSpellDC] = useState({
    miscBonus: 0,
    spellcastingAbility: "strength",
  });
  const [attackBonus, setAttackBonus] = useState({
    miscBonus: 0,
    spellcastingAbility: "strength",
  });

  useEffect(() => {
    if (character !== null && character.spells.length !== 0) {
      for (const spell of character.spells) {
        (async () => {
          const data = await get(`/spells/${spell}`)
          setSpells(prev => [...prev, data])
        })()
      }
    }
  }, [])

  useEffect(() => {
    console.log(spells)
  }, [spells])

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  }

  const handleSpellSelection = e => {
    const { value } = e.target
    const spell = spells.find(s => s.index === value)
    setSelectedSpell(spell)
  }

  const handleModalClose = () => {
    setSelectedSpell('-----')
  }

  const openSaveDCModal = () => {
    setShowSaveDCModal(true)
  }

  const closeSaveDCModal = () => {
    setShowSaveDCModal(false)
  }

  const openAttackBonusModal = () => {
    setShowAttackBonusModal(true)
  }

  const closeAttackBonusModal = () => {
    setShowAttackBonusModal(false)
  }

  const handleSaveDCChange = (e) => {
    const { name, value } = e.target;
    setSpellDC((prevSpellDC) => ({
      ...prevSpellDC,
      [name]: value,
    }))
  }

  const handleAttackBonusChange = (e) => {
    const { name, value } = e.target;
    setAttackBonus((prevAttackBonus) => ({
      ...prevAttackBonus,
      [name]: value,
    }))
  }

  const handleSaveDCSave = () => {
    console.log("Saving Spell DC:", spellDC);
    closeSaveDCModal();
  }

  const handleAttackBonusSave = () => {
    console.log("Saving Attack Bonus:", attackBonus);
    closeAttackBonusModal();
  }

  return <div>
    <h1>Spells</h1>
    <div>
      <h2>Save DC</h2>
      <p>
        Spell DC: {spellDC.profBonus + spellDC.dexterity + spellDC.miscBonus}
      </p>
      <Button onClick={openSaveDCModal}>Edit</Button>
    </div>

    {showSaveDCModal && (
      <div>
        <h3>Spell DC</h3>
        Prof Bonus
        Variable Stat
        <Input
          label="Misc Bonus"
          type="number"
          name="miscBonus"
          value={spellDC.miscBonus}
          onChange={handleSaveDCChange}
        />
        <Select
          label="Spellcasting Ability"
          name="spellcastingAbility"
          value={spellDC.spellcastingAbility}
          onChange={handleSaveDCChange}
        >
          <option value="str">Strength</option>
          <option value="dex">Dexterity</option>
          <option value="con">Constitution</option>
          <option value="int">Intelligence</option>
          <option value="wis">Wisdom</option>
          <option value="cha">Charisma</option>
        </Select>
        <Button onClick={handleSaveDCSave}>Save</Button>
      </div>
    )}

    <div>
      <h2>Attack Bonus</h2>
      <p>
        Attack Bonus:{" "}
        {attackBonus.profBonus +
          attackBonus.dexterity +
          attackBonus.miscBonus}
      </p>
      <button onClick={openAttackBonusModal}>Edit</button>
    </div>

    {showAttackBonusModal && (
      <div>
        <h3>Attack Bonus</h3>
        Prof Bonus
        Variable Stat
        <Input
          label="Misc Bonus"
          type="number"
          name="miscBonus"
          value={attackBonus.miscBonus}
          onChange={handleAttackBonusChange}
        />
        <Select
          label="Spellcasting Ability"
          name="spellcastingAbility"
          value={attackBonus.spellcastingAbility}
          onChange={handleAttackBonusChange}
        >
          <option value="strength">Strength</option>
          <option value="dexterity">Dexterity</option>
          <option value="constitution">Constitution</option>
          <option value="intelligence">Intelligence</option>
          <option value="wisdom">Wisdom</option>
          <option value="charisma">Charisma</option>
        </Select>
        <Button onClick={handleAttackBonusSave}>Save</Button>
      </div>
    )}
    <div>
      <Select
        label="Select Level"
        name="levelSelect"
        value={selectedLevel}
        onChange={handleLevelChange}
      >
        <option value="Cantrip">Cantrip</option>
        <option value="1">1st Level</option>
        <option value="2">2nd Level</option>
        <option value="3">3rd Level</option>
        <option value="4">4th Level</option>
        <option value="5">5th Level</option>
        <option value="6">6th Level</option>
        <option value="7">7th Level</option>
        <option value="8">8th Level</option>
        <option value="9">9th Level</option>
      </Select>
    </div>
    { !spells
      ? <>Loading ...</>
      : <Select
        label="Spell Select"
        name="selectedSpell"
        value={selectedSpell}
        onChange={handleSpellSelection}
      >
        <option value="-----">-----</option>
        {spells.map((spell) => (
          <option key={spell.index} value={spell.index}>
            {spell.name}
          </option>
        ))}
      </Select>
    }

    {selectedSpell !== '-----' && <div>
        <h3>{selectedSpell.name}</h3>
        <p>{selectedSpell.description}</p>
        <button onClick={handleModalClose}>Close</button>
      </div>
    }
  </div>
}
