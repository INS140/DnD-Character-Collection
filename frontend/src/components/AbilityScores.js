import { Fragment } from "react"
import { Modal, Input } from "./ui-kit"
import { getFullScore, scoreToMod } from "../helper-functions"
import useFormHandler from "./custom-hooks/useFormHandler"
import useFetch from "./custom-hooks/useFetch"

export default function AbilityScores({ character, setCharacter }) {
  const { put } = useFetch('https://dnd-character-collection-backend.vercel.app')

  const { inputs, setInputs } = useFormHandler({
    str: character.str,
    dex: character.dex,
    con: character.con,
    int: character.int,
    wis: character.wis,
    cha: character.cha,
    savingThrows: character.savingThrows
  })

  const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha']

  const handleChange = (e, stat) => {
    const { name } = e.target

    if (name === 'prof') {
      const value = inputs.savingThrows[stat].prof

      setInputs({...inputs, savingThrows: {...inputs.savingThrows, [stat]: {...inputs.savingThrows[stat], prof: !value}}})
    } else {
      const { value } = e.target

      const num = value === ''
      ? ''
      : Number(value) > 30
        ? 30
        : Number(value) < -30
          ? -30
          : Number(value)

      name === 'misc'
        ? setInputs({...inputs, savingThrows: {...inputs.savingThrows, [stat]: {...inputs.savingThrows[stat], misc: num}}})
        : setInputs({...inputs, [stat]: num})
    }
  }

  const handleCancel = () => {
    setInputs({
      str: character.str,
      dex: character.dex,
      con: character.con,
      int: character.int,
      wis: character.wis,
      cha: character.cha,
      savingThrows: character.savingThrows
    })
  }

  const handleSave = async () => {
    const { prof, init, ...charData } = character

    try {
      const updatedScores = {...inputs}

      stats.forEach(stat => {
        const score = updatedScores[stat]
        const save = updatedScores.savingThrows[stat]
        const { misc } = save

        updatedScores[stat] = score === '' ? 0 : score
        updatedScores.savingThrows[stat] = {...save, misc: misc === '' ? 0 : misc}
      })

      const updatedCharacter = {
        ...charData,
        ...updatedScores
      }

      await put(`/characters/${character.id}`, updatedCharacter)

      setCharacter({...updatedCharacter, prof, init})

      setInputs(updatedScores)
    } catch (err) {
      console.log('save error', err)
    }
  }

  return <div className="abilityScores stat">
    { stats.map(stat => {
      const mod = scoreToMod(character[stat])
      const saveMod = (character.savingThrows[stat].prof
        ? mod + character.prof
        : mod) + character.savingThrows[stat].misc

      const tempScoreMod = scoreToMod(inputs[stat])
      const tempProfMod = inputs.savingThrows[stat].prof ? character.prof : 0
      const tempMod = scoreToMod(inputs[stat]) + tempProfMod + inputs.savingThrows[stat].misc

      return <Fragment key={stat}>
        <div
          className="score-display"
          data-bs-toggle="modal"
          data-bs-target={`#update${stat}`}
        >
          <h3 className="statName">{stat.toUpperCase()}</h3>
          <hr />
          <div className="values">
            <p className="score">{character[stat]}</p>
            <p className="mod">{mod > 0 && '+'}{mod}</p>
            <p className="save">
              Save &nbsp;
              <span>{saveMod > 0 && '+'}{saveMod}</span>
            </p>
          </div>
        </div>
        <Modal
          modalId={`update${stat}`}
          header={getFullScore(stat)}
          className="stat-modal"
          closeModalText="Save"
          onCancelClick={handleCancel}
          onCloseClick={handleSave}
        >
          <div className="stat info mod">
            <h2>{tempMod > 0 && '+'}{tempMod}</h2>
          </div>
          <div className="stat info">
            <h3>Score</h3>
            <Input
              type="number"
              name="score"
              value={inputs[stat]}
              onChange={e => handleChange(e, stat)}
              pattern="\d*"
            />
          </div>
          <div className="stat info">
            <h3>Modifier</h3>
            <p>{tempScoreMod > 0 && '+'}{tempScoreMod}</p>
          </div>
          <div className="stat info misc">
            <h3>Misc Save Bonus</h3>
            <Input
              type="number"
              name="misc"
              value={inputs.savingThrows[stat].misc}
              onChange={e => handleChange(e, stat)}
              pattern="\d*"
            />
          </div>
          <div className="stat info prof">
            <Input
              label={`Proficient in Save (+${character.prof})`}
              type="checkbox"
              name="prof"
              checked={inputs.savingThrows[stat].prof}
              value={inputs.savingThrows[stat].prof}
              onChange={e => handleChange(e, stat)}
            />
          </div>
        </Modal>
      </Fragment>
    })}
  </div>
}