import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { WhatsappLogo, Phone } from "@phosphor-icons/react";
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

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="header__wrapper">
                    <Link to="/" className="header__logo">
                        <img src={Logo} alt="Cosmediks" />
                    </Link>
                    <div className="header__flex">
                        <Button theme="chat" onClick={() => navigate("/contact")}>
                            <WhatsappLogo size={20} weight="fill" />
                            Chat Now
                        </Button>
                        <Button onClick={() => navigate("/contact")}>
                            <Phone size={20} weight="fill" />
                            Let's Talk
                        </Button>
                    </div>
                </div>
            </div>
            <div className={`header__overlay ${isShown ? "show" : ""}`} onClick={() => setIsShown(false)} />
        </header>
    )
}

export default Header;