import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="border-b-4 border-green-700 text-center fixed top-0 bg-green-600 font-bold w-full text-lg text-white h-12">
      <ul>
        <li className="inline-block p-y4">
          <Link to="/" className="px-6 ">
            Home
          </Link>
        </li>

        <li className="inline-block p-y4">
          <Link to="/about" className="px-6 ">
            About
          </Link>
        </li>

        <li className="inline-block p-y4">
          <Link to="/articleList" className="px-6 ">
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
