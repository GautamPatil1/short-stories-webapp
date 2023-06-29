import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Carousel.css'
import BookCard from './BookCard.jsx'

function Carousel(props) {
  
    const arr = props.genre.slice(6, 11);
    return (
      <>
        <div className="carousel-">
          <div className="top-info">
            <div className="genre-tag">
              {props.genre[1].Genre} Genre Stories:
            </div>
            <div className="more">
              <Link to="slider" state={{'info' : props}}>
                See More
              </Link>
            </div>
          </div>
  
          <div className="book-container">
            {arr.map((book) => (
              <BookCard
                BookCover={book.Cover}
                BookName={book.Name}
                AuthorName={book.Author}
                Content={book.content}
                key={book.Name} 
              />
            ))}
          </div>
        </div>
      </>
    );
  }

export default Carousel