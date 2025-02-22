import { ProductType } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormattedPrice from "./FormattedPrice";
interface props {
  product: ProductType;
}
const ProductCard = ({ product }: props) => {
  return (
    <div
      className="border border-gray-300 shadow-md rounded-md flex 
    flex-col gap-1 items-start p-1 h-full"
    >
      <Link
        href={{
          pathname: `/products/${product?._id}`,
          query: { id: product?._id },
        }}
        className="h-96 object-cover overflow-hidden rounded-md p-3"
      >
        {product?.images.map((item) => (
          <Image
            width={400}
            height={400}
            key={item?.public_id}
            src={item?.secure_url}
            priority={true}
            alt="product-images"
            className="h-full rounded-md hover:scale-110 overflow-hidden duration-300 ease-in-out"
          />
        ))}
      </Link>
      <div className="w-full flex flex-col gap-y-2 px-2 mb-3">
        <div className="w-full flex items-center justify-between">
          <p className="text-base font-semibold text-gray-600">
            {product?.category.name}
          </p>
          <FormattedPrice amount={product?.price} />
        </div>
        <p className="text-lg font-semibold">{product?.description}...</p>
        <Link
          href={{
            pathname: `/products/${product?._id}`,
            query: { id: product?._id },
          }}
          className="w-full bg-black/70 inline-flex items-center justify-center
           text-white text-center py-2 rounded-md text-base font-semibold hover:bg-black
            duration-300 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
