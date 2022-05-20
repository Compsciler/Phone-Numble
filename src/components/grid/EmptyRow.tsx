import { solution } from '../../lib/words'
import { Cell } from './Cell'
import { formatPhoneCells } from './Grid'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(solution.length))

  return (
    <div className="flex justify-center mb-1">
      {formatPhoneCells(emptyCells.map((_, i) => (
        <Cell key={i} />
      )))}
    </div>
  )
}
