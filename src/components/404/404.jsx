import { Link } from "react-router-dom";
import './404.css';

const NotFound = () => {
    return (
      <div className="not-found">
        <h1>404</h1>
        <p>Page not found.</p>
        <Link to='/characters'>Go Back</Link>
      </div>
    );
  }
  
  export default NotFound;