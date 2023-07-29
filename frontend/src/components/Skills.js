import { Fragment, useEffect } from "react"
import Modal from "./ui-kit/Modal"
import Input from "./ui-kit/Input"
import { scoreToMod, toTitleCase, getFullScore } from "../helper-functions"
import useFetch from "./custom-hooks/useFetch"
import useFormHandler from "./custom-hooks/useFormHandler"

export default function Skills({ character, setCharacter }) {
  const { put } = useFetch('https://dnd-character-collection-backend.vercel.app')

  const { inputs, setInputs } = useFormHandler({
    ...character.skills
  })

  const handleChange = (e, skill) => {
    const { name } = e.target

    if (name === 'misc') {
      const { value } = e.target

      const bonus = value === ''
      ? ''
      : Number(value) > 30
        ? 30
        : Number(value) < -30
          ? -30
          : Number(value)

      setInputs(prev => {return {...prev, [skill]: {...prev[skill], misc: bonus}}})
    } else {
      if (name === 'prof') {
        const value = inputs[skill].prof

        setInputs(prev => {return {...prev, [skill]: {...prev[skill], prof: !value, expert: false}}})
      } else {
        const value = inputs[skill].expert

        setInputs(prev => {return {...prev, [skill]: {...prev[skill], prof: false, expert: !value}}})
      }
    }
  }

  const handleSave = async () => {
    const { prof, init, ...charData } = character

    try {
      const updatedSkills = {...inputs}

      Object.keys(inputs).forEach(skill => {
        const { misc } = updatedSkills[skill]
  
        updatedSkills[skill] = { ...updatedSkills[skill], misc: misc === '' ? 0 : misc}
      })

      const updatedCharacter = {
        ...charData,
        skills: {
          ...updatedSkills
        }
      }

      await put(`/characters/${character.id}`, updatedCharacter)

      setCharacter({...updatedCharacter, prof, init})

      setInputs(updatedSkills)
    } catch (err) {
      console.log('save error', err)
    }
  }

  const handleCancel = () => {
    setInputs({...character.skills})
  }

  return <div className="secondary skills stat">
    { Object.keys(character.skills).map(skill => {
      const { score, prof, expert, misc } = character.skills[skill]
      const profMod = expert ? character.prof * 2 : prof ? character.prof : 0
      const scoreMod = scoreToMod(character[score])
      const mod = scoreMod + profMod + misc

      const tempProfMod = inputs[skill].prof ? character.prof : inputs[skill].expert ? character.prof*2 : 0
      const tempMod = scoreMod + tempProfMod + inputs[skill].misc

      const spanText = prof ? '✯' : expert ? '✯✯' : ''

      return <Fragment key={skill}>
        <div
          className="skill"
          data-bs-toggle="modal"
          data-bs-target={`#update${skill}`}
        >
          <h3>{toTitleCase(skill)}</h3>
          {spanText && <span>{spanText}</span>}
          <p>{mod > 0 && '+'}{mod}</p>
        </div>
        <Modal
          modalId={`update${skill}`}
          className="stat-modal"
          header={toTitleCase(skill)}
          closeModalText="Save"
          onCloseClick={handleSave}
          onCancelClick={handleCancel}
        > 
          <div className="stat info mod">
            <h2>{tempMod > 0 && '+'}{tempMod}</h2>
          </div>
          <div className="stat info">
            <h3>{toTitleCase(getFullScore(score))}</h3>
            <p>{scoreMod > 0 && '+'}{scoreMod}</p>
          </div>
          <div className="stat info">
            <h3>Misc Bonus</h3>
            <Input
              type="number"
              name="misc"
              min={0}
              max={20}
              required
              value={inputs[skill].misc}
              onChange={e => handleChange(e, skill)}
            />
          </div>
          <div className="stat info prof">
            <Input
              label={`Proficiency (+${character.prof}) ✯`}
              name="prof"
              type="checkbox"
              checked={inputs[skill].prof}
              value={inputs[skill].prof}
              onChange={e => handleChange(e, skill)}
            />
            <Input
              label={`Expertise (+${character.prof*2}) ✯✯`}
              name="expert"
              type="checkbox"
              checked={inputs[skill].expert}
              value={inputs[skill].expert}
              onChange={e => handleChange(e, skill)}
            />
          </div>
        </Modal>
      </Fragment>
    })}
  </div>
}