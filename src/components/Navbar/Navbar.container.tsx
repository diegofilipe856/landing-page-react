import NavBarView from "./Navbar.view";

const NavBarContainer = () => {
    const buttonsToRender =[
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" },
    ]

    return <NavBarView buttonsToRender={buttonsToRender} />;
}
export default NavBarContainer;