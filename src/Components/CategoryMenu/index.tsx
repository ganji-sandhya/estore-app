import {FC} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

const CategoryMenu: FC = () => {

    const categories = useSelector((state: RootState) => state.category);
    return (
        <Navbar bg="dark" data-bs-theme="dark" className="estore-navbar nav-underline p-1">
            <Navbar.Brand>Categories</Navbar.Brand>
            <Nav className="me-auto">
                {categories.map((category:string, index: number) => <Nav.Link key={index} href="#men">{category}</Nav.Link>)}
            </Nav>
        </Navbar>
    );
};

export default CategoryMenu;