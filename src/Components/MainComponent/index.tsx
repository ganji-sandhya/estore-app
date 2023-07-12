import { FC } from "react";
import Sidebar from "../Sidebar";
import Products from "../Products";

const MainComponent: FC = () => {
  return (
    <div className="container-fluid row">
      <div className="col-sm-3 col-md-3 col-lg-3 ps-0">
        <Sidebar />
      </div>
      <div className="col-sm-9 col-md-9 col-lg-9">
        <Products />
      </div>
    </div>
  );
};

export default MainComponent;
