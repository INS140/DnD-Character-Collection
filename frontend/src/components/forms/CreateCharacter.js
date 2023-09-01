import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, TextArea } from "../ui-kit"
import useFetch from '../custom-hooks/useFetch'
import useFormHandler from '../custom-hooks/useFormHandler'
import { CurrentUser } from '../context/currentUser'
import { toTitleCase } from '../../helper-functions'

export default function CreateCharacter() {
  const { post } = useFetch('https://dnd-character-collection-backend.vercel.app')

  const { currentUser } = useContext(CurrentUser)

  const navigate = useNavigate()

  const {inputs, handleChange, setInputs} = useFormHandler({
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
      str: {
        prof: false,
        misc: 0
      },
      dex: {
        prof: false,
        misc: 0
      },
      con: {
        prof: false,
        misc: 0
      },
      int: {
        prof: false,
        misc: 0
      },
      wis: {
        prof: false,
        misc: 0
      },
      cha: {
        prof: false,
        misc: 0
      }
    },
    skills: {
      acrobatics: {
        score: 'dex',
        prof: false,
        expert: false,
        misc: 0,
      },
      animalHandling: {
        score: 'wis',
        prof: false,
        expert: false,
        misc: 0,
      },
      arcana: {
        score: 'int',
        prof: false,
        expert: false,
        misc: 0,
      },
      athletics: {
        score: 'str',
        prof: false,
        expert: false,
        misc: 0,
      },
      deception: {
        score: 'cha',
        prof: false,
        expert: false,
        misc: 0,
      },
      history: {
        score: 'int',
        prof: false,
        expert: false,
        misc: 0,
      },
      insight: {
        score: 'wis',
        prof: false,
        expert: false,
        misc: 0,
      },
      intimidation: {
        score: 'cha',
        prof: false,
        expert: false,
        misc: 0,
      },
      investigation: {
        score: 'int',
        prof: false,
        expert: false,
        misc: 0,
      },
      medicine: {
        score: 'wis',
        prof: false,
        expert: false,
        misc: 0,
      },
      nature: {
        score: 'int',
        prof: false,
        expert: false,
        misc: 0,
      },
      perception: {
        score: 'wis',
        prof: false,
        expert: false,
        misc: 0,
      },
      performance: {
        score: 'cha',
        prof: false,
        expert: false,
        misc: 0,
      },
      persuasion: {
        score: 'cha',
        prof: false,
        expert: false,
        misc: 0,
      },
      religion: {
        score: 'int',
        prof: false,
        expert: false,
        misc: 0,
      },
      sleightOfHand: {
        score: 'dex',
        prof: false,
        expert: false,
        misc: 0,
      },
      stealth: {
        score: 'dex',
        prof: false,
        expert: false,
        misc: 0,
      },
      survival: {
        score: 'wis',
        prof: false,
        expert: false,
        misc: 0,
      }
    },
    passiveMod: {
      score: 'wis',
      skill: 'perception',
      misc: 0
    },
    currencies: {
      cp: 0,
      sp: 0,
      gp: 0,
      ep: 0,
      pp: 0
    },
    miscInit: 0,
    image: '',
    description: ''
  })

  const handleCheckboxChange = (e, field) => {
    const { name } = e.target
    const value = inputs[field][name].prof

    setInputs({...inputs, [field]: {...inputs[field], [name]: {...inputs[field][name], prof: !value}}})
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await post('/characters', {
        ...inputs,
        user: currentUser.id
      })

      navigate('/characters')
    } catch (err) {
      console.log(err)
    }
  }

  return <div className='form-container p-3'>
    <h1>Create Your Character</h1>
    <form className='form' onSubmit={handleSubmit} autoComplete='off'>
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
        <legend>Ability Scores</legend>
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
            name={stat}
            type='checkbox'
            value={inputs.savingThrows[stat]}
            onChange={e => handleCheckboxChange(e, 'savingThrows')}
          />
        })}
      </fieldset>
      <fieldset className='skills'>
        <legend>Skills</legend>
        {Object.keys(inputs.skills).map((skill, i) => {
          return <Input
            key={`${skill}${i}`}
            label={toTitleCase(skill)}
            name={skill}
            type='checkbox'
            value={inputs.skills[skill]}
            onChange={e => handleCheckboxChange(e, 'skills')}
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
          maxLength={250}
        />
      </fieldset>
      <Button className="secondary" type='submit'>Create Character</Button>
    </form>
  </div>
}