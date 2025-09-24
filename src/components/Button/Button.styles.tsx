import { styled } from "styled-components";

interface ButtonContainerProps {
    variant?: "primary" | "secondary";
}
export const ButtonContainer = styled.button<ButtonContainerProps>`
    border: none;
    font-size: 1.4rem;
    padding: 1.4rem;
    cursor: pointer;

    ${({ variant }) => variant === "primary" && `
        background-color: transparent;
    `}

    ${({ variant }) => variant === "secondary" && `
        background-color: #FD6F00;
        color: white;
        border-radius: 5px;
    `}
    `;