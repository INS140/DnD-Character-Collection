import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function scoreToMod(score) {
  return Math.floor(score/2-5)
}

export function getProficiency(level) {
  return Math.ceil(level/4+1)
}

export function getTag(num) {
  const tags = {1: 'st', 2: 'nd', 3: 'rd', 4: 'th', 5: 'th', 6: 'th', 7: 'th', 8: 'th', 9: 'th'}
  return tags[num]
}

export function toTitleCase(str) {
  return str.split(/(?=[A-Z])/).map(w => w.split('').map((c, i) => i === 0 ? c.toUpperCase() : c.toLowerCase()).join('')).join(' ')
}

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return
}

export function getFullScore(score) {
  const convert = {
    str: "strength",
    dex: "dexterity",
    con: "constitution",
    int: "intelligence",
    wis: "wisdom",
    cha: "charisma"
  }

  return convert[score]
}