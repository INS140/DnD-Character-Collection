import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import CharGridItem from "./CharGridItem";
import useFetch from "./custom-hooks/useFetch";
import { CurrentUser } from "./context/currentUser";

export default function CharacterGrid() {
  const { get, remove } = useFetch('http://localhost:5000')

  const { currentUser } = useContext(CurrentUser)

  const [characters, setCharacters] = useState([])

  const navigate = useNavigate()

  const handleDelete = async (id) => {
    await remove(`/characters/${id}`)
    navigate('/characters')
  }

  useEffect(() => {
    (async () => {
      try {
        const data = await get('/characters', localStorage.getItem('token'))
        setCharacters(data)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return <div className="grid-container">
    { !currentUser
      ? <h2 className="text-center secondary-color">
        <Link className="text-decoration-none white" to="/login">Login</Link>
        &nbsp;to see your characters, or sign up &nbsp;
        <Link className="text-decoration-none white" to="/signup">here</Link>!
      </h2>
      : <>
        { !characters.length
          ? <h2 className="text-center secondary-color">Seems you don't have any characters yet! &nbsp;
            <Link className="text-decoration-none" to="/create-character">Create your first character now!</Link>
          </h2>
          : <div className="grid">
            {characters.map(character => <CharGridItem key={character.id} character={character} handleDelete={handleDelete}/>)}
            <Link className="newCharItem" to="/create-character">
            <div className="charGridItem">
              <h2 className="newCharItemText">+ Create New Character</h2>
            </div>
            </Link>
          </div>
        }
      </>
    }
  </div>
}