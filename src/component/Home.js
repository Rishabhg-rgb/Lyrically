import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    const [songSearch, setSongSearch] = useState("")
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 '>
            <h1 className='text-5xl float-left font-medium tracking-tighter text-white mx-2 '>Millions of Songs Search Your Favourite Song Lyrics</h1>

            <form className='mt-10 w-4/5 lg:hidden' >
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" value={songSearch} className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your Songs..." required onChange={(e)=>{setSongSearch(e.target.value)}} />
                    <button type="submit" onClick={(e)=>{e.preventDefault()||props.fetchSongDetail(songSearch)}} className="text-white absolute right-2.5 bottom-2.5 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"><Link to='/songs'>Search</Link></button>
                </div>
            </form>

        </div>
    )
}

export default Home
