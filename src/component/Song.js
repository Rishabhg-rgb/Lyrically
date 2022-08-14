import React from 'react'

const Song = (props) => {
    const {particularSong} = props
    if(particularSong.lyrics){
    document.querySelector('.lyrics').innerHTML=`${particularSong.lyrics.replaceAll('\n','</br>')}`
    
    }
    else{

    }
  return (
    <div className='overflow-x-hidden'>
        <p className='lyrics m-10'></p>
    </div>
  )
}

export default Song