import { AiFillFire, AiFillStar, AiFillVideoCamera } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="text-md flex text-center text-gray-400">
      <li className="mx-2 cursor-pointer px-4 py-1 hover:text-gray-300">
        <Link to="/" className="flex items-center">
          <AiFillFire className="mr-1" /> Popular
        </Link>
      </li>
      <li className="mx-2 cursor-pointer px-4 py-1 hover:text-gray-300">
        <Link to="/top-rated" className="flex items-center">
          <AiFillStar className="mr-1" /> Top Rated
        </Link>
      </li>
      <li className="mx-2 cursor-pointer px-4 py-1 hover:text-gray-300">
        <Link to="/categories" className="flex items-center">
          <AiFillVideoCamera className="mr-1" /> Categories
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
