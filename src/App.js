import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

function App() {
  return (
    <div className="bg-dark-gun-metal">
      <Navbar />
      <h1>Welcome </h1>
      <Outlet />
    </div>
  );
}

export default App;
