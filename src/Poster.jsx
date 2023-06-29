import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import './Poster.css'

function Poster(props) {
    const [api, setApi] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://gautampatil1.github.io/test_data.json');
          const apidata = await response.json();
          setApi(apidata);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    if (api === null) {
      // Render loading state or fallback UI
      return <div>Loading...</div>;
    }
    function getRandomJsonFromCategories(categories) {
      const combinedJsons = categories.flatMap(category => api.Data[category] || []);
      const randomIndex = Math.floor(Math.random() * combinedJsons.length);
      return combinedJsons[randomIndex];
    }

    const genres = [ 'Fantasy', 'Mystery', 'Horror', 'Philosophy'];
    const randomStory = getRandomJsonFromCategories(genres);


    return (
        <>
            <div className="container-poster">
                <div className="card">
                    <div className="image-poster">
                        <img src="https://img.freepik.com/free-vector/young-woman-reading-korean-drawing-style_52683-26614.jpg?w=740&t=st=1686839533~exp=1686840133~hmac=5f7f7a0bfd2ff8b769c5921d008347f3ccebf6bed86931ed8477827a56c83aa1" alt="" />
                    </div>

                    <div className="info-poster">
                        <h3>
                            Reading short stories is a delightful way to immerse yourself in captivating narratives within a compact timeframe. With their concise yet impactful storytelling, short stories offer a unique literary experience. They allow you to explore diverse themes, characters, and settings, providing a quick escape from reality. In just a few pages, you can be transported to different worlds, encounter thought-provoking ideas, and experience a wide range of emotions. Whether you seek entertainment, inspiration, or a momentary respite, the power of short stories lies in their ability to captivate, enlighten, and evoke a sense of wonder within a brief yet meaningful encounter.
                            <br />
                            <br />
                            <center>
                                <Link to="book" state={{'data' : getRandomJsonFromCategories(genres) }}>
                                    Random Story ?
                                </Link>
                            </center>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poster