import Footer from "../layouts/Footer";
import Itokiana from "../assets/itokiana.jpg";

import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

export default function Details() {
    const{id} = useParams()
    const [character, setCharacters] = useState([])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
            setCharacters(res.data)
            console.log(res)
        }, [id])
    })
    return(
        <div class="dark:bg-black">
         <div className="container mx-auto py-2 px-80">
                
        </div>

        <div class="w-fit container mx-auto mt-2 grid grid-cols-1 md:grid-cols-2 gap-3"> 
        
            <div
                class="col-span-2 mb-4 mx-auto flex flex-col items-center max-w-lg bg-white rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                key={character.id}
            >
                <img class="p-4 w-36 h-36 mb-3 rounded-full" src={character.image} alt=""/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{character.name}</h5>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">RAMANANKIRAHINA</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">{character.species}</p>
                </div>
            </div>

            <div class="block mx-auto mb-4 max-w-sm p-6 bg-white border border-black rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-center md:text-right text-gray-900 dark:text-white">About me</h5>
                <p class="font-normal text-center md:text-justify text-gray-700 dark:text-gray-400">Motivated student, waiting for the right opportunity for my career.</p>
            </div>

            <div class="block mx-auto mb-4 max-w-sm p-6 bg-white border border-black rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-center md:text-left text-gray-900 dark:text-white">Contact</h5>
                <p class="font-normal text-center md:text-justify text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>

            <div class="block mx-auto mb-4 max-w-sm p-6 bg-white border border-black rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-center md:text-right text-gray-900 dark:text-white">Skills</h5>
                <p class="font-normal text-center md:text-justify text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>

            <div class="block mx-auto mb-4 max-w-sm p-6 bg-white border border-black rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-center md:text-left text-gray-900 dark:text-white">About me</h5>
                <p class="font-normal text-center md:text-justify text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            
    
        </div>
        
            <Footer />
        </div>
    )
}