import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Book.css'
import Footer from "./Footer";
import Nav from "./Nav.jsx";

function Book(){

    const location = useLocation();
    const prop = location.state.data;
    console.log(prop);
    
    return (
        <>
            <div className="book-container-reader">
                <Nav />
                <div className="book-name">
                    <center>{prop.BookName || prop.Name}</center>
                </div>

                <div className="book-author">
                    <center>By {prop.AuthorName || prop.Author} </center>
                </div>

                <div className="book-image">
                    <center><img src={prop.BookCover || prop.Cover} alt={prop.BookName} /></center>
                </div>

                <div className="book-content">
                    {prop.Content || prop.content }
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Book;