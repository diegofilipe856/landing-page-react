import type { ButtonContainerProps } from "./Button.types";
import ButtonView from "./Button.view";

const ButtonContainer = ({children, variant="primary", ...props}: ButtonContainerProps) => {
    return <ButtonView variant={variant} {...props}>{children}</ButtonView>;
}

export default ButtonContainer;
