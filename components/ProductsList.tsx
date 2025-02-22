import { getData } from "@/helper";
import { ProductType } from "@/type";
import React from "react";
import Container from "./Container";
import ProductCard from "./ProductCard";

const ProductsList = async () => {
  const endpoints =
    "https://glore-bd-backend-node-mongo.vercel.app/api/product";
  const product = await getData(endpoints);
  const productsArray = product?.data;

  return (
    <Container className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {productsArray?.map((item: ProductType) => (
        <ProductCard key={item?._id} product={item} />
      ))}
    </Container>
  );
};

export default ProductsList;
