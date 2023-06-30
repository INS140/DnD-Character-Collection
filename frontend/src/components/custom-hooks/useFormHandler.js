import { useState } from "react";

export default function useFormHandler(values) {
  const [inputs, setInputs] = useState(values)

  const handleChange = e => {
    const { value, name } = e.target
    
    setInputs({...inputs, [name]: value})
  }

  const handleCheckboxChange = e => {
    const { name } = e.target
    const [ obj, key ] = name.split(' ')
    const value = inputs[obj][key]

    setInputs({...inputs, [obj]: {...inputs[obj], [key]: !value }})
  }

  return { inputs, handleChange, handleCheckboxChange }
}