import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import useFetch from "./custom-hooks/useFetch";
import Input from "./ui-kit/Input";
import Select from "./ui-kit/Select";
import Modal from "./ui-kit/Modal";
import { scoreToMod, getTag } from "../helper-functions";
import SpellDisplay from "./SpellDisplay";
import Spell from "./Spell";
import { useNavigate } from "react-router-dom";
import Button from "./ui-kit/Button";

export default function SpellsPage() {
  const { character } = useOutletContext();

  const navigate = useNavigate();

  const { get } = useFetch("https://www.dnd5eapi.co/api");
  const { put } = useFetch("https://dnd-character-collection-backend.vercel.app");

  const [spells, setSpells] = useState([]);
  const [availableSpells, setAvailableSpells] = useState([]);

  const [selectedLevel, setSelectedLevel] = useState("Cantrip");
  const [selectedSpell, setSelectedSpell] = useState("-----");

  const [spellDC, setSpellDC] = useState({
    misc: 0,
    stat: "str",
  });

  const [attackBonus, setAttackBonus] = useState({
    misc: 0,
    stat: "str",
  });

  useEffect(() => {
    (async () => {
      if (character.spells.length !== 0) {
        for (const spell of character.spells) {
            const level = selectedLevel === "Cantrip" ? 0 : Number(selectedLevel);
            const data = await get(`/spells/${spell}`);
            
            if (data.level === level) {
              setSpells(prev => [...prev, data]);
            }
        }
      }
    })();
  }, [character.spells, selectedLevel])

  const handleLevelChange = (e) => {
    setSpells([]);
    setSelectedLevel(e.target.value);
  };

  const handleSpellSelection = (e) => {
    const { value } = e.target;
    if (value === '-----') {
      setSelectedSpell('-----')
      return
    }
    const spell = availableSpells.find((s) => s.index === value);
    setSelectedSpell(spell.index);
  };

  const handleSaveDCChange = (e) => {
    const { name, value } = e.target;
    setSpellDC((prevSpellDC) => ({
      ...prevSpellDC,
      [name]: value,
    }));
  };

  const handleAttackBonusChange = (e) => {
    const { name, value } = e.target;
    setAttackBonus((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddSpell = async () => {
    const { prof, init, spells, ...charData } = character;

    await put(`/characters/${character.id}`, {
      ...charData,
      spells: [...spells, selectedSpell],
    });

    navigate(0);
  };

  const handleDeleteSpell = async (index) => {
    const { prof, init, spells, ...charData } = character

    const updatedSpells = spells.filter(spell => spell !== index)

    await put(`/characters/${character.id}`, {
      ...charData,
      spells: updatedSpells
    })

    navigate(0)
  }

  const fetchSpells = async () => {
    const data = await get(
      `/spells?level=${selectedLevel === "Cantrip" ? "0" : selectedLevel}`
    );
    setAvailableSpells(data.results);
  };

  return <div className="spells">
    <h1>Spells</h1>
    <div className="saveAttack">
      <div>
        <hr />
        <p className="secondary">
          Spell Save DC<span>
          {8 +
            character.prof +
            scoreToMod(character[spellDC.stat]) +
            Number(spellDC.misc)} </span>
        </p>
        <Button
          className="secondary"
          data-bs-toggle="modal"
          data-bs-target="#spellSaveDC"
        >
          Edit
        </Button>
        <Modal
          modalId="spellSaveDC"
          header="Spell Save DC"
          closeModalText="Save Changes"
        >
          <div>
            <h4>Prof Bonus</h4>
            <p className="secondary">{character.prof}</p>
          </div>
          <div>
            <h4>Stat Mod</h4>
            <p className="secondary">{scoreToMod(character[spellDC.stat])}</p>
          </div>
          <Input
            label="Misc Bonus"
            type="number"
            name="misc"
            className="text-center"
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
      <hr />
        <p className="secondary">
          Attack Bonus<span>
          {character.prof +
            scoreToMod(character[attackBonus.stat]) +
            Number(attackBonus.misc)}</span>
        </p>
        <Button
          className="secondary"
          data-bs-toggle="modal"
          data-bs-target="#atkBonus"
        >
          Edit
        </Button>
        <Modal
          modalId="atkBonus"
          header="Attack Bonus"
          closeModalText="Save Changes"
        >
          <div>
            <h4>Prof Bonus</h4>
            <p className="secondary">{character.prof}</p>
          </div>
          <div>
            <h4>Stat Mod</h4>
            <p className="secondary">{scoreToMod(character[attackBonus.stat])}</p>
          </div>
          <Input
            label="Misc Bonus"
            type="number"
            name="misc"
            className="text-center"
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
    </div>
    <div>
    <hr />
    <h2>Spells List</h2>
      <Select
        label="Select Level"
        name="levelSelect" className="secondary text-light"
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
    <Button
      className="secondary m-2"
      data-bs-toggle="modal"
      data-bs-target="#addSpell"
      onClick={fetchSpells}
    >
      Add A Spell
    </Button>
    <Modal
      modalId="addSpell"
      header={`Add A ${
        selectedLevel === "Cantrip"
          ? "Cantrip"
          : `${selectedLevel}${getTag(selectedLevel)} Level Spell`
      }`}
      closeModalText="Add Spell"
      disableSubmit={selectedSpell === '-----'}
      onCloseClick={handleAddSpell}
    >
      <div>
        {!availableSpells
          ? <>Loading ...</>
          :<Select
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
        { selectedSpell !== "-----" && <>
            <hr />
            <SpellDisplay spell={selectedSpell} />
          </>
        }
      </div>
    </Modal>
    { !character.spells.length
      ? <h2>This character has no spells</h2>
      : <div className="spellsDisplay">
        <div>
          <h2>
            {selectedLevel === "Cantrip"
              ? "Cantrips"
              : `${selectedLevel}${getTag(selectedLevel)} Level`}
          </h2>
        <hr /> 
        </div>
        { !spells.length
          ? <p>No {selectedLevel !== 'Cantrip' ? `${selectedLevel}${getTag(selectedLevel)} level spells` : 'Cantrips'}</p>
          : spells.map((spell, i) => {
            return <Spell key={`${spell.index}${i}`} spell={spell} handleDelete={() => handleDeleteSpell(spell.index)} />;
          })
        }
      </div>
    }
  </div>
}
