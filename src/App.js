import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "./components";

function App() {
  return (
    <div className="bg-dark-gun-metal lg:flex">
      <div>
        <div className="w-[120px]"></div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
