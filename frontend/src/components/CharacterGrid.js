// map through list of characters to produce a grid item for each one

import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import CharGridItem from "./CharGridItem";
import NavBar from "./NavBar";

export default function CharacterGrid() {

  const [data, setData] = useState([])

  const mock = [{
    id: 1,
    name: "Milguaar",
    image: "https://as2.ftcdn.net/v2/jpg/05/62/86/97/1000_F_562869742_exRn1yPPpH3LQ7QQ4bReEpcNZTfIQerj.jpg",
    class: "High Elf Wizard",
    level: 1000000
  }, {
    id: 2,
    name: "Marth",
    image: "https://t4.ftcdn.net/jpg/03/95/07/45/360_F_395074522_KDR8Luffl4Rqh1I1ElQAV9e9W1EL1EJB.jpg",
    class: "Ogre Brute",
    level: 93
  }, {
    id: 3,
    name: "Kennikith The Cunning",
    image: "https://assetsio.reedpopcdn.com/the-modern-day-thief-reboot-that-never-was-1440764496721.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    class: "Thief Pick-Pocketer",
    level: 7021
  }]

  useEffect(() => {
    setData(mock)
  }, [])

  return (
    <div>
      <NavBar />
      <div class="grid">
        {!data.length ? <p>Loading...</p> : data.map(character => <CharGridItem key={character.id} character={character} />)}
        <div class="charGridItem">
          <h1 class="newCharItemText"><Link class="newCharItem" to="/create-character">+ Create New Character</Link></h1>
        </div>
      </div>
    </div>
  )
}