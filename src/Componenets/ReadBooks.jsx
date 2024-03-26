import {useState,  useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../utilitys/localStorage";


const ReadBooks = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([])
    useEffect(()=>{
        const storedBookIds = getStoredBook();
        if(books.length >0 ){
            // const booksRead = books.filter (book => storedBookIds.includes(book.id))
            const booksRead =[]
            for (const id of storedBookIds){
                const book = books.find(book => book.id=== id)
                if(book){
                    booksRead.push(book)
                }
            }
            setReadBooks(booksRead)
            // console.log(books,storedBookIds,booksRead)
        }
    },[])
    return (
        <div>
            <h3>Reading books{readBooks.length}</h3>
        </div>
    );
};

export default ReadBooks;