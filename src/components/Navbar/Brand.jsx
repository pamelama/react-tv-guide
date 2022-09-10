import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <Link to="/">
      <h1 className="text-3xl font-bold italic text-gray-100 transition-colors delay-100 hover:text-gray-50">
        tvGuide
      </h1>
    </Link>
  );
};

export default Brand;
