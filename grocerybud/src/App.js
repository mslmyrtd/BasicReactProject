import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      // display alert
      showAlert(true, 'please enter value', 'danger')
    } else if (name && isEditing) {
      //do Something
    } else {
      showAlert(true, 'item added to the list', 'success')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, type, msg })
  }
  const clearList = () => {
    showAlert(true, 'empty list', 'danger')
    setList([])
  }
  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger')
    setList(list.filter((item) => item.id !== id))
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)

    // showAlert(true, 'item removed', 'danger')
    // setList(list.filter((item) => item.id !== id));
  }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            type='text'
            placeholder='e.g. eggs'
            className='grocery'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button className='submit-btn' onClick={handleSubmit} type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            Clear İtems
          </button>{' '}
        </div>
      )}
    </section>
  )
}

export default App
