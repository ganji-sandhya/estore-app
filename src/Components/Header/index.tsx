import {FC} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import './Header.scss';

const Header: FC = () => {

    return (
        <header className="estore-header bg-dark row p-2">
        <div className="brand col-sm-2 col-md-2 col-lg-2">
          <h2 className="brand__text">eStore</h2>
        </div>
        <div className="search-container col-sm-7 col-md-7 col-lg-7">
          <div className="input-group">
          <div className="input-group-prepend">
          <Dropdown>
              <Dropdown.Toggle variant="secondary" className="input-group__dropdown" id="dropdown-basic">
                Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#men">Men</Dropdown.Item>
                <Dropdown.Item href="#women">Women</Dropdown.Item>
                <Dropdown.Item href="#kids">Kids</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
            <input
              type="text"
              name="search"
              className="form-control"
              placeholder="Search..."
            />
            <div className="input-group-append">
              <button className="input-group__search-icon btn btn-secondary">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
        <div className="estore-header-right col-md-3 col-lg-3 col-sm-3">
          <div className="login-container">
            <i className="fa fa-user-circle user-icon" />
            <h6 className="login-container__text"><a>Login</a> / <a>Register</a></h6>
          </div>
          <div className="cart-container">
            <ul className="cart-items">
              <li className="cart-item"><i className="fa fa-heart"></i></li> 
              <li className="cart-item"><i className="fa fa-shopping-cart"></i></li> 
            </ul>
          </div>
        </div>
      </header>
    );
};

export default Header;