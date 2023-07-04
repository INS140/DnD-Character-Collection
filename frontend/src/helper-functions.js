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