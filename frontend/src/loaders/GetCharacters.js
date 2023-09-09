import useFetch from "../custom-hooks/useFetch"

export default async function GetCharacters() {
  const { get } = useFetch('https://dnd-character-collection-backend.vercel.app')

  let data, error = null

  try {
    data = await get('/characters', localStorage.getItem('token'))
  } catch (err) {
    error = err
    console.log(err)
  }

  return { data, error }
}