const letters = 'abcdefghijklmnopqrstuvwxyz'

function numValidWords(words, puzzles) {
  return puzzles.map(puzzle => checkPuzzle(words, puzzle))
}

function checkPuzzle(words, puzzle) {
  const disAllowed = {}
  for (let index = 0; index < letters.length; index++) {
    const letter = letters[index]
    if (!puzzle.includes(letter)) {
      disAllowed[letter] = true
    }
  }
  let count = 0
  words.forEach(word => {
    if (goodWord(word, disAllowed, puzzle)) {
      count++
    }
  })
  return count
}

function goodWord(word, disAllowed, puzzle) {
  for (let index = 0; index < word.length; index++) {
    const letter = word[index]
    if (disAllowed[letter]) return false
  }
  if (!word.includes(puzzle[0])) return false
  return true
}

const words = []
const puzzles = []

for (let index = 0; index < 2000000; index++) {
  words.push(makeWord())
}

for (let index = 0; index < 100; index++) {
  puzzles.push(makePuzzle())
}

function makeWord() {
  let randomLength = Math.floor(Math.random() * 6) + 7
  let word = ''
  for (let index = 0; index < randomLength; index++) {
    let randomLetter = Math.floor(Math.random() * 26)
    word += letters[randomLetter]
  }
  return word
}

function makePuzzle() {
  let puzzle = ''
  for (let index = 0; index < 7; index++) {
    let randomLetter = Math.floor(Math.random() * 26)
    puzzle += letters[randomLetter]
  }
  return puzzle
}

console.log(numValidWords(words, puzzles))
