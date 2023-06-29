import Input from '../ui-kit/Input'
import TextArea from '../ui-kit/TextArea'
import useFormHandler from '../custom-hooks/useFormHandler'

// inputs for list on lucid chart
// seperate fieldsets for base stats/skills

export default function CreateCharacter() {
  const {inputs, handleChange, handleCheckboxChange} = useFormHandler({
    name: '',
    race: '',
    class: '',
    level: 0,
    hitDice: '',
    hp: 0,
    ac: 0,
    speed: 0,
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
    savingThrows: {
      str: false,
      dex: false,
      con: false,
      int: false,
      wis: false,
      cha: false
    },
    skills: {
      acrobatics: false,
      animalHandling: false,
      arcana: false,
      athletics: false,
      deception: false,
      history: false,
      insight: false,
      intimidation: false,
      investigation: false,
      medicine: false,
      nature: false,
      perception: false,
      performance: false,
      persuasion: false,
      religion: false,
      sleightOfHand: false,
      stealth: false,
      survival: false
    },
    image: '',
    description: ''
  })

  const toTitleCase = str => {
    return str.split(/(?=[A-Z])/).map(w => w.split('').map((c, i) => i === 0 ? c.toUpperCase() : c.toLowerCase()).join('')).join(' ')
  }

  return <div>
    <h1>Create Your Character</h1>
    <form>
      <Input
        label='Name'
        name='name'
        value={inputs.name}
        onChange={handleChange}
      />
      <Input
        label='Race'
        name='race'
        value={inputs.race}
        onChange={handleChange}
      />
      <Input
        label='Class'
        name='class'
        value={inputs.class}
        onChange={handleChange}
      />
      <Input
        label='Level'
        name='level'
        value={inputs.level}
        onChange={handleChange}
      />
      <Input
        label='Hit Dice'
        name='hitDice'
        value={inputs.hitDice}
        onChange={handleChange}
      />
      <Input
        label='Health Points'
        name='hp'
        value={inputs.hp}
        onChange={handleChange}
      />
      <Input
        label='Armor Class'
        name='ac'
        value={inputs.ac}
        onChange={handleChange}
      />
      <Input
        label='Speed'
        name='speed'
        value={inputs.speed}
        onChange={handleChange}
      />
      <fieldset>
        <legend>Base Stats</legend>
        <Input
          label='Strength'
          name='str'
          value={inputs.str}
          onChange={handleChange}
        />
        <Input
          label='Dexterity'
          name='dex'
          value={inputs.dex}
          onChange={handleChange}
        />
        <Input
          label='Constitution'
          name='con'
          value={inputs.con}
          onChange={handleChange}
        />
        <Input
          label='Intelligence'
          name='int'
          value={inputs.int}
          onChange={handleChange}
        />
        <Input
          label='Wisdom'
          name='wis'
          value={inputs.wis}
          onChange={handleChange}
        />
        <Input
          label='Charisma'
          name='cha'
          value={inputs.cha}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <legend>Saving Throws</legend>
        {Object.keys(inputs.savingThrows).map((stat, i) => {
          return <Input
            key={`${stat}${i}`}
            label={stat.toUpperCase()}
            name={`savingThrows ${stat}`}
            type='checkbox'
            value={inputs.savingThrows[stat]}
            onChange={handleCheckboxChange}
          />
        })}
      </fieldset>
      <fieldset>
        <legend>Skills</legend>
        {Object.keys(inputs.skills).map((skill, i) => {
          return <Input
            key={`${skill}${i}`}
            label={toTitleCase(skill)}
            name={`skills ${skill}`}
            type='checkbox'
            value={inputs.skills[skill]}
            onChange={handleCheckboxChange}
          />
        })}
      </fieldset>
      <Input
        label='Image'
        name='image'
        value={inputs.image}
        onChange={handleChange}
      />
      <TextArea
        label='Desciption'
        name='description'
        value={inputs.description}
        onChange={handleChange}
      />
    </form>
  </div>
}