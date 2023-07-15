import { FC } from "react";
import { Accordion } from "react-bootstrap";
import AccordionItems from "./AccordionItem";

export type AccordionType = {
    category: string;
    items: string[];
};

export type AccordionsType = {
    categories: AccordionType[];
}
const Accordions: FC<AccordionsType> = ({categories}) => {
 
  return (
    <>
      {
          categories.map(
            (value: AccordionType, index: number) => 
              <Accordion.Item key={index} eventKey={"" + index}>
                <Accordion.Header>{value.category}</Accordion.Header>
                <Accordion.Body>
                  <AccordionItems items={value.items} />
                </Accordion.Body>
              </Accordion.Item>
            )
      }
    </>
  );
};

export default Accordions;