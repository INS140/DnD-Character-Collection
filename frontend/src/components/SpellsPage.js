import React, { useState, useEffect } from "react";

export default function SpellsPage() {
  const [spells, setSpells] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("Cantrip");
  const [selectedSpell, setSelectedSpell] = useState(null);

  const [showSaveDCModal, setShowSaveDCModal] = useState(false);
  const [showAttackBonusModal, setShowAttackBonusModal] = useState(false);
  const [spellDC, setSpellDC] = useState({
    profBonus: 0,
    dexterity: 0,
    miscBonus: 0,
    spellcastingAbility: "strength",
  });
  const [attackBonus, setAttackBonus] = useState({
    profBonus: 0,
    dexterity: 0,
    miscBonus: 0,
    spellcastingAbility: "strength",
  });

  useEffect(() => {
    fetchSpells();
  }, []);

  const fetchSpells = async () => {
    try {
      const response = await fetch("https://www.dnd5eapi.co/api/spells");
      const data = await response.json();
      setSpells(data.results);
    } catch (error) {
      console.log("Error fetching spells:", error);
    }
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleSpellSelection = (spell) => {
    setSelectedSpell(spell);
  };

  const handleModalClose = () => {
    setSelectedSpell(null);
  };

  const openSaveDCModal = () => {
    setShowSaveDCModal(true);
  };

  const closeSaveDCModal = () => {
    setShowSaveDCModal(false);
  };

  const openAttackBonusModal = () => {
    setShowAttackBonusModal(true);
  };

  const closeAttackBonusModal = () => {
    setShowAttackBonusModal(false);
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
    setAttackBonus((prevAttackBonus) => ({
      ...prevAttackBonus,
      [name]: value,
    }));
  };

  const handleSaveDCSave = () => {
    console.log("Saving Spell DC:", spellDC);
    closeSaveDCModal();
  };

  const handleAttackBonusSave = () => {
    console.log("Saving Attack Bonus:", attackBonus);
    closeAttackBonusModal();
  };

  const filteredSpells = spells.filter((spell) => {
    if (selectedLevel === "Cantrip") {
      return spell.level === 0;
    } else {
      return spell.level === parseInt(selectedLevel);
    }
  });

  return (
    <div>
      <h1>Spells</h1>
      <div>
        <h2>Save DC</h2>
        <p>
          Spell DC: {spellDC.profBonus + spellDC.dexterity + spellDC.miscBonus}
        </p>
        <button onClick={openSaveDCModal}>Edit</button>
      </div>

      {showSaveDCModal && (
        <div>
          <h3>Spell DC</h3>
          <label>
            Prof Bonus:
            <input
              type="number"
              name="profBonus"
              value={spellDC.profBonus}
              onChange={handleSaveDCChange}
            />
          </label>
          <label>
            Dexterity:
            <input
              type="number"
              name="dexterity"
              value={spellDC.dexterity}
              onChange={handleSaveDCChange}
            />
          </label>
          <label>
            Misc Bonus:
            <input
              type="number"
              name="miscBonus"
              value={spellDC.miscBonus}
              onChange={handleSaveDCChange}
            />
          </label>
          <label>
            Spellcasting Ability:
            <select
              name="spellcastingAbility"
              value={spellDC.spellcastingAbility}
              onChange={handleSaveDCChange}
            >
              <option value="strength">Strength</option>
              <option value="dexterity">Dexterity</option>
              <option value="constitution">Constitution</option>
              <option value="intelligence">Intelligence</option>
              <option value="wisdom">Wisdom</option>
              <option value="charisma">Charisma</option>
            </select>
          </label>
          <button onClick={handleSaveDCSave}>Save</button>
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
          <label>
            Prof Bonus:
            <input
              type="number"
              name="profBonus"
              value={attackBonus.profBonus}
              onChange={handleAttackBonusChange}
            />
          </label>
          <label>
            Dexterity:
            <input
              type="number"
              name="dexterity"
              value={attackBonus.dexterity}
              onChange={handleAttackBonusChange}
            />
          </label>
          <label>
            Misc Bonus:
            <input
              type="number"
              name="miscBonus"
              value={attackBonus.miscBonus}
              onChange={handleAttackBonusChange}
            />
          </label>
          <label>
            Spellcasting Ability:
            <select
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
            </select>
          </label>
          <button onClick={handleAttackBonusSave}>Save</button>
        </div>
      )}
      <div>
        <label htmlFor="levelSelect">Select Level:</label>
        <select
          id="levelSelect"
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
        </select>
      </div>
      <ul>
        {filteredSpells.map((spell) => (
          <li key={spell.index} onClick={() => handleSpellSelection(spell)}>
            {spell.name}
          </li>
        ))}
      </ul>

      {selectedSpell && (
        <div>
          <h3>{selectedSpell.name}</h3>
          <p>{selectedSpell.description}</p>
          <button onClick={handleModalClose}>Close</button>
        </div>
      )}
    </div>
  );
}
