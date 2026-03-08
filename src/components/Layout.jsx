import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../Pages/Home/Home";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full">
        <Outlet /> {/* This will render the matched child route component */}
      </main>

      <Footer />
    </>
  );
}