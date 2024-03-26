const getStoredBook =() =>{
    const storedBook = localStorage.getItem('read-books');
    if(storedBook){
        return JSON.parse(storedBook)
    }
    return[];
}

const saveReadBooks = id =>{
    const storedBooks = getStoredBook();
    const exists = storedBooks.find(bookId => bookId ===id);
    if(!exists){
        storedBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedBooks))
    }
}

export {getStoredBook ,saveReadBooks}