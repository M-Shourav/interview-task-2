import Container from "@/components/Container";
import ProductsList from "@/components/ProductsList";

import React from "react";

const ProductPage = () => {
  return (
    <Container className="py-10 md:py-5 mb-10">
      <ProductsList />
    </Container>
  );
};

export default ProductPage;
