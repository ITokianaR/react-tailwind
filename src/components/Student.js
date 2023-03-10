import { Link, useParams } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from "axios"
import Footer from "../layouts/Footer"
import ReactPaginate from 'react-paginate';

export default function Student() {
    const [characters, setCharacters] = useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const charactersPerPage = 4;
    const pagesVisited = pageNumber * charactersPerPage;

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber+1}`).then((res) => {
          setCharacters(res.data.results)
          console.log(res)
        });
      }, [pageNumber]);      

    return(
        <div class=" dark:bg-black">
            <div className="container mx-auto py-5 px-80">
                <div className="mx-auto"> 
                    <h1 class="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">List of students</h1>
                </div>
            </div>

        <div className = "grid grid-cols-1 md:grid-cols-4 gap-0 px-16"> 
        {characters.map((character) => {
            return(
            <div className="container mx-auto"> 
                <div class="w-5/12 md:w-4/5 max-w-sm mt-2 mb-2 bg-white border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-end px-4 pt-4">
                        <button
                            id="dropdownButton"
                            data-dropdown-toggle="dropdown"
                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                            type="button"
                        >
                            <span class="sr-only">Open dropdown</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                        </button>
                        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col items-center pb-5" key={character.id}>
                            <img class="w-40 h-40 mb-3 rounded-full shadow-lg" src={character.image} alt="Bonnie image"/>
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{character.name}</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">{character.species}</span>
                        <div class="flex mt-4 space-x-3 md:mt-6">
                            <Link to={`/student/details/${character.id}`}>
                                <a class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Details
                                </a>
                            </Link>

                            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                        </div>
                    </div>
                </div>
                    
            </div>
        )
            })}
        
        </div>
        <div className="flex justify-center">
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                pageCount={20}
                onPageChange={changePage}
                containerClassName={'flex pt-4 pb-2 space-x-2 justify-center items-center text-gray-900 dark:text-white'}
                previousLinkClassName={'px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer'}
                nextLinkClassName={'px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer'}
                disabledClassName={'opacity-50 cursor-not-allowed'}
                activeClassName={'bg-blue-500 text-white dark:text-black px-2 py-1 rounded-md cursor-pointer'}
            />
        </div>

        <Footer/>
        </div>
    )
}