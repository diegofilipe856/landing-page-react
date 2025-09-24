import Button from "../Button";
import * as C from "./Navbar.styles";
import type { NavbarViewProps } from "./Navbar.types";
import { useNavigate } from "react-router-dom";

const NavBarView  = ({ buttonsToRender }: NavbarViewProps) => {
    const navigate = useNavigate();

    return <C.NavbarContainer>
        {buttonsToRender.map((button) => (
            <Button key={button.name} onClick={() =>{ navigate(button.link)
            }}>
                {button.name}
            </Button>
        ))}
        <div style={{width: '6.4rem'}}/>
        <Button variant="secondary">Download CV</Button>
    </C.NavbarContainer>;
}

export default NavBarView;