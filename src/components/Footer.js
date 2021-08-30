import React from 'react';
import './styles/Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

class FooterController extends React.Component {
    render() {
        var today = new Date();
        var year = today.getFullYear();

        return (
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5 ">
                        <div className="row ">
                            <div className="col-xl-4 col-md-4 mb-30 ">
                                <div className="single-cta ">
                                    <FontAwesomeIcon icon={faMapMarked} className="footer-icon" />
                                    <div className="cta-text ">
                                        <h4>Encuéntranos</h4>
                                        <span>Breña, Lima, Perú</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30 ">
                                <div className="single-cta ">
                                    <FontAwesomeIcon icon={faPhone} className="footer-icon" />
                                    <div className="cta-text ">
                                        <h4>Llámanos</h4>
                                        <span> (+51) 952928804 / 925648102</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30 ">
                                <div className="single-cta ">
                                    <FontAwesomeIcon icon={faEnvelopeOpen} className="footer-icon" />
                                    <div className="cta-text ">
                                        <h4>Envíenos un correo</h4>
                                        <span>ventas@dopsas.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area ">
                    <div className="container ">
                        <div className="row ">
                            <div className="col-xl-12 col-lg-12 text-center text-lg-center ">
                                <div className="copyright-text ">
                                    <p>Copyright &copy; {year}, All Right Reserved <Link to="/">Dopsas</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterController;