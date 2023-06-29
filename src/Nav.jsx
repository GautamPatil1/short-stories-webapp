import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from './Book';
import './Nav.css'
function Nav() {
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


  return (
  
    <>
    <nav className="navbar">
    
    <div className="logo">Short-Stories</div>

    
    <ul className="nav-links">
      
      <div className="menu">

        

        <li className="services">
          <a href="/">Browse</a>

          
          <ul className="dropdown">
            <li><Link to="slider" state={{"info" : api.Data["Fantasy"]}}> Fantasy </Link> </li>
            <li><Link to="slider" state={{"info" : api.Data["Horror"]}}> Horror </Link></li>
            <li><Link to="slider" state={{"info" : api.Data["Mystery"]}}> Mystery </Link></li>
            <li><Link to="slider" state={{"info" : api.Data["Philosophy"]}}> Philosophy </Link></li>
          </ul>

        </li>

        <input type="text" id="mySearch" onKeyUp="myFunction()" placeholder="Search.." title="Type in a category"></input>

        
      </div>
    </ul>
  </nav>
    </>
  )
}

export default Nav