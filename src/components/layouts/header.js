import React, { useEffect, useState } from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useStateValue } from '../../StateProvider';
import { Link } from 'react-router-dom'

const Header = () => {
    const [{ cart }, dispatch] = useStateValue();
    const [mode, setMode] = useState('light')
    const updateTheme = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }
    useEffect(() => {
        updateTheme()
    }, [])

    const toggleDarkModeHandler = () => {
        const newMode = mode === "dark" ? "light" : "dark";
        localStorage.theme = newMode;
        setMode(newMode)
        updateTheme()
    }
    return (
        <>

            <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-gray-300">
                <div className='flex justify-between items-center'>
                    <div className='px-4'>
                        <svg onClick={toggleDarkModeHandler} className="block text-gray-500 dark:text-white cursor-pointer" width="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z"></path></svg>
                    </div>
                    <Link to="/" >
                        <div className="flex justify-center items-center"><StorefrontIcon fontSize='large' /><h2>Star Shop</h2></div>
                    </Link>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                    <path strokeLinecap="round" stroklinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                    <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 items-center">
                        <li>
                            <Link to="/login" className="md:p-4 py-2 block hover:text-purple-400">Sign In</Link>
                        </li>
                        <li>
                            <Link to="/register" className="md:p-4 py-2 block hover:text-purple-400 text-purple-500" >Sign Up</Link>
                        </li>
                        <li>
                            <Link to="cart" className='relative flex px-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="flex-1 w-8 h-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path strokeLinecap="round" stroklinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="absolute right-4 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center">{cart.length}</span>
                            </Link>
                        </li>

                    </ul>

                </div>

            </nav >







        </>

    )
}

export default Header







