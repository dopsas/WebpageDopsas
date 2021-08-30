import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavbarComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">DOPSAS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page">INICIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/nosotros" className="nav-link">NOSOTROS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/portafolio" className="nav-link">PORTAFOLIO</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavbarComponent;