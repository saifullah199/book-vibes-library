import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center text-2xl">
            <h3>Oopps !!</h3>
            <p>Page not found </p>
            <Link to='/'> <button className="btn">Go back to home</button></Link>
        </div>
    );
};

export default Error;