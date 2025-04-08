import React from 'react'
import { Link } from "react-router";


type Props = {}

export const Home = (props: Props) => {
    return (
        <>
            <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg text-center fixed w-full top-0 z-50 transition-all duration-300 ease-in-out hover:shadow-xl">

            </header>
            <h1>Home</h1>
            <div>
                <Link to="/language">Language</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <img src="/src/assets/wip.jpg" alt="W.I.P." className='w-100 h-100' />

        </>
    )
}