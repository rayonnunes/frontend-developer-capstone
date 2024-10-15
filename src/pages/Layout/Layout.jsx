import { Navbar, Footer } from "../../components";
import { Outlet } from "react-router-dom";

import './layout.css'

export function Layout() {
    return (
        <div className="layout-container">
            <Navbar />
            <div className="layout-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}