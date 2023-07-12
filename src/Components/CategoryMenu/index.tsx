import {FC} from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CategoryMenu: FC = () => {

    return (
        <Navbar bg="dark" data-bs-theme="dark" className="estore-navbar nav-underline p-1">
            <Navbar.Brand>Categories</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#men">Men</Nav.Link>
                <Nav.Link href="#women">Women</Nav.Link>
                <Nav.Link href="#kids">Kids</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default CategoryMenu;