import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer">
        <li>
          <Link to="/signup">About</Link>
        </li>
        <li>
          <Link to="/signup">Jobs</Link>
        </li>
        <li>
          <Link to="/signup">Blog</Link>
        </li>
        <li>
          <Link to="/signup">Developers</Link>
        </li>
        <li>
          <Link to="/signup">Guidelines</Link>
        </li>
        <li>
          <Link to="/signup">Help</Link>
        </li>
        <li>
          <Link to="/signup">Privacy</Link>
        </li>
        <li>
          <Link to="/signup">Terms</Link>
        </li>
        <li>
          <Link to="/signup">Cookies</Link>
        </li>
        <li>
          <Link to="/signup">Viewr</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;