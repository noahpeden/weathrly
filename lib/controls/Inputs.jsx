import React from 'react'

export const Inputs = (props) => {
  const { location, usersInput, setLocation, getApiLocation } = props
  return (
    <div>
      <input
        placeholder='location'
        value = {usersInput}
        className ='main-input'
        onChange={(event) => setLocation(event)}
        />
      <input
        type='submit'
        className='submit-btn'
        onClick= { (e) => { getApiLocation(e) } }
        disabled = {!usersInput}
        />
    </div>
  )
}
