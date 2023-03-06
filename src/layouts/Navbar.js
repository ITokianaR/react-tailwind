import { Link, NavLink } from 'react-router-dom';
import Switcher from '../hooks/switcher'

export default function Navbar() {
    const activeLink = " bg-black text-white";
    const normalLink = "";

    return (
        <nav className="bg-white px-2 sm:px-4 py-1 w-full z-20 sticky top-0 left-0 drop-shadow-lg dark:bg-black">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/" className="flex items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/6956/6956765.png" className="h-6 mr-3 sm:h-9 dark:bg-white" alt="Flowbite Logo"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Job-IT</span>
                </Link>
                <div className="flex md:order-2">
                    <div className=""> <Switcher /> </div>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 " aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-dark">
                    <li>
                        <NavLink 
                            to="/home"
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                        >
                            <p className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:hover:text-blue-700 md:bg-transparent md:p-0 md:dark:hover:text-white dark:text-gray-400" aria-current="page"> Home </p>
                        </NavLink>
                    </li>
                    <li>
                        <Link to="/student" className="block py-2 pl-3 pr-4 text-black rounded active:text-blue-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Students</Link>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tech</a>
                    </li>
                    <li>
                        <a href="/about" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}