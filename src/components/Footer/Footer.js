import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const footer = (props) => {
    return (
        <footer>
            <div className="container text-center">
                <div className="footer-top">
                    <div className="socialmedia">
                        <a href="https://www.facebook.com"><i className="fab fa-facebook-f ic"></i></a>
                        <a href="https://www.instagram.com"><i className="fab fa-instagram ic"></i></a>
                    </div>
                    <ul className="list-unstyled links d-flex justify-content-center">
                        <li><Link href="">Home</Link></li>
                        <li><Link href="">Pricing</Link></li>
                        <li><Link href="">Contact</Link></li>
                        <li><Link href="">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="divider"></div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-lg-12 text-center"><p>© Bellman All rights reserved.</p></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;