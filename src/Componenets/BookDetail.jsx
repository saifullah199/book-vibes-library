import { useLoaderData, useParams } from "react-router-dom";


const BookDetail = () => {
    const books = useLoaderData ();
    const {id} = useParams()
    const idInt = parseInt(id);
    const book = books.find(book =>book.id === idInt);
    console.log( book);
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <div>
  <figure>
    <img className="w" src={book.image} alt="Album"/>
    </figure>
  </div>
  <div className="card-body">
    <h2 className="card-title">{book.bookName}</h2>
    <p>By: {book.author} </p>
    <hr />
    <p> {book.category} </p>
    <hr />
    <p>Review:  {book.review} </p>
    <p>Tag:</p>
    <p>Number of Pages:{book.totalPages} </p>
    <p>Publisher:{book.totalPages} </p>
    <p>Year of Publishing:{book.yearOfPublishing} </p>
    <p>Rating:{book.rating} </p>
    <div className="card-actions ">
      <button className="btn btn-primary">Read</button>
      <button className="btn btn-primary">WishList</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetail;