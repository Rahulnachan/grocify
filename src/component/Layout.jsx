import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  // ✅ Dynamic banner titles by route
  const getPageTitle = () => {
    if (location.pathname === "/fruits") return "Fruits";
    if (location.pathname === "/Dairy") return "Dairy";
    if (location.pathname === "/Seafood") return "Seafood";
    if (location.pathname === "/Allproduct") return "All Products";
    return ""; // No title for home
  };

  // ✅ Hide banner on home page
  const showBanner = location.pathname !== "/";

  return (
    <div>
      <Navbar />
      {showBanner && <Banner title={getPageTitle()} />} {/* ✅ Conditionally show */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
