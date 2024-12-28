
import { Link } from "react-router";
import ThemeBtn from "./ThemeBtn";
function NavBar() {

    return( 
    <div className="navbar bg-secondary-200">
    <div className="flex-1">
      <Link to="/" viewTransition className="btn btn-ghost text-xl" >Logo</Link>
      <ThemeBtn/>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
            <Link to="/auth" viewTransition className="btn btn-ghost text-xll" >Get Started</Link>
        </li>
      </ul>
    </div>
  </div>);
}

export default NavBar;