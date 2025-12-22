import { Copyright } from "@phosphor-icons/react";

const SimpleFooter = () => {
    return (
        <footer className="simple-footer">
            <div className="container">
                <div className="simple-footer__content">
                    <Copyright size={20} weight="fill" color="#BF6EFD" />
                    <span>Copyright 2025. Cosmediks Clinic. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default SimpleFooter;
