import React from "react";
import { useNavigate } from "react-router-dom";

interface Button {
    onClick?: () => void;
    children?: React.ReactNode;
    disabled?: boolean;
    className?: string;
    theme?: "default" | "outline" | "chat";
    type?: "button" | "submit" | "reset";
    href?: string;
}

const Button: React.FC<Button> = ({
    onClick,
    children,
    disabled,
    className,
    theme = "default",
    type = "button",
    href,
}) => {

    const navigate = useNavigate();

    const getThemeClass = () => {
        switch (theme) {
            case "chat": return "btn-chat";
            case "outline": return "btn-outline";
            default: return "btn-default";
        }
    };

    if (href) {
        return (
            <button
                className={`btn ${className} ${getThemeClass()}`}
                onClick={() => navigate(href)}
                disabled={disabled}
                type={type}
            >
                {children}
            </button>
        )
    }

    return (
        <button
            className={`btn ${className} ${getThemeClass()}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;