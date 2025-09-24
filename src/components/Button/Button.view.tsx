import type { ButtonViewProps } from "./Button.types";
import * as C from "./Button.styles";

const ButtonView = ({children, variant, ...props}: ButtonViewProps) => {
    return <C.ButtonContainer variant={variant} {...props}>{children}</C.ButtonContainer>;
}

export default ButtonView;