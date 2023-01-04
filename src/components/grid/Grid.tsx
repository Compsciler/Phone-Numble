import { MAX_CHALLENGES } from '../../constants/settings'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'
import { Cell } from './Cell'

type Props = {
  solution: string
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
  currentRowClassName: string
}

export const Grid = ({
  solution,
  guesses,
  currentGuess,
  isRevealing,
  currentRowClassName,
}: Props) => {
  const empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length))
      : []

  return (
    <div className="mb-4">
      {guesses.map((guess, i) => (
        <CompletedRow
          key={i}
          solution={solution}
          guess={guess}
          isRevealing={isRevealing && guesses.length - 1 === i}
        />
      ))}
      {guesses.length < MAX_CHALLENGES && (
        <CurrentRow guess={currentGuess} solution={solution} className={currentRowClassName} />
      )}
      {empties.map((_, i) => (
        <EmptyRow solution={solution} key={i} />
      ))}
    </div>
  )
}

export const formatPhoneCells = (cells: JSX.Element[]) => {
  if (cells.length != 10) {
    throw new Error("Must have 10 cell digits for phone number")
  }
  const phone_cells = cells.slice(0, 3)
  phone_cells.push(<Cell value='-' isCompleted={true} key={10} />)
  phone_cells.push(...cells.slice(3, 6))
  phone_cells.push(<Cell value='-' isCompleted={true} key={11} />)
  phone_cells.push(...cells.slice(6, 10))
  return phone_cells
}
