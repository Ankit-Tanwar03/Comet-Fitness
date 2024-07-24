import React, { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import { Outlet } from "react-router-dom";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
