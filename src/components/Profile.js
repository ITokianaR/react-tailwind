import Footer from "../layouts/Footer";
export default function Profile() {
    return(
        <div class="dark:bg-black">
           <div className="container mx-auto py-5 px-80">
                <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your profile</h1>
            </div>
            <Footer />
        </div>
    )
}