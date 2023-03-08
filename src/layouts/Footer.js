export default function Footer() {
    return(
    <footer class="p-4 sticky bottom-0 bg-black shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-300">
            <span class="text-sm text-white sm:text-center dark:text-black">© 2023 <a href="https://flowbite.com/" class="hover:underline">FlexCorp™</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-white dark:text-black sm:mt-0">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
    </footer>)
}