import React from 'react'
import { Link } from 'react-router-dom'

const Songs = (props) => {
    const songs = props.songs
    
    return (
        <div className='grid grid-cols-2 gap-2'>
            {!songs?<h1 className='mx-auto text-3xl '>Sorry! No Songs Found</h1>:""}
            {songs.map((song)=>{
                return <Link to='/song' key={song.id_track} className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" onClick={()=>{props.fetchSong(song.api_lyrics)}}>
                <img className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={song.cover} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{song.artist}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{song.track}</p>
                </div>
            </Link>
            })}

        </div>
    )
}

export default Songs