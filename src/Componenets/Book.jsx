import { Link } from "react-router-dom";


const Book = ({book}) => {

  const  {image,bookName,author,rating,category,tags,id} = book;
    return (
        <Link to={`/book/${id}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>By:{author}</p>
    <hr />
    <div className=" flex justify-between card-actions ">
      <p>{category}</p>
      <p>{rating}</p>
    </div>
  </div>
    </div>
        </Link>
    );
};

export default Book;