
import ThemeBtn from "./ThemeBtn";
function NavBar() {

    return( 
    <div className="navbar bg-secondary-200">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Logo</a>
      <ThemeBtn/>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
            <a className="btn btn-ghost text-xll"href="/auth">Get Started</a>
        </li>
      </ul>
    </div>
  </div>);
}

export default NavBar;