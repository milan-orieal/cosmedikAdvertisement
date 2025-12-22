import {
    FacebookLogo,
    InstagramLogo,
    LinkedinLogo,
    PhoneCall,
    Envelope,
    MapPin, WhatsappLogo
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-white.svg";
import Quote from "../../assets/images/footer-quote.svg";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div></div>
                    <div>
                        <i className="footer__quote">
                            <img src={Quote} alt="Ready to Wow" />
                        </i>
                    </div>
                </div>
                <div className="footer__row">
                    <div className="footer__col">
                    <Link to="/" className="footer__logo">
                            <img src={Logo} alt="Cosmediks" />
                        </Link>
                        <p className="footer__text">We are the experts in skin and hair treatments, hair transplantation and cosmetic injectables performed by qualified, experienced clinicians to enhance your natural beauty and help you look and feel like the best version of you.</p>
                        <div className="footer__social">
                            <Link to="https://www.instagram.com/cosmediks_" target="_blank"><InstagramLogo size={32} weight="fill"/></Link>
                            <Link to="https://www.facebook.com/Cosmediks" target="_blank"><FacebookLogo size={32} weight="fill"/></Link>
                            <Link to="https://in.linkedin.com/company/cosmediks-skin-laser-and-hair-transplant-clinic" target="_blank"><LinkedinLogo size={32} weight="fill"/></Link>
                            <Link to="https://wa.me/917025250024" target="_blank"><WhatsappLogo size={32} weight="fill"/></Link>
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__nav">
                            <div>
                                <span className="footer__title">Services</span>
                                <div className="footer__menu">
                                    <Link to="/services">Hair Care</Link>
                                    <Link to="/services">Lasers</Link>
                                    <Link to="/services">Skin Care</Link>
                                </div>
                            </div>
                            <div>
                                <span className="footer__title">Quick Links</span>
                                <div className="footer__menu">
                                    <Link to="/about">About Us</Link>
                                    <Link to="/services">Services</Link>
                                    <Link to="/gallery">Gallery</Link>
                                    <Link to="/blog">Blog</Link>
                                    <Link to="/contact">Contact Us</Link>
                                </div>
                            </div>
                            <div>
                                <span className="footer__title">Get In Touch</span>
                                <div className="footer__menu">
                                    <Link to="#"><PhoneCall size={18} weight="fill" />+91 7025250024</Link>
                                    <Link to="#"><Envelope size={18} weight="fill" />cosmediks.clinic@gmail.com</Link>
                                    <Link to="#"><MapPin size={18} weight="fill" />View Us On Map</Link>
                                </div>
                            </div>
                        </div>
                        <span className="footer__copy">© Copyright 2025. Cosmediks. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}


// Floating Action Buttons 
const FloatingActions = () => (
  <div className="fab-container">
    <a
      href="https://wa.me/917025250024"
      className="fab fab-whatsapp"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
    >
      {/* <span className="fab-tooltip">Chat on WhatsApp</span> */}
      <WhatsappLogo size={28} weight="fill" />
    </a>
    <a
      href="tel:+917025250024"
      className="fab fab-phone"
      aria-label="Call us"
    >
      {/* <span className="fab-tooltip">Call us</span> */}
      <PhoneCall size={28} weight="fill" />
    </a>
  </div>
);

const FooterWithActions = () => (
  <>
    <Footer />
    <FloatingActions />
  </>
);

export default FooterWithActions;