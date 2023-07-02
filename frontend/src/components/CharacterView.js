// individual character page
// will have a react-router outlet for displaying the different character pages (ie overview, stats, inventory, etc)
// fetch individual character data

import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import useFetch from './custom-hooks/useFetch'

export default function CharacterView() {
  const { get } = useFetch() // need url

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

  return (
    <div>
      <h1>{mock.name}</h1>
      <Outlet />
    </div>
  )
}