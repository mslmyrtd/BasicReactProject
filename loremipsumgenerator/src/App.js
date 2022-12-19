import React, { useState } from 'react'
import data from './data'
function App() {
  const [text, setText] = useState([])
  const [count, setCount] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (amount <= 0) amount = 1
    if (count > 8) amount = 8
    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h3>tired OF BORING LOREM IPSUM?</h3>
      <form className='lorem-form'>
        <label htmlFor='paragraphs' className='label'>
          Paragraphs:
        </label>
        <input
          type='number'
          id='paragraphs'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn' onClick={handleSubmit}>
          Generate
        </button>
      </form>
      <article className='result'>
        {text.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default App
