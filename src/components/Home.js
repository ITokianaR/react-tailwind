//Home page
import Footer from '../layouts/Footer'

export default function Home() {
    return(
        <>

        <div className="container mx-auto py-5 px-80">
            <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Welcome to Job-IT</h1>
        </div>
        
        <div className="container mx-auto py-0 px-10 mt-2 md:px-80 md:mx-auto"> 
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-white dark:hover:bg-white">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" src="http://unblast.com/wp-content/uploads/2020/05/Job-Interview-Illustration.jpg" alt=""/>
            <div class="flex flex-col justify-between p-2 leading-normal">
                <h5 class="mx-auto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Job-IT</h5>
                <p class="mb-3 justify-self-auto font-normal text-gray-700 dark:text-black">The right solution for the needs of your society in terms of young and promising talents.</p>
                <p class="mb-5 font-normal text-gray-700 dark:text-black">Our platform can provide to you countless talented students.</p>
            </div>
        </div>
        </div>

        <div className="container mx-auto py-5 px-10 mt-3.5 md:px-80 md:mx-auto"> 
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-white dark:hover:bg-white">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" src="http://unblast.com/wp-content/uploads/2020/05/Job-Hunting-Illustration.jpg" alt=""/>
            <div class="flex flex-col justify-between p-2 leading-normal">
                <h5 class="mx-auto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Offers</h5>
                <p class="mb-5 font-normal text-gray-700 dark:text-black">We offer alternating contracts with a reasonable pricing.</p>
                <p class="mb-3 justify-self-auto font-normal text-gray-700 dark:text-black">Many future employees are waiting for you. Good hunting, sir !</p>
            </div>
        </div>
        </div>

        <Footer />

        </>
    )
}