"use client";
import Container from "@/components/Container";
import FormattedPrice from "@/components/FormattedPrice";
import Loading from "@/components/Loading";
import { getData } from "@/helper";
import { ProductType } from "@/type";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SinglePage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { id } = params;
  console.log("id", id);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const endpoints =
          "https://glore-bd-backend-node-mongo.vercel.app/api/product";
        const product = await getData(endpoints);
        setProducts(product?.data);
      } catch (error) {
        console.log("Data fetching error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const productData = products?.find((item: ProductType) => item?._id == id);

  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Container
          className=" py-5 md:py-10 flex flex-col md:flex-row items-start 
        gap-10 shadow-lg"
        >
          <div className="w-full md:w-1/2 p-2 border border-green-400 rounded-lg">
            <div className="w-full">
              <video
                src={productData?.video.secure_url}
                controls
                preload="none"
                poster={productData?.images[0]?.secure_url}
                className="w-full max-h-[500px]  rounded-lg shadow-md object-cover cursor-pointer"
              ></video>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start gap-1">
            <h3 className="text-base md:text-xl font-semibold text-black/90">
              {productData?.name}
            </h3>
            <FormattedPrice
              amount={productData?.price ?? ""}
              className="text-lg md:text-lg"
            />
            <p className="text-base text-gray-800 font-medium tracking-wide">
              {productData?.description}...
            </p>
            <p>{productData?.status}</p>
            <p className="text-base  font-semibold text-black/80">
              Category:{" "}
              <span className="text-blue-600">
                {productData?.category.name}
              </span>
            </p>
            <p className="text-base font-semibold">
              Status:
              <span className="text-green-500 text-lg">
                {productData?.status ? " true" : "false"}
              </span>
            </p>
          </div>
        </Container>
      )}
    </>
  );
};

export default SinglePage;
