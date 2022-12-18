import React, { useState } from 'react'
import data from './data'
function App() {
  const [text, setText] = useState(data)
  const handleGenerates = () => {}
  return (
    <section>
      <div className='section-center'>
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form className='lorem-form'>
          <label htmlFor='paragraphs' className='label'>
            Paragraphs:
          </label>
          <input type='number' id='paragraphs' />
          <button type='submit' className='btn' onClick={handleGenerates}>
            Generate
          </button>
        </form>
        <p>{text}</p>
      </div>
    </section>
  )
}

export default App
