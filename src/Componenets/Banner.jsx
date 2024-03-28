import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="container mx-auto ">
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/Z10bC2m/2147845951.jpg" className="w-60 lg:max-w-sm rounded-lg shadow-2xl" />
    <div className="space-y-5">
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
    
      

      <Link to='/listed-books' 
      className="relative px-10 py-3 font-medium  text-white transition duration-300  rounded-md  ease">

        <button className="btn btn-outline btn-success mt-8">View The List</button>

      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;