import { Link } from 'react-router-dom';

export default function Navbar() {
    return (

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center sticky-top">
            <div class="container-fluid justify-content-center">
                <ul class="navbar-nav">
                    <li class="nav-item"> <Link to="/home" className="nav-link"> Home </Link> </li>
                    <li class="nav-item"> <Link to="/about" className="nav-link"> About </Link> </li>
                    <li class="nav-item"> About us </li>
                    <li class="nav-item"> Log Out </li>
                </ul>
            </div>
            <form class="d-flex">
                <button class="btn btn-primary" type="button">Search</button>
            </form>
        </nav>

    )
}