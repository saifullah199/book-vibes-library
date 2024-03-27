import {useState,  useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../utilitys/localStorage";
import Book from "./Book";
import { getBooks } from "../utilitys";

import ReadBook from "./ReadBook";


const ReadBooks = () => {
    // const books = useLoaderData();
    // const [readBooks, setReadBooks] = useState([])
    // useEffect(()=>{
    //     const storedBookIds = getStoredBook();
    //     if(books.length >0 ){
    //         // const booksRead = books.filter (book => storedBookIds.includes(book.id))
    //         const booksRead =[]
    //         for (const id of storedBookIds){
    //             const book = books.find(book => book.id=== id)
    //             if(book){
    //                 booksRead.push(book)
    //             }
    //         }
    //         setReadBooks(booksRead)
    //         // console.log(books,storedBookIds,booksRead)
    //     }
    // },[])

    const [books, setBooks] = useState([])
    useEffect(()=>{
        const storedBooks = getBooks()
        setBooks(storedBooks)
    },[])
    return (
        <div>
            <div className="grid gap-4">
                    {
                        books.map(book => <ReadBook key={book.bookid} book={book}></ReadBook>)
                    }
                </div>
        </div>
    );
};

export default ReadBooks;