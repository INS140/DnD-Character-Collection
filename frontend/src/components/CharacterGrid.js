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
        const foundCharacters = await get('/characters', localStorage.getItem('token'))

        console.log(foundCharacters)
  
        setCharacters(!foundCharacters ? mock : foundCharacters)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  const mock = [{
    id: 1,
    name: "Milguaar",
    image: "https://as2.ftcdn.net/v2/jpg/05/62/86/97/1000_F_562869742_exRn1yPPpH3LQ7QQ4bReEpcNZTfIQerj.jpg",
    classType: "High Elf Wizard",
    level: 1000000
  }, {
    id: 2,
    name: "Marth",
    image: "https://t4.ftcdn.net/jpg/03/95/07/45/360_F_395074522_KDR8Luffl4Rqh1I1ElQAV9e9W1EL1EJB.jpg",
    classType: "Ogre Brute",
    level: 93
  }, {
    id: 3,
    name: "Kennikith The Cunning",
    image: "https://assetsio.reedpopcdn.com/the-modern-day-thief-reboot-that-never-was-1440764496721.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    classType: "Thief Pick-Pocketer",
    level: 7021
  }, {
    id: 4,
    name: "Shaun",
    image: "https://t3.ftcdn.net/jpg/05/73/92/02/360_F_573920251_veCkGPsuqXwZ8pXOl1WulBjho09F3g7u.jpg",
    classType: "Great Knight",
    level: 487
  }]

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