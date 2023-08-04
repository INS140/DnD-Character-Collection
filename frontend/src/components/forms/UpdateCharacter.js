import Modal from "../ui-kit/Modal";
import Input from "../ui-kit/Input";
import useFormHandler from "../custom-hooks/useFormHandler";
import useFetch from "../custom-hooks/useFetch";
import Button from "../ui-kit/Button";
import TextArea from "../ui-kit/TextArea"
import { toTitleCase } from "../../helper-functions"
import ImagePreview from "../ImagePreview";

export default function UpdateCharacter({ character, setCharacter }) {
  const { put } = useFetch('https://dnd-character-collection-backend.vercel.app')

  const { inputs, setInputs } = useFormHandler({
    name: character.name,
    classType: character.classType,
    race: character.race,
    level: character.level,
    image: character.image,
    description: character.description
  })

  const handleChange = e => {
    const { name, value } = e.target

    const newValue = name !== 'level'
      ? value
      : value === ''
        ? ''
        : Number(value) > 20
          ? 20
          : Number(value) < 1
            ? 1
            : Number(value)

    setInputs({...inputs, [name]: newValue})
  }

  const handleCancel = () => {
    setInputs({
      name: character.name,
      classType: character.classType,
      race: character.race,
      level: character.level,
      image: character.image,
      description: character.description
    })
  }

  const handleSave = async () => {
    const { prof, init, ...charData } = character

    const updatedValues = {
      ...inputs,
      name: inputs.name === '' ? character.name : inputs.name,
      level: inputs.level === '' ? character.level : inputs.level,
      classType: inputs.classType === '' ? character.classType : inputs.classType.toLowerCase(),
      race: inputs.race === '' ? character.race : toTitleCase(inputs.race)
    }

    const updatedCharacter = {
      ...charData,
      ...updatedValues
    }

    try {
      await put(`/characters/${character.id}`, updatedCharacter)
    } catch (err) {
      console.log('save error', err)
    }

    setCharacter({...updatedCharacter, prof, init})

    setInputs(updatedValues)
  }

  const handleDisable = () => {
    return !Object.keys(inputs).every(input => {
      return input === "image" || input === "description" ? true : inputs[input] !== ""
    })
  }

  return <>
    <Button
      className="secondary edit-char"
      data-bs-toggle="modal"
      data-bs-target="#updateCharacter"
    >
      Edit
    </Button>
    <Modal
      modalId="updateCharacter"
      header="Update Character Info"
      className="update-char-modal"
      closeModalText="Save"
      onCancelClick={handleCancel}
      onCloseClick={handleSave}
      disableSubmit={handleDisable()}
    >
      <ImagePreview image={inputs.image} />
      <form autoComplete="off">
        <Input
          label="Image"
          name="image"
          value={inputs.image}
          onChange={handleChange}
        />
        <Input
          label="Name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          maxLength={40}
          required
        />
        <div className="sm-inputs">
          <Input
            label="Level"
            type="number"
            name="level"
            className="level"
            value={inputs.level}
            onChange={handleChange}
            pattern="\d*"
            required
          />
          <Input
            label="Race"
            labelClass="race"
            name="race"
            value={inputs.race}
            onChange={handleChange}
            required
          />
        </div>
        <Input
          label="Class"
          name="classType"
          value={inputs.classType}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <TextArea
          label="Description"
          name="description"
          value={inputs.description}
          onChange={handleChange}
          maxLength={250}
        />
      </form>
    </Modal>
  </>
}