import { useState } from "react"
import { Button, Input, Modal } from "../ui-kit"
import useFormHandler from "../custom-hooks/useFormHandler"
import useFetch from "../custom-hooks/useFetch"
import { useNavigate } from "react-router-dom"

export default function HPDisplay({ character, setCharacter }) {
  const { put } = useFetch('https://dnd-character-collection-backend.vercel.app')

  const [ controls, setControls ] = useState({
    damage: true,
    heal: false,
    temp: false,
  })

  const { inputs, setInputs } = useFormHandler({
    damage: 0,
    heal: 0,
    temp: 0,
    maxHp: character.maxHp
  })

  const navigate = useNavigate()

  const handleChangeControls = e => {
    const { name } = e.target

    const updatedControls = {...controls}

    Object.keys(controls).forEach(control => {
      name === control
        ? updatedControls[control] = true
        : updatedControls[control] = false
    })

    setControls(updatedControls)
  }

  const handleChange = e => {
    const { name, value } = e.target

    const num = value === ''
      ? ''
      : Number(value) > 1000
        ? 1000
        : Number(value) < 0
          ? 0
          : Number(value)

    setInputs({...inputs, [name]: num})
  }

  const handleReset = (maxHp) => {
    setControls({
      damage: true,
      heal: false,
      temp: false,
    })
    setInputs({
      damage: 0,
      heal: 0,
      temp: 0,
      maxHp: maxHp ? maxHp : character.maxHp
    })
  }

  const handleButtonChange = (control, num) => {
    setInputs({...inputs, [control]: Math.max(inputs[control] + num, 0)})
  }

  const handleSave = async () => {
    const { prof, init, ...charData } = character

    try {
      const updatedCharacter = {
        ...charData,
        hp: Math.min(character.hp - Number(inputs.damage) + Number(inputs.heal), inputs.maxHp) + Number(inputs.temp),
        maxHp: inputs.maxHp
      }

      await put(`/characters/${character.id}`, updatedCharacter)

      setCharacter({...updatedCharacter, prof, init})

      handleReset(updatedCharacter.maxHp)
    } catch (err) {
      console.log('save error', err)
    }
  }

  return <>
    <div
      className="secondary stat hp"
      data-bs-toggle="modal"
      data-bs-target="#updateHP"
    >
      <div className="current">
        <h3>HP</h3>
        <p>{character.hp}</p>
      </div>
      <hr />
      <div className="max">
        <h4>Max HP</h4>
        <p>{character.maxHp}</p>
      </div>
    </div>
    <Modal
      modalId="updateHP"
      header="Update HP"
      className="hp-modal"
      closeModalText="Apply"
      onCancelClick={() => handleReset()}
      onCloseClick={handleSave}
    >
      <div className="stat info hp">
        <h2>{Math.min(character.hp - Number(inputs.damage) + Number(inputs.heal), inputs.maxHp) + Number(inputs.temp)}</h2>
      </div>
      <div className="stat info options">
        <div className="controls">
          <Button
            name="damage"
            className={controls.damage && 'selected'}
            onClick={handleChangeControls}
          >
            Damage
          </Button>
          <Button
            name="heal"
            className={controls.heal && 'selected'}
            onClick={handleChangeControls}
          >
            Heal
          </Button>
          <Button
            name="temp"
            className={controls.temp && 'selected'}
            onClick={handleChangeControls}
          >
            Temp
          </Button>
        </div>
        <hr />
        {Object.keys(controls).map(control => {
          const hidden = !controls[control] ? 'hidden' : ''

          return <div key={control} className={`input-display ${hidden}`}>
            <div className="buttons">
              <Button onClick={() => handleButtonChange(control, -10)}>- -</Button>
              <Button onClick={() => handleButtonChange(control, -1)}>-</Button>
            </div>
            <Input
              type="number"
              name={control}
              value={inputs[control]}
              onChange={handleChange}
              pattern="\d*"
            />
            <div className="buttons">
              <Button onClick={() => handleButtonChange(control, 10)}>+ +</Button>
              <Button onClick={() => handleButtonChange(control, 1)}>+</Button>
            </div>
          </div>
        })}
        </div>
      <div className="stat info max">
        <h3>Max HP</h3>
        <Input
          type="number"
          name="maxHp"
          value={inputs.maxHp}
          onChange={handleChange}
        />
      </div>
    </Modal>
  </>
}