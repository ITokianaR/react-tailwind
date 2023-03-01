import { Link } from 'react-router-dom';

export default function Login() {
    return(
        <div>
            <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <p className="text-3xl text-gray-700 font-bold mb-5">
                    Welcome!
                </p>
                <p className="text-gray-500 text-lg">
                    React and Tailwind CSS in action
                </p>
                <button type="button" className="btn btn-primary"> <Link to="/home"> Navigate </Link> </button>
            </div>
        </div>
    )
}