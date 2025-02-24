import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./assets/component/Navbar";  // Sesuaikan path
import Footer from "./assets/component/Footer";  // Sesuaikan path
import Home from "./pages/Home";
import About from "./pages/About";

// Layout untuk memastikan Navbar & Footer selalu muncul
const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />  {/* Tempat halaman akan dirender berdasarkan URL */}
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,  // Menggunakan layout agar Navbar selalu ada
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
        ],
    },
]);

export default router;
