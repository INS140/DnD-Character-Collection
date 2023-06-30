import Input from '../ui-kit/Input'
import TextArea from '../ui-kit/TextArea'
import Button from '../ui-kit/Button'
import useFetch from '../custom-hooks/useFetch'
import useFormHandler from '../custom-hooks/useFormHandler'

// inputs for list on lucid chart
// seperate fieldsets for base stats/skills

export default function CreateCharacter() {
  const { post } = useFetch('') // still need url

  const {inputs, handleChange, handleCheckboxChange} = useFormHandler({
    name: '',
    race: '',
    classType: '',
    level: 1,
    hitDice: '',
    hp: 0,
    ac: 0,
    speed: 0,
    str: 1,
    dex: 1,
    con: 1,
    int: 1,
    wis: 1,
    cha: 1,
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

  const handleSubmit = e => {
    e.preventDefault()

    console.log(inputs)

    // post('/characters', {
    //   ...inputs,
    //   user: user.id
    // })
  }

  return <div className='form-container'>
    <h1>Create Your Character</h1>
    <form className='form' onSubmit={handleSubmit}>
      <div className='traits'>
        <Input
          label='Name'
          labelClass='name'
          name='name'
          required
          value={inputs.name}
          onChange={handleChange}
        />
        <Input
          label='Race'
          labelClass='race'
          name='race'
          required
          value={inputs.race}
          onChange={handleChange}
        />
        <Input
          label='Level'
          labelClass='level'
          name='level'
          type='number'
          min={1}
          max={20}
          required
          value={inputs.level}
          onChange={handleChange}
        />
        <Input
          label='Class'
          labelClass='class'
          name='classType'
          required
          value={inputs.classType}
          onChange={handleChange}
        />
        <Input
          label='Armor Class'
          labelClass='ac'
          name='ac'
          type='number'
          required
          value={inputs.ac}
          onChange={handleChange}
        />
        <Input
          label='Health Points'
          labelClass='hp'
          name='hp'
          type='number'
          required
          value={inputs.hp}
          onChange={handleChange}
        />
        <Input
          label='Speed'
          labelClass='speed'
          name='speed'
          type='number'
          required
          value={inputs.speed}
          onChange={handleChange}
        />
        <Input
          label='Hit Dice'
          labelClass='hit'
          name='hitDice'
          required
          value={inputs.hitDice}
          onChange={handleChange}
        />
      </div>
      <fieldset className='base-stats'>
        <legend>Base Stats</legend>
        <Input
          label='Strength'
          name='str'
          type='number'
          min={1}
          max={20}
          required
          value={inputs.str}
          onChange={handleChange}
        />
        <Input
          label='Dexterity'
          name='dex'
          type='number'
          min={1}
          max={20}
          required
          value={inputs.dex}
          onChange={handleChange}
        />
        <Input
          label='Constitution'
          name='con'
          type='number'
          min={1}
          max={20}
          required
          value={inputs.con}
          onChange={handleChange}
        />
        <Input
          label='Intelligence'
          name='int'
          type='number'
          min={1}
          max={20}
          required
          value={inputs.int}
          onChange={handleChange}
        />
        <Input
          label='Wisdom'
          name='wis'
          type='number'
          min={1}
          max={20}
          required
          value={inputs.wis}
          onChange={handleChange}
        />
        <Input
          label='Charisma'
          name='cha'
          type='number'
          min={1}
          max={20}
          required
          value={inputs.cha}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className='saving-throws'>
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
      <fieldset className='skills'>
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
      <fieldset className='optional'>
        <legend>Optional Info</legend>
        <Input
          label='Image'
          name='image'
          value={inputs.image}
          onChange={handleChange}
        />
        <TextArea
          label='Desciption'
          name='description'
          rows='5'
          value={inputs.description}
          onChange={handleChange}
        />
      </fieldset>
      <Button type='submit'>Create Character</Button>
    </form>
  </div>
}