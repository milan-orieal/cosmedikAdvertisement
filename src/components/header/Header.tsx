import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { PhoneIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import Button from "../button/Button";
import Logo from "../../assets/images/logo.svg";

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isShown, setIsShown] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {
        setIsShown(false);
    }, [location]);

    const handleWhatsAppClick = () => {
        window.open("https://wa.me/1234567890", "_blank");
    };

    return (
        <>
            <header className={`header ${isScrolled ? "scrolled" : ""}`}>
                <div className="container">
                    <div className="header__wrapper">
                        <Link to="/" className="header__logo">
                            <img src={Logo} alt="Cosmediks" />
                        </Link>
                        <div className="header__flex">
                            <Button theme="chat" onClick={() => navigate("/contact")}>
                                <WhatsappLogoIcon size={20} weight="fill" />
                                Chat Now
                            </Button>
                            <Button onClick={() => navigate("/contact")}>
                                <PhoneIcon size={20} weight="fill" />
                                Let's Talk
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={`header__overlay ${isShown ? "show" : ""}`} onClick={() => setIsShown(false)} />
            </header>
            
            {/* Floating WhatsApp Button for Mobile */}
            <button className="floating-whatsapp" onClick={handleWhatsAppClick} aria-label="Chat on WhatsApp">
                <WhatsappLogoIcon size={28} weight="fill" />
            </button>
        </>
    )
}

export default Header;