import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = () => {
  return (
    <form className="flex">
      <input
        type="text"
        placeholder="find a tv show..."
        className="rounded-bl-full rounded-tl-full bg-gray-700/70 px-4 py-2 text-sm text-gray-50 focus-visible:outline-0"
      />
      <button className="flex items-center rounded-br-full rounded-tr-full bg-red-600/70 px-4 py-2 text-lg uppercase text-gray-50 transition-colors hover:bg-red-500">
        <AiOutlineSearch className="mr-1" />
      </button>
    </form>
  );
};

export default SearchForm;
