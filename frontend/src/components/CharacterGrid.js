import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import CharGridItem from "./CharGridItem";

export default function CharacterGrid() {

  const [data, setData] = useState([])

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

  useEffect(() => {
    setData(mock)
  }, [])
 
  return <div className="grid-container">
    <div className="grid">
      {!data.length ? <></> : data.map(character => <CharGridItem key={character.id} character={character} />)}
      <Link className="newCharItem" to="/create-character">
        <div className="charGridItem">
          <h2 className="newCharItemText">+ Create New Character</h2>
        </div>
      </Link>
    </div>
  </div>
}