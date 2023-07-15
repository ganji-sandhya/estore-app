import { FC } from "react";
import { Card } from "react-bootstrap";
import './ProductCard.scss';

export type productType = {
    id?: string,
    name: string,
    price: number,
    img: string
};

const ProductCard: FC<productType> = ({name, price, img}: productType) => {

    return (
    <div className="product-card">
        <div className="p-3">
        <Card style={{ width: "10rem" }}>
          <Card.Img
            variant="top"
            src={require(`../../../assets/images/shop/${img}`)}
          ></Card.Img>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>${price}</Card.Text>
            <a href="#">Details</a>
          </Card.Body>
        </Card></div>
      </div>
    );
}
export default ProductCard;