import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [menu, setmenu] = useState("hidden")
    const [blue, setblue] = useState("home")
    return (
        // <div className=' '>
            <nav className="bg-white   border-black-200 shadow-lg shadow-gray-900 dark:bg-black ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/icons8-resume-48.png" className="h-8" alt="RForge Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RForge</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" onClick={() => menu === "hidden" ? setmenu("block") : setmenu("hidden")} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-500 rounded-lg md:hidden hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-black-200 dark:text-black-400 dark:hover:bg-black-700 dark:focus:ring-black-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`${menu} relative z-50 w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0mt-4 border border-black-100 rounded-lg bg-black-50 md:flex-row md:items-center md:justify-center md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-black">
                            <li>
                                <NavLink to='/RForge' className={blue!=="home"?`block py-2 px-3 text-white  md:bg-transparent  md:p-0 dark:text-white hover:dark:text-blue-500`:
                                "bg-blue-700 rounded  md:text-blue-700 block py-2 px-3 text-white  md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"} onClick={()=>setblue('home')} aria-current="page">Home</NavLink>
                                {/*  */}
                            </li>
                            <li>
                                <NavLink to='/about' className={blue!=="about"?`block py-2 px-3 text-white  md:bg-transparent  md:p-0 dark:text-white hover:dark:text-blue-500`:
                                "bg-blue-700 rounded  md:text-blue-700 block py-2 px-3 text-white  md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"} onClick={()=>setblue('about')}>About</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        // </div>
    )
}

export default Navbar