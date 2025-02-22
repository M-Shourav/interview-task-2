// export interface ProductType {
//   _id: string;
//   name: string;
//   description: string;
//   category: {
//     _id: string;
//     name: string;
//     description: string;
//     createdAt: string;
//     updatedAt: string;
//   };
//   price: number;
//   status: boolean;
//   images: {
//     public_id: string;
//     secure_url: string;
//     optimizeUrl: string;
//   }[];
//   video: {
//     public_id: string;
//     secure_url: string;
//   };
//   again_category: {
//     _id: string;
//     name: string;
//   };
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }
export interface ProductType {
  _id: string;
  name: string;
  description: string;
  category: {
    _id: string;
    name: string;
  };
  images: {
    public_id: string;
    secure_url: string;
    optimizeUrl: string;
  }[];
  video: {
    public_id: string;
    secure_url: string;
  };
  status: boolean;
  price: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
