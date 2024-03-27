import { Link } from "react-router-dom";


const ReadBook = ({book}) => {

    const  {image,bookName,author,rating,category,tags,id,yearOfPublishing,totalPages,publisher} = book;
    return (
        <div>
            
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-[200px]" src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>By: {author} </p>
        <div>
            <p>Tag </p>
            <p>Year of Publishing: {yearOfPublishing} </p>
        </div>
    <div>
    <p>Publisher:{publisher}</p>
    <p>Page {totalPages} </p>
    </div>
    <hr />
    <div className="card-actions ">
      <button className="btn btn-primary">Category: {category} </button>
      <button className="btn btn-primary">Rating: {rating}  </button>
      <Link to={`/book/${id}`}> <button className="btn btn-primary">View Details </button> </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReadBook;