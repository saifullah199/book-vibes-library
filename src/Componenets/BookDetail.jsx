import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveReadBooks } from "../utilitys/localStorage";

const BookDetail = () => {
    const books = useLoaderData ();
    const {id} = useParams()
    const idInt = parseInt(id);
    const book = books.find(book =>book.id === idInt);
    console.log( book);

    const handleRead =() =>{
      saveReadBooks(id);
      toast('you have added to read books successfully')
    }
    const handleWishList =() =>{
      saveReadBooks(id);
      toast('you have added to Wishlist successfully')
    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <div>
  <figure>
    <img className="" src={book.image} alt="Album"/>
    </figure>
  </div>
  <div className="card-body">
    <h2 className="card-title">{ book.bookName}</h2>
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
      <button onClick={() => handleRead(book)} className="btn btn-primary"> Read</button>
      <button onClick={handleWishList} className="btn btn-primary">WishList</button>
    </div>
  </div>
</div>

<ToastContainer />
        </div>
    );
};

export default BookDetail;