import { Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Logo from "../../assets/logo-horizontal.jpg";
import "./navbar.css";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        {location.pathname !== "/" && (
          <button onClick={goBack}>
            <ArrowLeft size={32} color="#495e57" />
          </button>
        )}
        <Link to="/">
          <img src={Logo} alt="little-lemon-logo" width={200} />
        </Link>
      </div>
      <div className="hamburguer-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
