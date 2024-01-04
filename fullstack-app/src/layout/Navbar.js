import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    backgroundImage: `url("https://blog.vantagecircle.com/wp-content/uploads/2020/01/Employee-Management-1.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-black"
      style={navbarStyle}
    >
      <div className="container-fluid">
        <div className="navbar-brand">
          <a
            href="https://www.linkedin.com/company/f2fintech/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "blue",
              textDecoration: "none",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            <img
              src="https://media.licdn.com/dms/image/D4D0BAQGMsbNmxwk4hw/company-logo_200_200/0/1692429696408/f2fintech_logo?e=2147483647&v=beta&t=CX80ai_S94zoOaV8_yCdeWOzk7Pmshyk_CbMelUPwUM"
              alt="Logo"
              style={{ width: "50px", height: "auto" }}
            />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Add your navigation links here */}
        </div>
        <Link className="btn btn-outline-light" to="/adduser">
          Add Emp
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
