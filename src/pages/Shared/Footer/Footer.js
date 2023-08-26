import React from 'react';
import footerBG from '../../../assets/images/footer_cvt.png'
const Footer = () => {
    return (
      <footer
        style={{ background: `URL(${footerBG})`, backgroundSize: "cover" }}
        className="lg:footer-center"
      >
        <div className="footer p-5">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Emergency Checkup</a>
            <a className="link link-hover">Monthly Checkup</a>
            <a className="link link-hover">Weekly Checkup</a>
            <a className="link link-hover">Deep Checkup</a>
          </div>
          <div>
            <span className="footer-title">Oral Health</span>
            <a className="link link-hover">Fluoride Treatment</a>
            <a className="link link-hover">Cavity Filling</a>
            <a className="link link-hover">Teath Whitening</a>
          </div>
          <div>
            <span className="footer-title">Our Address</span>
            <a className="link link-hover">New York - 101010 Hudson</a>
          </div>
        </div>
        <div className="flex-col lg:flex-row my-10 text-center">
          <p>Copyright © 2023 - All right reserved</p>
          <p> by </p>
          <p>K. M. Minhaz Uddin</p>
        </div>
      </footer>
    );
};

export default Footer;