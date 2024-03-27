import {useState,  useEffect } from "react";


import { getBooks } from "../utilitys";
import ReadBook from "./ReadBook";

const Wishlist = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        const storedBooks = getBooks()
        setBooks(storedBooks)
    },[])
    return (
        <div>
            <div className="grid  gap-4">
                    {
                        books.map(book => <ReadBook key={book.bookid} book={book}></ReadBook>)
                    }
                </div>
        </div>
    );
};

export default Wishlist;