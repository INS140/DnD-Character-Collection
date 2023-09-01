import { Input } from "./ui-kit"
import useFormHandler from "./custom-hooks/useFormHandler"
import useFetch from "./custom-hooks/useFetch"

export default function Currency({ character, setCharacter }) {
  const {currencies} = character

  const { put } = useFetch('https://dnd-character-collection-backend.vercel.app')

  const {inputs, setInputs} = useFormHandler({
    ...currencies
  })

  const handleChange = e => {
    const {name, value} = e.target

    const newValue = value === ''
      ? ''
      : Number(value) > 9999999
        ? 9999999
        : Number(value) < 0
          ? 0
          : Number(value)

    setInputs({...inputs, [name]: newValue})
  }

  const handleFocusOut = async e => {
    const {name, value} = e.target

    const {prof, init, ...charData} = character

    if (value === '') {
      setInputs({...inputs, [name]: currencies[name]})
      return
    }

    const updatedCurrencies = {
      ...inputs,
      [name]: Number(value)
    }

    const updatedCharacter = {
      ...charData,
      currencies: updatedCurrencies
    }

    await put(`/characters/${character.id}`, updatedCharacter)

    setCharacter({...updatedCharacter, prof, init})

    setInputs({...updatedCurrencies})
  }

  return <div className="currencies">
    {Object.keys(currencies).map(currency => {
      return <div key={currency} className="secondary currency">
        <h3>{currency.toUpperCase()}</h3>
        <Input
          type="number"
          name={currency}
          value={inputs[currency]}
          onChange={handleChange}
          onBlur={handleFocusOut}
          pattern="\d*"
        />
      </div>
    })}
  </div>
}