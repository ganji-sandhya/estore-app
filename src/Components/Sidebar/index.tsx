import { FC } from "react";
import "./Sidebar.scss";
import { Accordion, Nav } from "react-bootstrap";
const Sidebar: FC = () => {
  return (
      <div className="sidebar">
        <div className="header p-3">
          <h2 className="header__text">Category</h2>
        </div>
        <div className="accordions_container">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Men</Accordion.Header>
              <Accordion.Body>
                <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link href="/home">Coats</Nav.Link>
                  <Nav.Link eventKey="link-1">Shoes</Nav.Link>
                  <Nav.Link eventKey="link-2">Shirts</Nav.Link>
                  <Nav.Link eventKey="link-3">Trousers</Nav.Link>
                </Nav>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Women</Accordion.Header>
              <Accordion.Body>
                <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link href="/home">Coats</Nav.Link>
                  <Nav.Link eventKey="link-1">Shoes</Nav.Link>
                  <Nav.Link eventKey="link-2">Shirts</Nav.Link>
                  <Nav.Link eventKey="link-3">Trousers</Nav.Link>
                </Nav>
              </Accordion.Body>
            </Accordion.Item>
            {/* <Accordion.Item eventKey="2">
              <Accordion.Header>Kids</Accordion.Header>
              <Accordion.Body>
                <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link href="/home">Coats</Nav.Link>
                  <Nav.Link eventKey="link-1">Shoes</Nav.Link>
                  <Nav.Link eventKey="link-2">Shirts</Nav.Link>
                  <Nav.Link eventKey="link-3">Trousers</Nav.Link>
                </Nav>
              </Accordion.Body>
            </Accordion.Item> */}
          </Accordion>
          
          <div className='accordion'>
                <div className='accordion-item individual-category'>
                    <div className='accordion-header'>
                        <button className='accordion-button' data-bs-target="#accordion-heading-one" data-bs-toggle="collapse">
                            <div className='category-title'>
                                <a href='#'>Kids</a>
                            </div>
                        </button>
                    </div>
                    <div className='accordion-collapse collapse show' id='accordion-heading-one'>
                        <div className='accordion-content'>
                            <ul className="accordion-content__list">
                                <li className='accordion-content__list-item'> <a href='#'>Coats</a> </li>
                                <li className='accordion-content__list-item'> <a href='#'>Boots</a> </li>
                                <li className='accordion-content__list-item'> <a href='#'>Part Wear</a> </li>
                                <li className='accordion-content__list-item'> <a href='#'>Shirts</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
};

export default Sidebar;
