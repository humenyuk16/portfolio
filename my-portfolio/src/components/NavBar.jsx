const NavBar = () => {
  return (
    <nav className="bg-gray-700 p-4 fixed  top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">My Portfolio</div>
        <div className="space-x-4">
          <a href="#about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white">
            Skills
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white">
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
