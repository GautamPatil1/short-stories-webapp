
import BookCard from "./BookCard";
import { useLocation } from "react-router-dom";

function Slider(){

    const location = useLocation();
    const gg = location.state.info;
    console.log(gg);
    const arr = gg.genre || gg;
    return(
        <div className="slider" >
            <div className="book-container"
            style={{
                display: "flex",
                marginLeft:"15%",
                marginRight:"15%",
                backgroundColor:"transparent",
                flexWrap: "wrap",
                
            }}
            >
                {arr.map((book) => (
                <div className="book-card-container" style={{flex: "1 1 0"}}>
                    <BookCard
                    BookCover={book.Cover}
                    BookName={book.Name}
                    AuthorName={book.Author}
                    Content={book.content}
                    key={book.Name} // Don't forget to add a unique key for each item in the map
                />
                </div>
                ))}
          </div>
        </div>
    )
}


export default Slider;