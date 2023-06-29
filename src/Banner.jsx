import { useEffect } from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

function Banner(params) {
    return (
        <>
            <div className='banner'>
                
                <div className="image">
                    <img src={params.img} alt="" />
                </div>
                <div className="info">

                    <div className="genre">
                        {params.genre}
                    </div>

                    <div className="covername">
                        {params.name}
                    </div>
                    
                    <div className="author">
                         {params.author}
                    </div>
                    <div className="description">
                        {params.description}
                    </div>


                </div>
            </div>
        </>
    )
}

export default Banner