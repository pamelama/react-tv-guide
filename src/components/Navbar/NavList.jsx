import { AiFillFire, AiFillStar, AiFillVideoCamera } from "react-icons/ai";

const NavList = () => {
  return (
    <ul className="text-md flex text-center text-gray-400">
      <li className="mx-2 flex cursor-pointer items-center px-4 py-1 hover:text-gray-300">
        <AiFillFire className="mr-1" /> Popular
      </li>
      <li className="mx-2 flex cursor-pointer items-center px-4 py-1 hover:text-gray-300">
        <AiFillStar className="mr-1" /> Top Rated
      </li>
      <li className="mx-2 flex cursor-pointer items-center px-4 py-1 hover:text-gray-300">
        <AiFillVideoCamera className="mr-1" /> Categories
      </li>
    </ul>
  );
};

export default NavList;
