import {FC, useEffect} from 'react';
import * as _ from 'lodash';
import { Navbar, Nav } from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store';
import { getCategories } from '../../redux/CategorySlice/actions';

const CategoryMenu: FC = () => {

    const categories = useSelector((state: RootState) => state.category.categories);

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getCategories());
    },[]);

    return (
        <Navbar bg="dark" data-bs-theme="dark" className="estore-navbar nav-underline p-1">
            <Navbar.Brand>Categories</Navbar.Brand>
            <Nav className="me-auto">
                {categories.map((category:string, index: number) => <Nav.Link key={_.uniqueId()} href={`#${category}`}>{category}</Nav.Link>)}
            </Nav>
        </Navbar>
    );
};

export default CategoryMenu;