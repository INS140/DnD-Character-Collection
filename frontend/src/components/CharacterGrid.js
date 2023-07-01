import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import CharGridItem from "./CharGridItem";
import useFetch from "./custom-hooks/useFetch";
import { CurrentUser } from "./context/currentUser";

export default function CharacterGrid() {
  const { get } = useFetch('http://localhost:5000')

  const { currentUser } = useContext(CurrentUser)

  const [characters, setCharacters] = useState([])

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
      ? <h2 className="text-center">
        <Link className="text-decoration-none secondary-color" to="/login">Login</Link>
        &nbsp;to see your characters, or sign up &nbsp;
        <Link className="text-decoration-none secondary-color" to="/signup">here</Link>!
      </h2>
      : <>
        { !characters.length
          ? <p className="text-center">Whoops! Seems you don't have any characters yet! &nbsp;
            <Link className="text-decoration-none secondary-color" to="/create-character">Create your first character now!</Link>
          </p>
          : <div className="grid">
            {characters.map(character => <CharGridItem key={character.id} character={character} />)}
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