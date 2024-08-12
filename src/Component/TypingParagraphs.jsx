import React from 'react'
import SpeedTyping from '../SpeedTyping'
import { useLoaderData } from 'react-router-dom';

export function loadParaId({params})
{
  const id = params.paraId;
  return id;
}


const TypingParagraphs = () => {
  const id = useLoaderData();
  return (
    <div className='w-full flex flex-col items-center'>
      <h1 className='text-center font-bold text-3xl mb-8'>Typing Test</h1>
      <SpeedTyping i={id} />
    </div>
  )
}

export default TypingParagraphs