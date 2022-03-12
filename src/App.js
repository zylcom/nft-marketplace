// import { Outlet } from "react-router-dom";
import { Dashboard, Navbar, Sidebar } from "./components";

function App() {
  return (
    <div className="h-screen bg-dark-gun-metal lg:flex">
      <div>
        <div className="w-[120px]"></div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="p-4">
          {/* <Outlet /> */}
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
