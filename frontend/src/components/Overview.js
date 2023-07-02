// character image
// base stats
// description
// name

import { useState, useEffect } from 'react' 

export default function Overview( ) {

  const [data, setData] = useState()

  const mock = {
    id: 1,
    name: "Milguaar",
    image: "https://as2.ftcdn.net/v2/jpg/05/62/86/97/1000_F_562869742_exRn1yPPpH3LQ7QQ4bReEpcNZTfIQerj.jpg",
    classType: "High Elf Wizard",
    level: 1000000
  }

  useEffect(() => {
    setData(mock)
  }, [])

  return <div class="overview">
  <img src={mock.image}/>
  <h2>{mock.classType}</h2>
  <h2>{mock.level}</h2>
</div>
}