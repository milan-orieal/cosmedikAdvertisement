
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';

import { MapPinIcon, SealCheckIcon, ChatCircleDotsIcon, PhoneCallIcon, WhatsappLogoIcon } from "@phosphor-icons/react"
import HeroImage from '../../assets/images/heroImage.webp'
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="hero">
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__wrapper__left">
                        <span className='hero__wrapper__left__subtitle'>Hair Transplant in Kochi</span>
                        <h1 className='hero__wrapper__left__title'>Natural Hair <br /> Restoration by <br />Expert Doctors</h1>
                        <span className='hero__wrapper__left__tagline' >Restore your hairline. Regain your confidence</span>
                        <span className='hero__wrapper__left__details'>Get advanced, doctor‑led hair transplant treatment in Kochi <br className="desktop-break" /> with natural, permanent results.</span>
                        <div className='hero__wrapper__left__contactButtons'>
                            <Button onClick={() => navigate("/contact")}>
                                <PhoneCallIcon size={20} weight="fill" />
                                Book a Free Consultation
                            </Button>
                            <Button theme="chat" onClick={() => navigate("/contact")}>
                                <WhatsappLogoIcon size={20} weight="fill" />
                                Whatsapp Now
                            </Button>
                        </div>
                        <div className='hero__wrapper__left__hero__badges'>
                            <div className="hero__badge">
                                <MapPinIcon size={24} color="#ebab1b" />
                                <span>Vytila, Kochi</span>
                            </div>
                            <div className="hero__badge">
                                <SealCheckIcon size={24} color="#ebab1b" />
                                <span>Verified Doctors</span>
                            </div>
                            <div className="hero__badge">
                                <ChatCircleDotsIcon size={24} color="#ebab1b" />
                                <span>Free Followup</span>
                            </div>

                        </div>
                    </div>
                    <div className="hero__wrapper__right">
                        <img src={HeroImage} alt="Hero Image" />
                    </div>
                </div>

            </div>  

        </div>

    )
}

export default Header;