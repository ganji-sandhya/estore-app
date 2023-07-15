import { FC } from "react";
import { Nav } from "react-bootstrap";

export type itemsType = {
    items: string[]
};
const AccordionItems: FC<itemsType> = ({items}) => {

    return (
        <>
        <Nav defaultActiveKey="/home" className="flex-column">
            {
                items.map((item: string, index: number) => <Nav.Link key={index} eventKey={""+index} href={`/${item}`}>{item}</Nav.Link>)
            }
        </Nav>
        </>
    )
};

export default AccordionItems;