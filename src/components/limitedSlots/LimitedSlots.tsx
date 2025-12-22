import { MapPinArea } from "@phosphor-icons/react";

const LimitedSlots = () => {
    return (
        <section className="limited-slots">
            {/* SVG gradient definition */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <linearGradient id="gradient-icon" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="15.57%" stopColor="#FFD473" />
                        <stop offset="97.98%" stopColor="#BF6EFD" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="container">
                <div className="limited-slots__card">
                    <h2 className="limited-slots__title">Limited Slots Available</h2>
                    <p className="limited-slots__desc">
                        An early consultation allows for better assessment and
                        <br />
                        long-term results. Secure your slot today.
                    </p>
                    <div className="limited-slots__location">
                        <span className="limited-slots__icon">
                            <MapPinArea size={40} weight="fill" />
                        </span>
                        <span>Vytila, Kochi</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LimitedSlots;
