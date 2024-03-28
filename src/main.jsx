import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componenets/Root';
import Home from './Componenets/Pages/Home';
import ListedBooks from './Componenets/Pages/ListedBooks';
import PagesToRead from './Componenets/Pages/PagesToRead';
import BookDetail from './Componenets/BookDetail';
import ReadBooks from './Componenets/ReadBooks';
import Wishlist from './Componenets/Wishlist';
import Error from './Componenets/Error';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error> ,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/listed-books',
        element:<ListedBooks></ListedBooks>,
        children:[
          {
            index:true,
            element:<ReadBooks></ReadBooks>
          },
          {
            path: 'wishlist',
        
            element: <Wishlist></Wishlist>
          }
        ]
        
        
      },
      
      
      
      
      {
        path: '/pages-to-read',
        element:<PagesToRead></PagesToRead>
      },
      
      
      
      {
        path: 'book/:id',
        element:<BookDetail></BookDetail>,
        loader: () => fetch('Book.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
