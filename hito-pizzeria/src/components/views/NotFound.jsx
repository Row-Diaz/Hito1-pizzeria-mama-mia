import { Link } from 'react-router-dom';
import "./NotFound.css"

function NotFound() {
  return (
    <div >
     
      <img className='not-found-img' src="https://c8.alamy.com/comp/2BTM8W9/gloomy-face-of-slice-of-pizza-cartoon-character-with-404-boards-2BTM8W9.jpg" alt="" />
      <Link to="/"><button className="not-found-btn">Home</button></Link>
    </div>
  );
}

export default NotFound;

