import { useOutletContext } from "react-router-dom"
import HPDisplay from "./HPDisplay"
import Skills from "./Skills"
import AbilityScores from "./AbilityScores"
import PassiveStat from "./PassiveStat"
import Initiative from "./Initiative"
import Input from "./ui-kit/Input"
import useFormHandler from "./custom-hooks/useFormHandler"
import useFetch from "./custom-hooks/useFetch"

export default function Stats() {
  const { put } = useFetch('https://dnd-character-collection-backend.vercel.app')

  const { character, setCharacter } = useOutletContext()

  const { inputs, handleChange, setInputs } = useFormHandler({
    ac: character.ac,
    hitDice: character.hitDice,
    speed: character.speed
  })

  const handleNumberChange = e => {
    const { name, value } = e.target

    const max = name === 'ac' ? 50 : 999
    const min = name ===  'ac' ? -50 : -999

    const num = value === ''
      ? ''
      : Number(value) > max
        ? max
        : Number(value) < min
          ? min
          : Number(value)

    setInputs({...inputs, [name]: num})
  }

  const handleFocusOut = async e => {
    const { name, value } = e.target

    const { prof, init, ...charData } = character

    if (value === '') {
      setInputs({...inputs, [name]: character[name]})
      return
    }

    const newValue = name === 'hitDice' ? value : Number(value)

    const updatedCharacter = {
      ...charData,
      [name]: newValue
    }

    await put(`/characters/${character.id}`, updatedCharacter)

    setCharacter({...updatedCharacter, prof, init})

    setInputs({...inputs, [name]: newValue})
  }

  return <div className="stats">
    <h1>Stats</h1>
    <hr />
    <div className="genStats">
      <div className="secondary stat ac">
        <h3>AC</h3>
        <Input
          type="number"
          name="ac"
          value={inputs.ac}
          onChange={handleNumberChange}
          onBlur={handleFocusOut}
          pattern="\d*"
        />
      </div>
      <HPDisplay character={character} setCharacter={setCharacter} />
      <div className="secondary stat hd">
        <h3>Hit Dice</h3>
        <Input
          name="hitDice"
          value={inputs.hitDice}
          onChange={handleChange}
          onBlur={handleFocusOut}
        />
      </div>
    </div>
    <div className="other secondary stat">
      <div>
        <h3>Speed</h3>
        <Input
          type="number"
          name="speed"
          value={inputs.speed}
          onChange={handleNumberChange}
          onBlur={handleFocusOut}
          pattern="\d*"
        />
      </div>
      <Initiative character={character} setCharacter={setCharacter} />
      <div>
        <h3>Proficiency</h3>
        <p>+{character.prof}</p>
      </div>
      <PassiveStat character={character} setCharacter={setCharacter} />
    </div>
    <h2>Ability Scores</h2>
    <hr />
    <AbilityScores character={character} setCharacter={setCharacter} />
    <h2>Skills</h2>
    <hr />
    <Skills character={character} setCharacter={setCharacter} />
  </div>
}