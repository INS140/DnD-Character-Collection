import { useState, useEffect } from "react"
import { useOutletContext } from 'react-router-dom'
import useFetch from "./custom-hooks/useFetch"
import Input from './ui-kit/Input'
import Select from './ui-kit/Select'
import Modal from "./ui-kit/Modal"
import { scoreToMod, getTag } from "../helper-functions"
import SpellDisplay from "./SpellDisplay"
import Spell from "./Spell"
import { useNavigate } from "react-router-dom"

export default function SpellsPage() {
  const { character } = useOutletContext()

  const navigate = useNavigate()

  const { get } = useFetch('https://www.dnd5eapi.co/api')
  const { put } = useFetch('http://localhost:5000')

  const [spells, setSpells] = useState([])
  const [availableSpells, setAvailableSpells] = useState([])

  const [selectedLevel, setSelectedLevel] = useState("Cantrip");
  const [selectedSpell, setSelectedSpell] = useState('-----');

  const [spellDC, setSpellDC] = useState({
    misc: 0,
    stat: "str",
  })

  const [attackBonus, setAttackBonus] = useState({
    misc: 0,
    stat: "str",
  })

  useEffect(() => {
    if (character.spells.length !== 0) {
      for (const spell of character.spells) {
        (async () => {
          const level = selectedLevel === 'Cantrip' ? 0 : Number(selectedLevel)
          const data = await get(`/spells/${spell}`)
          if (data.level === level) {
            setSpells(prev => [...prev, data])
          }
        })()
      }
    }
  }, [selectedLevel])

  useEffect(()=>{console.log(spells)}, [spells])

  const handleLevelChange = e => {
    setSpells([])
    setSelectedLevel(e.target.value);
  }

  const handleSpellSelection = e => {
    const { value } = e.target
    const spell = availableSpells.find(s => s.index === value)
    setSelectedSpell(spell.index)
  }

  const handleSaveDCChange = e => {
    const { name, value } = e.target;
    setSpellDC((prevSpellDC) => ({
      ...prevSpellDC,
      [name]: value,
    }))
  }

  const handleAttackBonusChange = e => {
    const { name, value } = e.target;
    setAttackBonus((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddSpell = async () => {
    const { prof, ...charData } = character

    const data = await put(`/characters/${character.id}`, {
      ...charData,
      spells: [...character.spells, selectedSpell]
    })

    console.log(data)

    navigate(0)
  }

  const fetchSpells = async () => {
    const data = await get(`/spells?level=${selectedLevel === 'Cantrip' ? '0' : selectedLevel}`)
    setAvailableSpells(data.results)
  }

  return <div>
    <h1>Spells</h1>
    <div>
      <h2>Save DC</h2>
      <p>
        Spell DC: {8 + character.prof + scoreToMod(character[spellDC.stat]) + Number(spellDC.misc)}
      </p>
      <Modal
        modalId="spellSaveDC"
        header="Spell Save DC"
        openModalText="Edit"
        closeModalText="Save Changes"
      >
        <div>
          <h4>Prof Bonus</h4>
          <p>{character.prof}</p>
        </div>
        <div>
          <h4>Stat Mod</h4>
          <p>{scoreToMod(character[spellDC.stat])}</p>
        </div>
        <Input
          label="Misc Bonus"
          type="number"
          name="misc"
          value={spellDC.misc}
          onChange={handleSaveDCChange}
        />
        <Select
          label="Spellcasting Ability"
          name="stat"
          value={spellDC.stat}
          onChange={handleSaveDCChange}
        >
          <option value="str">Strength</option>
          <option value="dex">Dexterity</option>
          <option value="con">Constitution</option>
          <option value="int">Intelligence</option>
          <option value="wis">Wisdom</option>
          <option value="cha">Charisma</option>
        </Select>
      </Modal>
    </div>
    <div>
      <h2>Attack Bonus</h2>
      <p>
        Attack Bonus: {character.prof + scoreToMod(character[attackBonus.stat]) + Number(attackBonus.misc)}
      </p>
      <Modal
        modalId="atkBonus"
        header="Attack Bonus"
        openModalText="Edit"
        closeModalText="Save Changes"
      >
        <div>
          <h4>Prof Bonus</h4>
          <p>{character.prof}</p>
        </div>
        <div>
          <h4>Stat Mod</h4>
          <p>{scoreToMod(character[attackBonus.stat])}</p>
        </div>
        <Input
          label="Misc Bonus"
          type="number"
          name="misc"
          value={attackBonus.misc}
          onChange={handleAttackBonusChange}
        />
        <Select
          label="Spellcasting Ability"
          name="stat"
          value={attackBonus.stat}
          onChange={handleAttackBonusChange}
        >
          <option value="str">Strength</option>
          <option value="dex">Dexterity</option>
          <option value="con">Constitution</option>
          <option value="int">Intelligence</option>
          <option value="wis">Wisdom</option>
          <option value="cha">Charisma</option>
        </Select>
      </Modal>
    </div>
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
    <Modal
      modalId="addSpell"
      header={`Add A ${selectedLevel === 'Cantrip' ? 'Cantrip': `${selectedLevel}${getTag(selectedLevel)} Level Spell`}`}
      openModalText="Add A Spell"
      closeModalText="Add Spell"
      onOpenClick={fetchSpells}
      onCloseClick={handleAddSpell}
    >
      <div>
        { !availableSpells
          ? <>Loading ...</>
          : <Select
            label="Spell Select"
            name="selectedSpell"
            value={selectedSpell}
            onChange={handleSpellSelection}
          >
            <option value="-----">-----</option>
            {availableSpells.map((spell) => (
              <option key={spell.index} value={spell.index}>
                {spell.name}
              </option>
            ))}
          </Select>
        }
        { selectedSpell !== '-----' && <SpellDisplay spell={selectedSpell} /> }
      </div>
    </Modal>
    <div>
      <h2>
        { selectedLevel === 'Cantrip'
          ? 'Cantrips'
          : `${selectedLevel}${getTag(selectedLevel)} Level`
        }
      </h2>
      <hr />
      { !spells.length
        ? <>Loading ...</>
        : spells.map((spell, i) => {
          return <Spell key={`${spell}${i}`} spell={spell} />
        })
      }
    </div>
  </div>
}
