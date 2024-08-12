import React from 'react'
import { paragraphs } from '../assets'
import { Link } from 'react-router-dom';

const Paragraphs = () => {
  
  return (
    <section>
      <h1 className='text-3xl font-bold text-center mt-3'>Paragraphs</h1>
      <ol className='flex flex-col mt-3 text-lg list-disc'>
        {
          paragraphs.map((para) => {
            return (
              <li key={para.id}>
                <Link  className=' underline text-blue-600 hover:text-blue-400' 
                to={`../typing/${para.id}`}>{para.title}</Link>
              </li>
            );
          })
        }
      </ol>
    </section>
  )
}

export default Paragraphs