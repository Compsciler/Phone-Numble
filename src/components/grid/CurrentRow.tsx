import { Cell } from './Cell'
import { formatPhoneCells } from './Grid'
import { unicodeSplit } from '../../lib/words'

type Props = {
  guess: string
  solution: string
  className: string
}

export const CurrentRow = ({ guess, solution, className }: Props) => {
  const splitGuess = unicodeSplit(guess)
  const emptyCells = Array.from(Array(solution.length - splitGuess.length))
  const classes = `flex justify-center mb-1 ${className}`

  const cells = splitGuess.map((letter, i) => (
    <Cell key={i} value={letter} />
  )).concat(
    emptyCells.map((_, i) => (
      <Cell key={splitGuess.length + i} />
    )))
  return (
    <div className={classes}>
      {formatPhoneCells(cells)}
    </div>
  )
}
