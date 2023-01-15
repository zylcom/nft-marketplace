import { useState } from "react";
import { Dashboard, Navbar, Sidebar } from "./components";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <div className="h-screen lg:flex">
      <div>
        <div className="w-[120px]"></div>
        <Sidebar openMenu={isMenuOpen} clickHandler={toggleMenu} />
      </div>
      <div className="w-full">
        <Navbar clickHandler={toggleMenu} />

        <div className="p-4">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
