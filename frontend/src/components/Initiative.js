import Modal from "./ui-kit/Modal"
import Input from "./ui-kit/Input"
import useFetch from "./custom-hooks/useFetch"
import { useState } from "react"
import { scoreToMod } from "../helper-functions"

export default function Initiative({ character, setCharacter }) {
  const { put } = useFetch('https://dnd-character-collection-backend.vercel.app')

  const [misc, setMisc] = useState(character.miscInit)

  const handleChange = e => {
    const { value } = e.target

    const bonus = value === ''
      ? ''
      : Number(value) > 30
        ? 30
        : Number(value) < -30
          ? -30
          : Number(value)

    setMisc(bonus)
  }

  const handleCancel = () => {
    setMisc(character.miscInit)
  }

  const handleSave = async () => {
    const { prof, init, ...charData } = character

    const updatedMiscInit = misc === '' ? 0 : misc

    const updatedCharacter = {
      ...charData,
      miscInit: updatedMiscInit
    }

    await put(`/characters/${character.id}`, updatedCharacter)

    setCharacter(updatedCharacter)

    setMisc(updatedMiscInit)
  }

  const mod = character.init + character.miscInit
  const dexMod = scoreToMod(character.dex)

  const tempMod = character.init + misc

  return <>
    <div
      data-bs-toggle="modal"
      data-bs-target="#updateInit"
    >
      <h3>Initiative</h3>
      <p>{mod > 0 && '+'}{mod}</p>
    </div>
    <Modal
      modalId="updateInit"
      header="Initiative"
      className="init-modal"
      closeModalText="Save"
      onCancelClick={handleCancel}
      onCloseClick={handleSave}
    >
      <div className="secondary stat mod">
        <h2>{tempMod > 0 && '+'}{tempMod}</h2>
      </div>
      <div className="secondary stat add-up">
        <div>
          <h3>Dexterity</h3>
          <p>{dexMod > 0 && '+'}{dexMod}</p>
        </div>
        <div>
          <h3>Misc Bonus</h3>
          <Input
            type="number"
            value={misc}
            onChange={handleChange}
            pattern="\d*"
          />
        </div>
      </div>
    </Modal>
  </>
}