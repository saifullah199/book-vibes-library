import { ToastContainer, toast } from 'react-toastify';

export const getBooks = () => {
    let books = []
    const storedBooks = localStorage.getItem('books')
    if (storedBooks){
        books = JSON.parse(storedBooks)
    }
    return books
}
export const saveBook = book =>{
    let books = getBooks()
    const isExist = books.find(b => b.id === book.id)
    if (isExist){
        return toast.error('Already added to read')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book Added Successfully')
}