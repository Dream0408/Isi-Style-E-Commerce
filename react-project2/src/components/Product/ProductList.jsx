import React, { useState, useEffect } from "react";
import "./productlist.scss";
import ProductCard from "./ProductCard";
import products from "../../assets/data/products";
import { Col, Container, Row } from "reactstrap";

const ProductList = () => {
  const [jeans, setJeans] = useState([]);
  const [tshirt, setTshirt] = useState([]);
  const [blazer, setBlazer] = useState([]);
  const [pants, setPants] = useState([]);

  useEffect(() => {
    const filteredJeansProducts = products.filter(
      (item) => item.category === "Jeans"
    );
    const filteredTshirtProducts = products.filter(
      (item) => item.category === "T-Shirt"
    );
    const filteredBlazerProducts = products.filter(
      (item) => item.category === "Blazer"
    );
    const filteredPantsProducts = products.filter(
      (item) => item.category === "Pants"
    );
    setBlazer(filteredBlazerProducts);
    setPants(filteredPantsProducts);
    setTshirt(filteredTshirtProducts);
    setJeans(filteredJeansProducts);
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="3" md="4">
            <div className="filter__widget">
              <select>
                <option>Filter By Category</option>
                <option value="blazer">Blazer</option>
                <option value="jeans">Jeans</option>
                <option value="t-shirt">T-Shirt</option>
                <option value="pants">Pants</option>
              </select>
            </div>
          </Col>
          <Col lg="9" className="Col__sortby">
            <div className="filter__widget">
              <select>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
        </Row>
      </Container>

      <section>
        <Container>
          <Row>
            {jeans ?.map((item) => (
              <ProductCard item={item} />
            ))}
            {tshirt ?.map((item) => (
              <ProductCard item={item} />
            ))}
            {blazer ?.map((item) => (
              <ProductCard item={item} />
            ))}
            {pants ?.map((item) => (
              <ProductCard item={item} />
            ))}
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default ProductList;
