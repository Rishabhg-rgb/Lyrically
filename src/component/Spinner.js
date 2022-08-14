import React from 'react'
import loading from './Spinner.gif'
const Spinner = () => {
  return (
    <div className='h-screen m-auto flex'>
        <img src={loading} alt=""  className='m-auto'/>
    </div>
  )
}

export default Spinner