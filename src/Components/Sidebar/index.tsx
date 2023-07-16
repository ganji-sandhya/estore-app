import { FC } from "react";
import "./Sidebar.scss";
import Accordions, {AccordionType} from "./Accordions";
import { Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
const Sidebar: FC = () => {

  const accordions: AccordionType[] = useSelector((state: RootState)=> state.accordion);

  return (
      <div className="sidebar">
        <div className="header p-3">
          <h2 className="header__text">Category</h2>
        </div>
        <div className="accordions_container">
          <Accordion defaultActiveKey="0">
            <Accordions categories={accordions} />
          </Accordion>
        </div>
      </div>
  );
};

export default Sidebar;
