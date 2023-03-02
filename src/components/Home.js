import Navbar from "../layouts/Navbar"

export default function Home() {
    return(
        <>
        <div class="grid grid-rows-3 grid-flow-col gap- font-link">
            <div class="row-span-3 ...">01</div>
            <div class="col-span-2 ...">02</div>
            <div class="row-span-2 col-span-2 ...">03</div>
        </div>
        <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div class="row-span-3 ...">01</div>
            <div class="col-span-2 ...">02</div>
            <div class="row-span-2 col-span-2 ...">03</div>
        </div>
        <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div class="row-span-3 ...">01</div>
            <div class="col-span-2 ...">02</div>
            <div class="row-span-2 col-span-2 ...">03</div>
        </div>
        </>
    )
}