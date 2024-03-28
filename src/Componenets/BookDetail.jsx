import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveReadBooks } from "../utilitys/localStorage";
import { saveBook } from "../utilitys";

const BookDetail = () => {
    const books = useLoaderData ();
    const {id} = useParams()
    const idInt = parseInt(id);
    const book = books.find(book =>book.id === idInt);
    // console.log( book);

    const handleRead =(book) =>{
      // saveReadBooks(id);
      // toast('you have added to read books successfully')
      saveBook(book)
    }
    const handleWishList =() =>{
      // saveReadBooks(id);
      // toast('you have added to Wishlist successfully')
      saveBook(book)
    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <div>
  <figure>
    <img className="w-[500px]" src={book.image} alt="Album"/>
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
      
        
        <button onClick={()=> handleRead(book)} className="btn btn-outline btn-accent"> Read</button>
      
      <button onClick={() => handleWishList(book)} className="btn btn-outline btn-info">WishList</button>
    </div>
  </div>
</div>

<ToastContainer />
        </div>
    );
};

export default BookDetail;