//Home page
import Footer from '../layouts/Footer'
import Switcher from '../hooks/switcher'

export default function Home() {
    return(
        <div className="dark:bg-black">

        <div className="container mx-auto py-5 px-80">
            <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome to Job-IT</h1>
        </div>
        
        <div className="container mx-auto py-0 px-10 mt-2 md:px-80 md:mx-auto"> 
        <div class="flex flex-col items-center bg-white border dark:bg-black border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" src="http://unblast.com/wp-content/uploads/2020/05/Job-Interview-Illustration.jpg" alt=""/>
            <div class="flex flex-col justify-between p-2 leading-normal">
                <h5 class="mx-auto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Job-IT</h5>
                <p class="mb-3 justify-self-auto font-normal text-gray-700 dark:text-white">The right solution for the needs of your society in terms of young and promising talents.</p>
                <p class="mb-5 font-normal text-gray-700 dark:text-white">Our platform can provide to you countless talented students.</p>
            </div>
        </div>
        </div>

        <div className="container mx-auto py-5 px-10 mt-3.5 md:px-80 md:mx-auto"> 
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:hover:bg-gray-600">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" src="http://unblast.com/wp-content/uploads/2020/05/Job-Hunting-Illustration.jpg" alt=""/>
            <div class="flex flex-col justify-between p-2 leading-normal">
                <h5 class="mx-auto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Offers</h5>
                <p class="mb-5 font-normal text-gray-700 dark:text-white">We offer alternating contracts with a reasonable pricing.</p>
                <p class="mb-3 justify-self-auto font-normal text-gray-700 dark:text-white">Many future employees are waiting for you. Good hunting, sir !</p>
            </div>
        </div>
        </div>

        <Footer />

        </div>
    )
}