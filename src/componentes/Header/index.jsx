import'./index.css';

import bmwlogo from "../../assets/bmw-logo-681.png";


const Header = () => {

  return (

    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ zIndex: 5 }}>
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img 
              src={bmwlogo} 
              alt="BMW Logo" 
              width="40" 
              height="30" 
              className="d-inline-block align-text-top me-2"
            />
            <h2 className="mb-0 text-white brand-title">BMW</h2>
          </a>
      

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  );
  
};

export default Header;