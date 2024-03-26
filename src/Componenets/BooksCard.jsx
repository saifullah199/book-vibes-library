import { useEffect, useState } from "react";
import Book from "./Book";

const BooksCard = () => {
    const [books, setBooks] = useState([])

    useEffect(() =>{
        fetch('Book.json')
        .then(res => res.json())
        .then (data => setBooks(data));
    },[])
    return (
        <div>
                <div className="text-center mt-5">
                    <h3 className="text-4xl font-bold"> Books {books.length}</h3>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {
                        books.map(book => <Book key={book.bookid} book={book}></Book>)
                    }
                </div>
        </div>
    );
};

export default BooksCard;