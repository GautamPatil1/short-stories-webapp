import { useEffect } from "react";
import { Link } from "react-router-dom";
import './BookCard.css'
import { Router, Routes, Route } from 'react-router-dom';


function BookCard(props){

    

    return (
        <>
            <div className="book-card">
                        <div className="book-image">
                            
                                <Link to="book" state={{'data': props}}>
                                    <img src={props.BookCover} alt="book" />
                                </Link>
                            
                        </div>

                        <div className="book-info">
                            <h1>
                                {props.BookName}
                            </h1>
                            <h2>
                                {props.AuthorName}
                            </h2>

                        </div>
            </div>
        </>
    )
};

export default BookCard