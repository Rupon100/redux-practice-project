import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-white text-black">
      <nav className="max-w-7xl mx-auto" >
        <Navbar></Navbar>
      </nav>
      <main className="max-w-7xl mx-auto px-4 min-h-screen" >
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
