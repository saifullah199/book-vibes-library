// import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";


// const ListedBooks = () => {
//     const [tabIndex,setTabIndex]= useState(0);
//     return (
//         <div>
//             <div className="text-center mt-6  bg-gray-200 rounded-xl p-5 font-bold">
//             <h3 className="text-3xl">Books</h3>
//         </div>
//             <div className="text-center mt-5 "> 
//             <details className="dropdown">
//                 <summary className="m-1 btn">Sort By </summary>
//                 <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
//                 <li><a>Rating</a></li>
//                  <li><a>Number of pages</a></li>
//                  <li><a>Publisher year</a></li>
//                 </ul>
//             </details>
//             </div>

//             <div className="flex items-center mt-8 -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
// 	<Link 
//         to='/readbook'
//         onClick={() => setTabIndex(0)}
//     className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2
//     ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600
//      dark:text-gray-900`}>
// 		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
// 			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
// 		</svg>
// 		<span>Read Books</span>
// 	</Link>
// 	<Link 
//     to='/wishlist'
//     onClick={() => setTabIndex(1)}
//     className= { `flex items-center flex-shrink-0 px-5 py-3 space-x-2
//      ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600
//       dark:text-gray-900` }>
// 		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
// 			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
// 			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
// 		</svg>
// 		<span>WishList Books</span>
// 	</Link>
//     <Outlet></Outlet>
// </div>

//         </div>
//     );
// };

// export default ListedBooks;

import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const ListedBooks = () => {
  const [books, setBooks] = useState([]);
  const [sortBy, setSortBy] = useState('rating');
//   const [tab, setTab] = useState('read');
const [tabIndex,setTabIndex]= useState(0);

  useEffect(() => {
    // Function to get books data from local storage
    const getBooksFromStorage = () => {
      const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
      setBooks(storedBooks);
    };
    getBooksFromStorage();
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

//   const handleTabChange = (tabName) => {
//     setTab(tabName);
//   };

//   const filteredBooks = books.filter(book => {
//     if (tab === 'read') {
//       return book.read === true;
//     } else if (tab === 'wishlist') {
//       return book.wishlist === true;
//     }
//     return true;
//   });

//   const sortedBooks = filteredBooks.sort((a, b) => {
//     if (sortBy === 'pages') {
//       return a.totalPages - b.totalPages;
//     } else if (sortBy === 'year') {
//       return a.yearOfPublishing - b.yearOfPublishing;
//     } else {
//       return b.rating - a.rating;
//     }
//   });

  return (
    <div>
      <h1>Listed Books</h1>
      <div>
        <label>Sort By:</label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
          <option value="year">Published Year</option>
        </select>
      </div>

      <div className="flex items-center mt-8 -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<Link 
       to='/readbook'
       onClick={() => setTabIndex(0)}
   className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2
   ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600
    dark:text-gray-900`}>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
		<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
	<span>Read Books</span>
	</Link>
	<Link 
    to='/wishlist'
    onClick={() => setTabIndex(1)}
   className= { `flex items-center flex-shrink-0 px-5 py-3 space-x-2
     ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600
     dark:text-gray-900` }>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
		<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
		<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>WishList Books</span>
	</Link>
    <Outlet></Outlet>
 </div>
      {/* <div>
        <button onClick={() => handleTabChange('read')}>Read</button>
        <button onClick={() => handleTabChange('wishlist')}>Wishlist</button>
      </div> */}
      {/* <div className="books-container">
        {sortedBooks.map((book, index) => (
          <div className="book-card" key={index}>
            <img src={book.image} alt={book.bookName} />
            <h2>{book.bookName}</h2>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Tags: {book.tags.join(', ')}</p>
            <p>Total Pages: {book.totalPages}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Year of Publishing: {book.yearOfPublishing}</p>
            <p>Rating: {book.rating}</p>
            <button>View Details</button>
          </div>
        ))}
      </div> */}
    </ div>
  );
};

export default ListedBooks;
