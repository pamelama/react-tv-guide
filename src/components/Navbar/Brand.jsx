const Brand = (props) => {
  return (
    <a href={props}>
      <h1 className="text-3xl font-bold text-red-600 transition-colors  delay-100 hover:text-gray-50">
        tv
        <span className="font-medium italic text-gray-50 transition-colors delay-150 hover:text-red-600">
          guide
        </span>
      </h1>
    </a>
  );
};

export default Brand;
