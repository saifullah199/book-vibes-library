import { Outlet } from "react-router-dom";
import ListedBooks from "./Pages/ListedBooks";


const ListedBook = () => {
    return (
        <div>
            <ListedBooks></ListedBooks>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBook;