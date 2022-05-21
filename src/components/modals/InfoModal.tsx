import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose} isWide={true}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess my phone number in 8 tries. After each guess, the color of the tiles will
        change to show how close you are to calling me.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        My phone number uses the US format and can be any number 
        from 000-000-0000 to 999-999-9999.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="3"
          status="correct"
        />
        <Cell value="1" />
        <Cell value="4" />
        <Cell value='-' />
        <Cell value="1" />
        <Cell value="5" />
        <Cell value="9" />
        <Cell value='-' />
        <Cell value="2" />
        <Cell value="6" />
        <Cell value="5" />
        <Cell value="3" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The first digit 3 is in the number and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="2"
          status="present"
        />
        <Cell value="7" />
        <Cell value="1" />
        <Cell value='-' />
        <Cell value="8" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="2"
          status="present"
        />
        <Cell value="8" />
        <Cell value='-' />
        <Cell value="1" />
        <Cell value="8" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="2"
          status="absent"
        />
        <Cell value="8" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The digit 2 appears exactly twice in the number but not in the first or fifth (or ninth) spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="3" />
        <Cell value="8" />
        <Cell value="1" />
        <Cell value='-' />
        <Cell value="6" />
        <Cell value="5" />
        <Cell value="4" />
        <Cell value='-' />
        <Cell value="7" />
        <Cell value="2" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="9"
          status="absent"
        />
        <Cell value="0" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The digit 9 is not in the number in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/Compsciler/Wordle-With-Score-Database/"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
