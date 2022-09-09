import SearchForm from "./SearchForm";
import Brand from "./Brand";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <nav className="font-exo2 fixed z-10 w-full bg-gray-900/80 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Brand />
        <NavList />
        <SearchForm />
      </div>
    </nav>
  );
};

export default Navbar;
