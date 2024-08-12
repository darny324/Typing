import React from 'react'

const TypingArea = ({
  typingText, 
  resetTyping, 
  time, 
  CPM, 
  WPM, 
  mistakes
}) => {
  return (
    <div className=''>
      <div className='border-b pb-3  border-b-slate-400'>
        <p>{typingText}</p>
      </div>
      <div className='mt-3 flex text-lg'>
        <ul className='flex flex-1 justify-between mr-8'>
          <li>
            Time: <br/>{time}s
          </li>

          <li>
            Mistakes: <br/>{mistakes}
          </li>

          <li>
            CPM: <br/>{CPM}
          </li>

          <li>
            WPM: <br/>{WPM}
          </li>
        </ul>
        <button onClick={resetTyping} className='
        px-3 py-2 rounded-lg bg-blue-500 text-white text-md cursor-pointer hover:bg-blue-400
        '>Try Again</button>
      </div>
    </div>
  )
}

export default TypingArea